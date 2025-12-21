document.addEventListener('DOMContentLoaded', () => {
    // --- State Management ---
    let todos = JSON.parse(localStorage.getItem('premiumTodos')) || [];

    // --- DOM Elements ---
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
    const totalCountSpan = document.getElementById('totalCount');
    const completedCountSpan = document.getElementById('completedCount');
    const progressPercentSpan = document.getElementById('progressPercent');
    const progressCircle = document.getElementById('progressCircle');
    const clearBtn = document.getElementById('clearBtn');
    const dateDisplay = document.getElementById('dateDisplay');

    // --- Initialization ---
    function init() {
        updateDate();
        render();
    }

    // --- Date Display ---
    function updateDate() {
        const options = { weekday: 'long', day: 'numeric', month: 'short' };
        const today = new Date();
        dateDisplay.textContent = today.toLocaleDateString('en-US', options);
    }

    // --- Core Functions ---

    function saveTodos() {
        localStorage.setItem('premiumTodos', JSON.stringify(todos));
        updateStats();
    }

    function addTodo() {
        const text = todoInput.value.trim();
        
        if (text === '') {
            alert("Please enter a task!"); // Requirement: Alert on empty
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };

        todos.push(newTodo);
        saveTodos();
        render();
        todoInput.value = '';
    }

    function toggleTodo(id) {
        todos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        saveTodos();
        render();
    }

    function deleteTodo(id) {
        // Find the element to animate removal
        const itemToRemove = document.querySelector(`[data-id="${id}"]`);
        if (itemToRemove) {
            itemToRemove.classList.add('deleting');
            itemToRemove.addEventListener('animationend', () => {
                todos = todos.filter(todo => todo.id !== id);
                saveTodos();
                render();
            });
        } else {
            todos = todos.filter(todo => todo.id !== id);
            saveTodos();
            render();
        }
    }

    function clearAll() {
        if(confirm('Are you sure you want to clear all tasks?')) {
            todos = [];
            saveTodos();
            render();
        }
    }

    function editTodo(id) {
        const todo = todos.find(t => t.id === id);
        if (!todo) return;

        const newText = prompt("Edit your task:", todo.text);
        if (newText !== null && newText.trim() !== "") {
            todos = todos.map(t => {
                if (t.id === id) {
                    return { ...t, text: newText.trim() };
                }
                return t;
            });
            saveTodos();
            render();
        }
    }

    // --- UI Updates ---

    function updateStats() {
        const total = todos.length;
        const completed = todos.filter(t => t.completed).length;

        totalCountSpan.textContent = total;
        completedCountSpan.textContent = completed;

        // Progress Ring Logic
        const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
        progressPercentSpan.textContent = `${percent}%`;
        
        const circle = progressCircle;
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }

    function render() {
        todoList.innerHTML = '';

        if (todos.length === 0) {
            todoList.innerHTML = `
                <li class="empty-state">
                    <i class="fa-solid fa-clipboard-list"></i>
                    <p>No tasks yet. Start by adding one!</p>
                </li>
            `;
            updateStats();
            return;
        }

        todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            li.dataset.id = todo.id;

            li.innerHTML = `
                <div class="todo-content" onclick="app.toggle('${todo.id}')">
                    <div class="check-circle">
                        ${todo.completed ? '<i class="fa-solid fa-check"></i>' : ''}
                    </div>
                    <span class="todo-text">${escapeHtml(todo.text)}</span>
                </div>
                <div class="actions">
                    <button class="action-btn edit-btn" onclick="app.edit(${todo.id})" title="Edit">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="action-btn delete-btn" onclick="app.delete(${todo.id})" title="Delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;
            todoList.appendChild(li);
        });

        updateStats();
    }

    // Helper to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // --- Event Listeners ---
    addBtn.addEventListener('click', addTodo);
    
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });

    clearBtn.addEventListener('click', clearAll);

    // Expose functions globally for onclick handlers in HTML string
    window.app = {
        toggle: (id) => toggleTodo(parseInt(id)),
        delete: (id) => deleteTodo(parseInt(id)),
        edit: (id) => editTodo(parseInt(id))
    };

    init();
});
