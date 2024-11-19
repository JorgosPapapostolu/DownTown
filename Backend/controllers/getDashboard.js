const client = require("../db/client");
const ErrorResponse = require("../utils/ErrorResponse");

exports.getDashboard = (req, res, next) => {
  const { uuid } = req.body;
  try {
    // const dashboardData = client.query(
    //   "SELECT firstname from user WHERE user_uuid = ?);",
    //   [uuid]
    // );
    console.log("angekommen");
  } catch (err) {
    console.log(err);
  }
};
