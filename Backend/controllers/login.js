const bcrypt = require("bcrypt");
const client = require("../db/client");
const jwt = require("jsonwebtoken");

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  client.query("SELECT * FROM user WHERE email = ?", [email], (err, data) => {
    let groups = "";
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: "Database error while signing in!",
      });
    }

    if (data.length === 0) {
      res.status(400).json({
        error: "User is not registered",
      });
    } else {
      const user = data[0];
      console.log(user);
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(500).json({
            error: "Server error",
          });
        } else if (result === true) {
          // user is now authenticated!!

          const token = jwt.sign({ email: email, username: user.firstname + " " + user.lastname }, process.env.SECRET_KEY);
          // res.status(200).json({
          //   message: "User signed in!",
          //   token: token,
          //   uuid: user.user_uuid,
          // });
          req.token = token;
          req.user = user;
          next();
        } else {
          res.status(400).json({
            error: "Enter correct password!",
          });
        }
      });
    }
  });
};
