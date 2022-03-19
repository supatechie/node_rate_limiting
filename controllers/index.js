const { loginService } = require("../services");

const loginHandler = async (req, res) => {
  const result = await loginService(req.body);
  return res.status(result.statusCode).send(result.message);
};

module.exports = {
  loginHandler,
};
