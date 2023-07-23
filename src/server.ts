import express from "express";
import router from "./routes/index";
import productRouter from "./routes/ProductRoute";

const app = express();

app.use(router);
app.use(express.json());
app.use(productRouter);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
