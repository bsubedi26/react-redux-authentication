import express from 'express';
import User from '../models/user';
import Message from '../models/message';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt_config';
import authenticate from './authenticate';
const router = express.Router();

//********************************ROUTES************************************
// POST for creating a new user
router.post('/create', function(req, res) {
    // console.log(req.body)
    const { username, password, email } = req.body.data;

    const userData = new User({
        username: username.trim(),
        password: password.trim(),
        email: email.trim(),
        created_at: new Date()    
    });

    userData.save(function(err, user) {
        if (err) throw err;
        res.json(user)
    })
})

// POST for user login
router.post('/login', function(req, res) {
    const { username, password } = req.body.data;

    User.findOne({username: username}, function(err, user) {
        if (err) throw err;

        if (!user) {
            console.log('no user found');
            res.json({ error: "Sorry, we don't recognize this username." });
        }

        if (user) {
            bcrypt.compare(password, user.password, function(err, isMatch) {
                if (err) throw err;
                if (isMatch === true) {
                    console.log('right password');
                    // req.session._id = user._id;
                    const token = jwt.sign({
                        id: user._id,
                        username: user.username,
                        email: user.email
                    }, jwtConfig.jwtSecret, {
                        expiresIn: 60 * 60 * 24 // expires in 24 hours
                    });
                    res.json({token})
                }
                else {
                    console.log('wrong password');
                    res.json({
                        error: 'Sorry, the password does not match the username.'
                    })
                }
            });
        }
    })
})

export default router;