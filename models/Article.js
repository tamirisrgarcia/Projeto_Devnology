const mongoose = require('mongoose');

const Article = mongoose.model("Article", {
    title: String,
    url: String,
})

module.exports = Article