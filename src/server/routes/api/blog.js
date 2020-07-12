const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../../config')
const upload = require('../../utils/upload')
const NewsItem = require("../../models/NewsItem")

const {
    userMiddleware,
    checkLoggedIn
} = require('../../utils/middleware')

router.use(userMiddleware)


router.post('/newsitem', checkLoggedIn, (req, res) => {
    const {
        title,
        content,
        preview,
        date,
        youtube,
        hashtags
    } = req.body

    console.log(
        content.length)


    if (!title || !content || !preview || !date) {
        console.log("error");
        res.status(400).send({
            error: 'Missing title/content/preview/date'
        })
    } else {

        let hashtag = hashtags ? hashtags : []

        const newsItem = new NewsItem({
            title: title,
            content: content,
            preview: preview,
            date: date,
            youtube: youtube,
            hashtags: hashtag
        }).save().then(newsItem => {
            let id = newsItem._id;
            if (req.files && req.files.image) {
                upload(req.files.image).then(imageUrl => {

                    console.log("imageurl", imageUrl)
                    NewsItem.findByIdAndUpdate(id, {
                            image: imageUrl
                        }, {
                            new: true
                        })
                        .then(user => res.send({
                            id
                        }))
                })
            } else
                res.send({
                    id
                })
        }).catch(err => {
            console.log(err)
            res.send(err)
        })
    }


})

router.get('/newsitem/:id', (req, res) => {
    const id = req.params.id

    if (!id) res.status(400).send({
        error: 'Missing id'
    })

    NewsItem.findById(id).then(item => {
        res.send({
            item
        });
    }).catch(err => res.send(err));

})

router.get('/newsitems/:page?', (req, res) => {
    const page = req.params.page
    const chunks = []

    //Skip and limit
    const items = NewsItem.find().sort({
        _id: -1
    }).then(items => {

        let i = 0;
        let n = items.length;

        while (i < n) {
            chunks.push(items.slice(i, i += 5));
        }

        if (page && parseInt(page) && chunks[page - 1]) res.send(chunks[page - 1])

        else res.send(chunks)
    })
})

router.get("/filter/newsitems", (req, res) => {

    let hashtags = ["test", "test2"]
    const chunks = []

    console.log("hashtags", hashtags)

    const items = NewsItem.find().sort({
        _id: -1
    }).then(items => {

        const result = []
        hashtags.forEach(hashtag => {
            let filtered = items.filter(item => item.hashtags.includes(hashtag))

            filtered.forEach(el => {
                if (result.indexOf(el) === -1) result.push(el);
            })

            let i = 0;
            let n = result.length;

            while (i < n) {
                chunks.push(result.slice(i, i += 5));
            }

            res.send(chunks)

        })
        //
    }).catch(err => res.send(err))
})

router.get("/delete/newsitem/:id", checkLoggedIn, (req, res) => {
    const id = req.params.id

    NewsItem.deleteOne({
        _id: id
    }).then(res => {
        console.log("deleted", id)
        res.send({
            message: "Post deleted"
        });
    }).catch(err => {
        console.log(err)
        res.error(err)
    })
})

router.post('/edit-newsitem/:id', checkLoggedIn, (req, res) => {
    const id = req.params.id
    const {
        title,
        content,
        preview,
        date,
        youtube,
        hashtags
    } = req.body

    const image = req.files && req.files.image ? req.files.image : null

    if (!title || !content || !preview || !date || !id) res.status(400).send({
        error: 'Missing title/content/preview/date/id'
    })

    NewsItem.findByIdAndUpdate(id, {
        title,
        content,
        preview,
        date,
        image,
        youtube,
        hashtags
    }, {
        new: true
    }).then(newsItem => {
        let id = newsItem._id;
        res.send({
            id
        })
    }).catch(err => res.send(err))
})

module.exports = router