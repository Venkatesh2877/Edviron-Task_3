const client = require("../../../config/mongoose");

module.exports.reconciling = async function (req, res) {
  res.status(200).json({
    message: "R working",
  });
};
