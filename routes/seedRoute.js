import express from "express";
import seedDB from "../seeds.js";
const router = express.Router();

router.get("/seed", async (req, res) => {
  try {
    await seedDB();
    res.send("Database seeded successfully!");
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

export default router;
