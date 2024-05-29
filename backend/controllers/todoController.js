const Todo = require('../models/todo');

exports.createTodo = async (req, res) => {
    const { title, startDate, endDate } = req.body;
   
    // const start = new Date(startDate.split('/').reverse().join('-'));
    // const end = new Date(endDate.split('/').reverse().join('-'));
    try {
        const newTodo = new Todo({
            title,
            // startDate :start,
            // endDate :end,
            startDate,
            endDate,
        });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, startDate, endDate } = req.body;
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { title, startDate, endDate }, { new: true });
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
