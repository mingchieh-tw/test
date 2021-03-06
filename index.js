const errorMiddleware = require("./middleware/error");

const mail = require("./routes/mail");
const index = require("./routes/index");
var domain = require("domain");
const express = require("express");
const app = express();

app.use(express.json());

//app.use("/", index);
//app.use("/index.html", index);
app.use(express.static("www"));

app.use("/api/mail", mail);

//put in the last one
app.use(errorMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

process.on("uncaughtException", function (err) {
  console.log(err);
  try {
    var killTimer = setTimeout(function () {
      process.exit(1);
    }, 30000);
    killTimer.unref();
    server.close();
  } catch (e) {
    console.log("error when exit", e.stack);
  }
});
