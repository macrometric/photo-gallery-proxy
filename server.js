const express = require("express");
const app = express();
const port = process.env.PORT || 3030;
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Product Images
app.get("/products/:id", (req, res) => {
  // axios: "http://ec2-3-93-54-61.compute-1.amazonaws.com/products/4"
  // console.log("hi i am req param", req.params);
  axios
    .get(
      `http://ec2-3-93-54-61.compute-1.amazonaws.com/products/${req.params.id}`
    )
    .then(product => {
      // console.log("product.data", product.data);
      res.json(product.data);
    })
    .catch(err => {
      console.log("Error with GET request in proxy");
      res.sendStatus(400);
    });
});

// Product Description
app.get("/productinfo/:id", (req, res) => {
  // console.log("hi i am req param", req.params);
  axios
    .get(
      `http://ec2-13-59-174-32.us-east-2.compute.amazonaws.com:3030/productinfo/${
        req.params.id
      }`
    )
    .then(product => {
      // console.log("product.data", product.data);
      res.json(product.data);
    })
    .catch(err => {
      console.log("Error with GET request in proxy");
      res.sendStatus(400);
    });
});

// Similar Items
app.get("/getFiveRandom", (req, res) => {
  // console.log("hi i am req param", req.params);
  axios
    .get(`http://ec2-3-80-146-248.compute-1.amazonaws.com/getFiveRandom`)
    .then(product => {
      // console.log("product.data", product.data);
      res.json(product.data);
    })
    .catch(err => {
      console.log("Error with GET request in proxy");
      res.sendStatus(400);
    });
});

// Product Reviews
app.get("/products/:id/reviews", (req, res) => {
  // console.log("hi i am req param", req.params);
  axios
    .get(
      `http://ec2-13-58-187-52.us-east-2.compute.amazonaws.com:3030/products/${
        req.params.id
      }/reviews`
    )
    .then(product => {
      // console.log("product.data", product.data);
      res.json(product.data);
    })
    .catch(err => {
      console.log("Error with GET request in proxy");
      res.sendStatus(400);
    });
});

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
