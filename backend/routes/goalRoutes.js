const express = require("express");
const route = express.Router();
const {
    getGoals,
    updateGoal,
    deleteGoal,
    setGoal,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

route.get("/", protect, getGoals);
route.post("/", protect, setGoal);
route.put("/:id", protect, updateGoal);
route.delete("/:id", protect, deleteGoal);

module.exports = route;
