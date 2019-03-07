const mongoose = required("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema ({
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String,
        required: true
    },
    comment: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    authorID: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const Article = mongoose.model("article",articleSchema);
module.export = Article;