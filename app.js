import express from "express";
import booksRouter from "./booksRouter.js"

const app = express();
app.use(express.json());

app.use("/books", booksRouter)

app.listen(3000, () => {
  console.log("Server runs");
});
