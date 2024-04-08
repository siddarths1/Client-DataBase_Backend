require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const routes = require("./routes/routes");
const establishConnect = require("./db/db");
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

try {
  establishConnect();
} catch (error) {
  console.log(error);
}

app.use(`${process.env.BASE_URL}`, routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
