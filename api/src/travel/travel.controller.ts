import Router from "express";
import { findAll, findOne } from "./travel.service";
const router = Router();

router.get("/", async (req, res) => {
  const travels = await findAll();

  res.send(travels);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const travel = await findOne(+id);

  res.send(travel);
});

router.post("/", (req, res) => {
  res.send("Create a travel");
});

export default router;
