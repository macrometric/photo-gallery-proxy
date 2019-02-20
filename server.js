const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3030;
const bodyParser = require("body-parser");
const axios = require("axios");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
