const express = require("express");
const router = express.Router();
const request = require("request")

const dotenv = require("dotenv");
dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;

const headers = {
  "content-type": "text/plain;"
};

router.get("/getblockcount", (req, res) => {
    let dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}`;
    let options = {
      url: `http://${USER}:${PASS}@127.0.0.1:8333/`,
      method: "POST",
      headers: headers,
      body: dataString
    };
    
    callback = (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
      }
      else console.log(error)
    };
    request(options, callback);
  });


module.exports = router;