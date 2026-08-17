import express from "express";
const app = express();

app.get("/ping", (req, res) => {
  res.json({ status: "ok" });
  console.log("test");
});

// app.listen(3000);
