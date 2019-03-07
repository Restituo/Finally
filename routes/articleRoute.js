const express = require('express');
const Article = require('../../models/articleModel.js');
const jwt = require('jsonwebtoken');

const router = express.Router();
//ROUTES
router.get('/', (req, res) => {
    Article.find({}, (err, articles) => {
        res.json({ articles });
    })
});

