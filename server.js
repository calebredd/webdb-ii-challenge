const express = require("express"),
  server = express(),
  path = require("path"),
  port = process.env.PORT || 4000,
  apiRoutes = require("./routes/"),
  cors = require("cors");

server.use(express.json());
server.use(cors());
server.use("/api", apiRoutes);
// Static file declaration:
server.use(express.static(path.join(__dirname, "client/build")));
//production mode:
if (process.env.NODE_ENV === "production") {
  server.use(express.static(path.join(__dirname, "client/build")));
  server.get("*", (req, res) => {
    res.sendFile(path.join((__dirname = "client/build/index.html")));
  });
}
//BUild Mode:
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

server.listen(port, () => {
  console.log(`Server listening at localhost:${port}...`);
});
