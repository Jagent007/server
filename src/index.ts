import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./routes/routes";

const port = process.env.PORT || 8080;

const corsOptions = {
  origin: 'https://p2pix.org',  // Domínio do frontend
  optionsSuccessStatus: 200
};
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
