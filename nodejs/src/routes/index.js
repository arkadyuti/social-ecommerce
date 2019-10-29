import express from "express";
import homeHandler from "../handlers/homeHandler";

const router = express.Router();

/* GET home page. */
router.get("/api", (req, res) => {
  homeHandler(req, res);
});

export default router;
