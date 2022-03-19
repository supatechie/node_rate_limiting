const loginService = async (body) => {
  const CORRECT_PWD = "12345678";
  const CORRECT_USER = "admin";
  const { username, password } = body;
  if (username.toLowerCase() === CORRECT_USER && password === CORRECT_PWD) {
    return { statusCode: 200, message: "Login successful" };
  }
  return { statusCode: 401, message: "Invalid login credentials" };
};
module.exports = {
  loginService,
};
