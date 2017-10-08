const ROUTES = require("../routes").ROUTES;

const users = [];

let lastUserId = 0;

exports.listUsers = (req, res) => {
    res.status(200).json(users);
};

exports.createUser = (req, res) => {
    const newUser = {
        id: lastUserId++,
        nickname: req.body.nickname,
        memberSince: (new Date()).toISOString(),
        color: "black"
    };

    users.push(newUser);

    const newLocation = ROUTES.user.replace(":userId", newUser.id);
    res.status(201).header("Location", newLocation).json(newUser);
};

exports.getUser = (req, res) => {
    const userId = req.params.userId;
    const foundUser = users.filter(user => user.id.toString() === userId)[0];
    if(foundUser) {
        res.status(200).json(foundUser);
    } else {
        res.status(404).end();
    }
};

exports.deleteUser = (req, res) => {
    const userId = req.params.userId;
    const foundUser = users.filter(user => user.id.toString() === userId)[0];
    if(foundUser) {
        users.splice(users.indexOf(foundUser), 1);
        res.status(204).end();
    } else {
        res.status(404).end();
    }
};

