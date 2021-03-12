const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: new URL("https://tfba.netlify.app/"),
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Interview app");
});

app.get("/api", (req, res) => {
  const data = "Get stuff done";
  res.send(data);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
