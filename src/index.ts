import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./routes/routes";

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
