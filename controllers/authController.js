const login = (req, res) => {

  res.json({
    name: "APOD",
    token: process.env.API_KEY,
    msg: "Successful login"
  })
}

module.exports = {
  login
};
