import User from "../models/User.js";

const test = (req, res) => {
    res.json({message: "Hello bitches!"});
}

const read = (req, res) => {
    User.find((err, users)=> {
        if (err) res.json({Error: err.message})
        else res.json({users});
    })
    // User.find()
    //     .then((users) => res.json({users}))
    //     .catch((err) => res.json({message: err.message}))
}

const create = (req, res) => {
    const user = new User({
        alias: req.body.alias,
        username: req.body.username,
    })
    // If there is an avatar, add it //
    if (req.file) {
        console.log(req.file)
        user.avatar = req.file.path
    }
    // Save the user //
    user.save()
       .then((user) => res.json({user, message: "User saved!"}))
       .catch((err) => res.json({message: err.message}))
}

export default {
    test,
    read,
    create,
}