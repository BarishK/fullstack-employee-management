import express from "express";
import {
  getDepartmentByID,
  getDepartments,
} from "../controllers/departmentController.js";

const router = express.Router();

router.get("/", getDepartments);

router.get("/:id", getDepartmentByID);

export default router;
