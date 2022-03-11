const express = require("express");
const cors = require("cors");
const path = require("path");
const router = require("../routes/router");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      auth: "/api/auth",
      homepage: "/api/apod"
    };

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.paths.auth, router.authRoute);
    this.app.use(this.paths.homepage, router.homeRoute);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Server;
