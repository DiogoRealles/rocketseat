class UsersController {
  create(req, res) {
    const { name, email } = req.body;

    console.log(name, email);

    res.status(201).json({ name: name, email: email });
  }
}

module.exports = UsersController;
