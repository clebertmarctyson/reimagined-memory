import "dotenv/config";
import express from "express";

const app = express();
const { port } = process.env;

const posts = [
  {
    id: 1,
    title: "It's a new post",
    body: "It's a new post body",
    createAt: Date.now()
  }
];

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
