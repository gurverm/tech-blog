const router = require('express').Router();
const sequelize = require('../config/connection');
// const {Post, User, Comment} = require('../models');

const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

router.get('/',(req,res)=>{
    
})