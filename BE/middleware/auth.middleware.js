const jwt = require("jsonwebtoken");
require("dotenv").config()
const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ msg: "No token provided" });
    }

    try {
        let decode = jwt.verify(token, process.env.secretkey);
        console.log(decode);
        req.body["UserID"] = decode.userId;
        next();
    } catch (error) {
        console.log(error.message);
        return res.status(401).json({ msg: "Invalid token" });
    }
};

module.exports = auth;
