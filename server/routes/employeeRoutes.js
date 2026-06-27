import express from "express";

import {
  addEmployee,
  deleteEmployee,
  getEmployee,
  getStats,
} from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", getEmployee);

router.get("/stats", getStats);

router.post("/add", addEmployee);

router.delete("/delete/:id", deleteEmployee);

export default router;
