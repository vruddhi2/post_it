const jwt = require('jsonwebtoken');
require('dotenv').config()

const JWT = process.env.JWT;

const requireAuth = async (req, res, next) => {
    if(req.path === '/user/login' || req.path === '/user/register'){
        return next();
    }
    const token = req.cookies.jwt;

    if(token) {
        jwt.verify( token, JWT, (err, decodedToken) =>{
            if(err) {
                console.log(err.message);
                res.redirect('/user/login');
            } else {
                console.log(decodedToken);
                next();
            }
        })
    } else {
        res.redirect('/user/login');
    }
}



module.exports = {requireAuth};