const bcrypt = require("bcrypt");
const client = require("../db/client");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const { firstname, lastname, birthdate, email, password } = req.body;
  client.query("SELECT * FROM user WHERE email = ?", [email], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: "Database error while registering a user!",
      });
    }

    if (data.length !== 0) {
      return res.status(400).json({
        error: "The E-Mail is already registered",
      });
    }

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        res.status(500).json({
          error: "Server error",
        });
      }

      const user = {
        firstname,
        lastname,
        birthdate,
        email,
        password: hash,
      };

      client.query(
        "INSERT INTO user (firstname, lastname, birthdate, email, password) VALUES (?, ?, ?, ?, ?)",
        [
          user.firstname,
          user.lastname,
          user.birthdate,
          user.email,
          user.password,
        ],
        (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              error: "Database error",
            });
          }

          const token = jwt.sign(
            {
              email: user.email,
            },
            process.env.SECRET_KEY
          );

          res
            .status(200)
            .send({ message: "User added to database", token: token });
        }
      );
    });
  });
};
