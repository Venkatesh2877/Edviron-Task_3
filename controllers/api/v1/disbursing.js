const client = require("../../../config/mongoose");

module.exports.disbursing = async function (req, res) {
  res.status(200).json({
    message: "working",
  });
};
