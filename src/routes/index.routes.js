import { Router } from "express";
import {
  renderTasks,
  aboutTask,
  addTask,
  editTask,
  updateTask,
  deleteTask,
  toggleTask,
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/", renderTasks);

router.get("/about", aboutTask);

router.post("/tasks/add", addTask);

router.get("/edit/:id", editTask);

router.post("/edit/:id", updateTask);

router.get("/delete/:id", deleteTask);

router.get("/toggledone/:id", toggleTask);

export default router;
