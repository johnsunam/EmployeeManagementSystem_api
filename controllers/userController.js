const User = require('../model/userModel');
const UserHeader = ['firstName', 'lastName', 'contact', 'email', 'address', 'role']

const getUsers = (req, res) => {
    const params = req.query;
    console.log('paramsssss', params);

    User.find({...params}).then(result => res.json({data:result, header: UserHeader})).catch(err => res.json(err))
}


const getUserById = (req, res) => {
    let { id } = req.params;
    User.findById(id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
}

const createUser = (req, res, next) => {
    let data = req.body;
    data.createdAt = new Date();
    let user = new User(data);
    return user.save(err => {
        if (err) {
            console.log('////',err.message)
            if(err.name === 'ValidationError') {
                res.status(400).send({message: err.message, status: 400})
            }
            next(err)
        } else {
            res.json({
                message: "User created.",
                data: user
            })
        }
    })

}

const updateUser = (req, res) => {
    let {body, params:{id}} = req;
    User.findByIdAndUpdate(id, body,{ new : true})
        .then(result => res.json(result))
        .catch(err => res.json(err))
}

const deleteUser = (req, res) => {
    let { id } = req.params;
    User.findByIdAndDelete(id)
                    .then(res => res.json({
                        message: 'Sucessfully deleted'
                    }))
                    .catch(err => res.json(err))
}

module.exports = { getUsers, createUser, getUserById, updateUser, deleteUser }