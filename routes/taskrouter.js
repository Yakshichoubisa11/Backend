import express from "express";
import { protect, authorization } from "../middleware/authMiddleware.js";
import { createTask, getTask, updateTask, deleteTask } from "../controllers/taskcontroller.js";

const router = express.Router();
router.post("/create",protect,authorization('admin', 'manager'),createTask
);
router.put("/update/:id", protect,authorization('admin', 'manager', 'teamlead'),updateTask
);
router.get("/get",protect,getTask
);
router.delete("/delete/:id",protect,authorization('admin'),deleteTask
);

export default router;