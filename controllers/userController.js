const db = required("../models");

const userController = {
    register: function(req,res){
        db.User.create(req.query)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    login: function(req,res){
        db.User.findById(req.params.id)
        .then(dbUser=> res.json(dbUser))
        .catch(err => res.status(422).json(err));
    }
}

module.exports = userController;