const db = required("../models");

const articleController = {
    add: function(req,res){
        db.Article.create(req.body)
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422).json(err));
    },
    update: function(req,res){
        db.Article.findOneAndUpdate(req.params.id)
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422).json(err));
    },
    delete:function(req,res){
        db.Book.findById(req.params.id)
            .then(dbArticle => dbArticle.remove())
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(422).json(err));
    },
    findAll:function(req,res){
        db.Article.find(req.query)
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.status(422).json(err));
    }
}

module.exports = articleController;