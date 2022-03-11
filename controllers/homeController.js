const axios = require("axios");
const API_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = process.env.API_KEY;

const getApod = async (req, res) => {
  const response = await axios(API_URL, {
    params: {
      api_key: API_KEY
    }
  });

  res
    .status(response.status)
    .send(response.data);
}

module.exports = {
  getApod
};
