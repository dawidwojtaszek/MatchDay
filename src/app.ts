import express from "express";

export const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/echo", (req, res) => {
  console.log(typeof req.body);
  console.log(req.body);
  res.json({ received: req.body });
});
