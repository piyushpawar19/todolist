document.addEventListener('DOMContentLoaded', function() {
    const API_URL = 'http://localhost:5000/api/todos';

    const fetchTodos = () => {
        fetch(API_URL)
            .then(response => response.json())
            .then(todos => {
                const todoList = document.getElementById('todo-list');
                todoList.innerHTML = '';
                todos.forEach(todo => {
                    const listItem = document.createElement('li');
                    listItem.className = 'list-group-item';
                    listItem.innerHTML = `
                        <span>${todo.title} (Start: ${new Date(todo.startDate).toLocaleDateString()}, End: ${new Date(todo.endDate).toLocaleDateString()})</span>
                        <button class="btn btn-secondary btn-sm" onclick="editTodo('${todo._id}')">Edit</button>
                    `;
                    todoList.appendChild(listItem);
                });
            });
    };

    document.getElementById('todo-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const todoData = {
            title: document.getElementById('title').value,
            startDate: document.getElementById('startDate').value,
            endDate: document.getElementById('endDate').value
        };
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todoData)
        })
        .then(response => response.json())
        .then(() => {
            fetchTodos();
            document.getElementById('todo-form').reset();
        });
    });

    window.editTodo = function(id) {
        const newTitle = prompt('Enter new title:');
        const newStartDate = prompt('Enter new start date (YYYY-MM-DD):');
        const newEndDate = prompt('Enter new end date (YYYY-MM-DD):');
        if (newTitle && newStartDate && newEndDate) {
            fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: newTitle, startDate: newStartDate, endDate: newEndDate })
            })
            .then(response => response.json())
            .then(() => {
                fetchTodos();
            });
        }
    };

    fetchTodos();
});