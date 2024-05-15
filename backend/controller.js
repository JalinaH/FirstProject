const User = require("./model");

const getUsers = (req, res, next) => {
  User.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const addUser = (req, res, next) => {
  const user = new User({
    id: req.body.id,
    f_name: req.body.f_name,
    l_name: req.body.l_name,
    email: req.body.email,
    dob: req.body.dob,
    account_type: req.body.account_type,
  });
  user
    .save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const updateUser = (req, res, next) => {
  const { id, name } = req.body;
  User.updateOne({ id: id }, { $set: { name: name } })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const deleteUser = (req, res, next) => {
  const { id } = req.body;
  User.deleteOne({ id: id })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
