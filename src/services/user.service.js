const User = require('../model/user.model')
const bcrypt = require('bcrypt');
const { findOne } = require('../model/user.model');
const saltRounds = 10;
async function findUsername(inUsername) {
    return await (User.findOne({ username: inUsername }))
}



async function authenticate(req, res) {
    var inUser = req.body;
    found = await User.findOne({ username: inUser.username })

    // var isCorrect = await bcrypt.compare(found.password, inUser.password)
    // var isCorrect = found.password == inUser.password
    if (found) {
        var isCorrect = await bcrypt.compare(inUser.password, found.password)

        if (isCorrect) {
            return res.json(found)
            // (res.status(200).send({
            //     username: found.username,
            //     role: authorities,
            // }))
        }

        else {
            return res.status(401).send("Incorrect password")
        }
    }
    else {
        return res.status(404).send("Can't find username")
    }

}

async function getData(req, res) {
    var found = await User.find({})
    if (found) {
        res.json(found)
    }
    else {
        res.json('error')

    }
}


async function findUserByName(req,res) {
    var name = req.query.firstName
    var result = await User.findOne({firstName : name}).select("-username -password -created_at -updated_at")
    res.json(result)
}


async function getUserById (req,res) {
    console.log("get user by id")
    var id = req.query._id
    var result = await User.findById( id ).select("-username -password -created_at -updated_at")
    res.json(result)
}

async function getFullname(req, res) {
    var found = await User.find({})
    var result = []
    if (found) {
        found.forEach((user) => {
            fullName = user.firstName + ' ' + user.lastName
            id = user._id
            result.push({ id, fullName })
        })
        res.json(result)
    }
    else {
        res.json('error')

    }
}

async function updateByID(req, res) {
    var _id = req.query._id
    var updatedUser = req.body;
    var result = await User.findOneAndUpdate({ _id: _id }, updatedUser, { new: true });
    res.json(result);
}

async function deleteByID(req, res) {
    var id = req.query._id
    console.log('user id =========' + id)
    var result = await User.findByIdAndDelete(id)
    console.log('del func ------------' + result)
}

async function createUser(req, res) {
    var body = req.body
    const hashedPwd = await bcrypt.hash(body.password, saltRounds);
    User.create({
        profilePicPath: body.profilePicPath,
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone,
        position: body.position,
        department: body.department,
        role: body.role,
        username: body.username,
        password: hashedPwd,
        overTime : body.overTime,
    })
    res.json('user created!')
}

module.exports = {
    authenticate,
    findUsername,
    getData,
    updateByID,
    deleteByID,
    getFullname,
    createUser,
    getUserById,
    findUserByName,
    
}