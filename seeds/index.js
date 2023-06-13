const sequelize = require('../config/connection');

const comments = require('./comments-seed.json');
const posts= require('./posts-seed.json');
const users = require('./users.seed.json');

const seedDb = async() =>{
    try{
        await sequelize.sync({force:true});
        await comments();
        await users();
        await posts();
    } catch(err){
        console.error(err);
    }
};

seedDb();