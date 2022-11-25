const jwt = require('jsonwebtoken')
const User = require('../controller/user');
module.exports.verifyUser =(req,res,next) => {
    let authHeader = req.headers.authorization;
     if (!authHeader) {
        let err = new Error("Bearer token is not set!");
        err.status = 401;
        return next(err);
    }
    let token = authHeader.split(' ')[1];
    console.log(token);
    let data;
    try {
        data = jwt.verify(token, process.env.SECRET);
        req.user = data;
        console.log(req.user);
        console.log(req.user);
        next();
    } catch (err) {
        throw new Error('Token could not be verified!');
    }
}

