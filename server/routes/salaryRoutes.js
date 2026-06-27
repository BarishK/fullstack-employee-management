import express from "express";
import { changeSalary, getSalaries } from "../controllers/salaryController.js";

const router = express.Router();

router.get("/", getSalaries);

router.put("/:id", changeSalary);

export default router;
