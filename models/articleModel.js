const mongoose = required("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema ({
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String
    },
    comment: {
        type: String
    },
    author: {
        type: String
    },
    authorID: {
        type: String
    }
});

const Article = mongoose.model("article",articleSchema);
module.export = Article;