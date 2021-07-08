const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../../config')
const upload = require('../../utils/upload')
const NewsItem = require("../../models/NewsItem")
const nodeMailer = require("nodemailer");

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

router.post("/contact", (req, res) => {
    const {
        email,
        message
    } = req.body


    console.log(email, message)
    let transporter = nodeMailer.createTransport({
        host: "Mail.ru",
        auth: {
            // should be replaced with real sender's account
            user: 'kunstform-wissenschaft@mail.ru',
            pass: 'kunstformkunstform1009'
        }
    });
    let mailOptions = {
        // should be replaced with real recipient's account
        to: 'svillyfly@mail.ru',
        subject: "Kontakt Form kunstform-wissenschaft.org",
        body: `<p>Email: ${email}</p> <p>Message: ${message}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);

        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.send({
            success: true
        })
    });


})


module.exports = router