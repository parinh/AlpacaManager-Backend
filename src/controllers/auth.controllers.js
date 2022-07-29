const config = require("../configs/auth.configs");
const sdb = require("../model");
const User = sdb.user;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signin = (req, res) => {
    console.log(req.body)
    User.findOne({
        username: req.body.username,
    })
        .populate("role", "-__v")
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                return res.status(401).send({ message: "Invalid Password!" });
            }
            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400, // 24 hrs exp
            });
            var authorities = [];
            for (let i = 0; i < user.role.length; i++) {
                authorities.push("ROLE_" + user.role[i].name.toUpperCase());
            }
            req.session.token = token;
            res.status(200).send({
                id: user._id,
                username: user.username,
                role: authorities,
            });
        });
};
exports.signout = async (req, res) => {
    try {
        req.session = null;
        return res.status(200).send({ message: "You've been signed out!" });
    } catch (err) {
        this.next(err);
    }
};

exports.mytest = (req, res) => {
    console.log(req, 'test reqqqqqqqqq');
    res.send({test: "test fuction"})
}