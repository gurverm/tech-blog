const commentRouter = require('express').Router();
const Comment = require('../../models/Comment.js');

commentRouter.post('/', async(req,res)=>{
    try{
        const comment = {
            body: req.body.body,
            post_id: req.body.post_id,
            user_id:req.session.user_id,
        };
        const newComment = await Comment.create(comment);
        res.json(newComment);
    } catch(err){
        console.error(err);
        res.status(500).json({message:'Server error. Comment could not be created'});

    }
});

module.exports = commentRouter;