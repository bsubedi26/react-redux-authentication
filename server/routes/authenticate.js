import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt_config';
import User from '../models/user';

// AUTHENTICATION middleware to use in other routes that need authentication
export default (req, res, next) => {
    console.log('authenticate middleware triggered');
    // console.log(req.headers.token)
    let token = req.headers['token'];

    if (token) {
        jwt.verify(token, jwtConfig.jwtSecret, (err, decoded) => {
            if (err) throw err;

            else {
                // console.log(decoded)
                User.findById(decoded.id, (err, user) => {
                    if (err) throw err;
                    if (!user) {
                        console.log('no user');
                        res.status(404).json({ error: 'no user found error' });
                    } 
                    else {
                    console.log('token authenticated -> user found')
                    // console.log(user)
                    // set currentUser property on the request object as user so it can be accessed again if needed
                    req.session.user = user;
                    next();
                    }
                })
            }
        })
    } else {
        console.log('no token provided')
        res.status(404).json({ error: 'no token provided' });
    }

}