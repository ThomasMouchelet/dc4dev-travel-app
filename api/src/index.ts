import express from "express";
import cors from "cors";
import TravelController from "./travel/travel.controller";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

app.get("/", (req, res) => {
  res.send("Heath check");
});

app.use("/travels", TravelController);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
