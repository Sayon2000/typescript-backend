"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todos = [];
router.get('/', (req, res) => {
    res.json({ success: true, todos });
});
router.post('/todo', (req, res) => {
    const id = todos.length === 0 ? 0 : +todos[todos.length - 1].id + 1;
    const newTodo = {
        id: id,
        text: req.body.text
    };
    todos.push(newTodo);
    return res.json({ success: true, todo: newTodo });
});
router.post('/deleteTodo/:id', (req, res) => {
    const id = +req.params.id;
    const index = todos.findIndex(item => item.id === id);
    if (index < 0) {
        return res.status(404).json({ success: false, msg: "item does not exist " });
    }
    todos.splice(id, 1);
    return res.json({ success: true, msg: "item deleted" });
});
exports.default = router;
