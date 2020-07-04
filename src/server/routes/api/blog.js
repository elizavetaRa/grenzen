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


    if (!title || !content || !preview || !date) {
        console.log("error");
        res.status(400).send({
            error: 'Missing title/content/preview/date'
        })
    } else {

        const newsItem = new NewsItem({
            title,
            content,
            preview,
            date,
            youtube,
            hashtags
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
        }).catch(err => res.send(err))
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