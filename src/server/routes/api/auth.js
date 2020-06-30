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

router.post('/sign-up', (req, res) => {
    const {
        email,
        password
    } = req.body

    if (!email || !password) res.status(400).send({
        error: 'Missing Credentials.'
    })

    User.findOne({
            email
        })
        .then(existingUser => {
            if (existingUser) return res.status(400).send({
                error: 'E-Mail exists already.'
            })

            return req.files && req.files.picture ? upload(req.files.picture) : Promise.resolve()
        })
        .then(pictureUrl => {
            const hashedPassword = bcrypt.hashSync(password, 10)
            return new User({
                email,
                password: hashedPassword,
                profilePicture: pictureUrl
            }).save()
        })
        .then(user => {
            const cleanUser = user.toObject()

            delete cleanUser.password

            const token = jwt.sign(cleanUser, config.SECRET_JWT_PASSPHRASE)
            res.send({
                token
            })
        })
})

router.post('/sign-in', (req, res) => {
    const {
        email,
        password
    } = req.body

    if (!email || !password) res.status(400).send({
        error: 'Missing Credentials.'
    })

    User.findOne({
        email
    }).then(existingUser => {
        if (!existingUser) return res.status(400).send({
            error: 'User does not exist.'
        })

        const passwordsMatch = bcrypt.compareSync(password, existingUser.password)

        if (!passwordsMatch) return res.status(400).send({
            error: 'Password is incorrect.'
        })

        const cleanUser = existingUser.toObject()

        delete cleanUser.password

        const token = jwt.sign(cleanUser, config.SECRET_JWT_PASSPHRASE)
        res.send({
            token
        })
    })
})

router.post('/update', (req, res) => {
    User.findByIdAndUpdate(req.user._id, {
        age: req.body.age
    }, {
        new: true
    }).then(newUser => {
        const cleanUser = newUser.toObject()

        delete cleanUser.password

        const token = jwt.sign(cleanUser, config.SECRET_JWT_PASSPHRASE)
        res.send({
            token
        })
    })
})

router.post('/newsitem', checkLoggedIn, (req, res) => {
    const {
        title,
        content,
        preview,
        date,
        image,
        youtube,
        hashtags
    } = req.body

    const newsItem = new NewsItem({
        title,
        content,
        preview,
        date,
        image,
        youtube,
        hashtags
    }).save().then(newsItem => {
        let id = newsItem._id;
        res.send({
            id
        })
    }).catch(err => res.send(err))
})

router.get('/newsitem/:id', (req, res) => {
    const id = req.params.id


    NewsItem.findById(id).then(item => {

        const {
            title,
            content,
            preview,
            date,
            image,
            youtube,
            hashtags
        } = item

        res.send({
            item: {
                id: item._id,
                title,
                content,
                preview,
                date,
                image,
                youtube,
                hashtags
            }
        });
    }).catch(err => res.send(err));

})

router.get('/newsitems', (req, res) => {
    const page = req.params.page


    const chunks = []

    //Skip and limit
    const items = NewsItem.find().then(items => {

        /*  let mod = [
              ...items
          ]




          mod.forEach(item => {
              item["id"] = "item._id"
          })
          console.log(mod)*/

        let i = 0;
        let n = items.length;

        while (i < n) {
            chunks.push(items.slice(i, i += 5));
        }

        res.send(chunks)
    })
})

router.post('/edit-newsitem/:id', checkLoggedIn, (req, res) => {
    const id = req.params.id

    const {
        title,
        content,
        preview,
        date,
        image,
        youtube,
        hashtags
    } = req.body

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