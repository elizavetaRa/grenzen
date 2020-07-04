module.exports = {
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/grenzen',
    SECRET_JWT_PASSPHRASE: 'TWLom9RDbmGYBtkHHPe4m8pKswyUY',
    CLOUDINARY_NAME: 'dpusdjcsr',
    CLOUDINARY_KEY: "263792934663288",
    CLOUDINARY_SECRET: "tiTrmAcKPG_qoRf-E4gd6tJWPAI",
}