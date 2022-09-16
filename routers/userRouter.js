const express = require('express')
const app = express()
const userModel = require('../models/userModel');
const router = express.Router()
require('../Database/db');

// Api for login a user;
const Login = async(req,res) =>{
    if(req.body.id && req.body.password)
    {
        let result = await userModel.findOne(req.body).select('-password');
        if(result){
            res.send(result)
        }
        else{
            res.send('User not Found')
        }
    }
    else{

        res.send('User not found');
    }

}

// Api for SinUp a user;
const signUp = async(req,res)=>{
    let result = new userModel(req.body);

    result = await result.save();
    if (result) {
        res.send(result);
    } else {
        console.log('No Data saved')
    }
}


router.route('/signup/')
    .post(signUp);
router.route('/login/')
    .post(Login);



    module.exports = router;