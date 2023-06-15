const sequelize = require('../config/connection');

const comments = require('./comments-seed.json');
const posts= require('./posts-seed.json');
const users = require('./users.seed.json');
const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');


const seedDb = async() =>{
    try {
        await sequelize.sync({ force: true });
        for (const user of users) {
          await User.create(user);
        }
    
        for (const post of posts) {
          await Post.create(post);
        }
    
        for (const comment of comments) {
          await Comment.create(comment);
        }
        console.log('Seed data created successfully.');
      } catch (error) {
        console.error('Error seeding database:', error);
      }
    };

seedDb();