# Ex03 To-Do List using JavaScript
## Date:16/11/26

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
```HTML

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>My Todo Application</title>

    <!-- Connect CSS -->
    <link rel="stylesheet" href="./style.css">
</head>

<body>

    <div class="container">

        <!-- Header -->
        <header>
            <h1>My Todo List</h1>
            <p>Organize your day and achieve your goals!</p>
        </header>

        <!-- Add Task Section -->
        <div class="input-section">

            <input
                type="text"
                id="taskInput"
                placeholder="Enter your task..."
            >

            <button id="addBtn">Add Task</button>

        </div>

        <!-- Task Statistics -->
        <div class="stats">

            <div class="stat-box">
                <h2 id="totalTasks">0</h2>
                <p>Total Tasks</p>
            </div>

            <div class="stat-box">
                <h2 id="completedTasks">0</h2>
                <p>Completed</p>
            </div>

            <div class="stat-box">
                <h2 id="pendingTasks">0</h2>
                <p>Pending</p>
            </div>

        </div>

        <!-- Search Section -->
        <div class="search-section">

            <input
                type="text"
                id="searchInput"
                placeholder="Search tasks..."
            >

        </div>

        <!-- Filter Section -->
        <div class="filter-section">

            <button class="filter-btn active" data-filter="all">
                All
            </button>

            <button class="filter-btn" data-filter="pending">
                Pending
            </button>

            <button class="filter-btn" data-filter="completed">
                Completed
            </button>

        </div>

        <!-- Task List -->
        <ul id="taskList"></ul>

        <!-- Clear Completed Tasks -->
        <button id="clearBtn" class="clear-btn">
            Clear Completed Tasks
        </button>

        <!-- Footer -->
        <footer>
            <p>Designed by: Tharunish Vasan T</p>
            <p>Register Number: 212224240174</p>
        </footer>

    </div>

    <!-- Connect JavaScript -->
    <script src="./script.js"></script>

</body>

</html>
```
```CSS

/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body */
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea, #764ba2);
    min-height: 100vh;
    padding: 40px 15px;
}

/* Main Container */
.container {
    max-width: 650px;
    margin: auto;
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* Header */
header {
    text-align: center;
    margin-bottom: 30px;
}

header h1 {
    color: #333;
    margin-bottom: 10px;
}

header p {
    color: #777;
}

/* Input Section */
.input-section {
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
}

input {
    width: 100%;
    padding: 13px;
    border: 1px solid #ccc;
    border-radius: 7px;
    font-size: 15px;
    outline: none;
}

input:focus {
    border-color: #667eea;
}

/* Buttons */
button {
    border: none;
    padding: 12px 18px;
    border-radius: 7px;
    cursor: pointer;
    font-size: 14px;
    transition: 0.3s;
}

#addBtn {
    background: #667eea;
    color: white;
}

#addBtn:hover {
    background: #4b5fc7;
}

/* Statistics */
.stats {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 25px;
}

.stat-box {
    flex: 1;
    background: #f2f3ff;
    padding: 15px 5px;
    text-align: center;
    border-radius: 8px;
}

.stat-box h2 {
    color: #667eea;
    margin-bottom: 5px;
}

.stat-box p {
    font-size: 13px;
    color: #555;
}

/* Search */
.search-section {
    margin-bottom: 20px;
}

/* Filter Buttons */
.filter-section {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

.filter-btn {
    background: #eee;
    color: #333;
}

.filter-btn.active {
    background: #667eea;
    color: white;
}

/* Task List */
#taskList {
    list-style: none;
}

.task-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 13px;
    margin-bottom: 10px;
    background: #f7f7f7;
    border-radius: 8px;
    border-left: 4px solid #667eea;
}

.task-item span {
    flex: 1;
    overflow-wrap: anywhere;
}

/* Completed Task */
.task-item.completed span {
    text-decoration: line-through;
    color: #999;
}

.task-item.completed {
    border-left-color: #28a745;
}

/* Edit and Delete Buttons */
.task-item button {
    padding: 8px 10px;
    color: white;
}

.edit-btn {
    background: #f0ad4e;
}

.delete-btn {
    background: #dc3545;
}

/* Clear Button */
.clear-btn {
    width: 100%;
    margin-top: 15px;
    background: #dc3545;
    color: white;
}

.clear-btn:hover {
    background: #b52a37;
}

/* Empty Message */
.empty-message {
    text-align: center;
    color: #888;
    padding: 20px;
}

/* Footer */
footer {
    text-align: center;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #ddd;
    color: #666;
    line-height: 1.8;
    font-size: 14px;
}

/* Responsive Design */
@media (max-width: 500px) {

    .container {
        padding: 20px;
    }

    .input-section {
        flex-direction: column;
    }

    .stats {
        gap: 5px;
    }

    .stat-box p {
        font-size: 11px;
    }

    .filter-section {
        gap: 5px;
    }

    .filter-btn {
        padding: 10px;
    }

    .task-item {
        flex-wrap: wrap;
    }
}
```
```JAVASCRIPT

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const clearBtn = document.getElementById("clearBtn");

// Save tasks in Local Storage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add a new task
function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    saveTasks();
    displayTasks();
}

// Display tasks
function displayTasks() {
    taskList.innerHTML = "";

    let searchText = searchInput.value.toLowerCase();

    let filteredTasks = tasks.filter(function(task) {

        let matchesSearch = task.text.toLowerCase()
            .includes(searchText);

        let matchesFilter =
            currentFilter === "all" ||
            (currentFilter === "pending" && !task.completed) ||
            (currentFilter === "completed" && task.completed);

        return matchesSearch && matchesFilter;
    });

    if (filteredTasks.length === 0) {
        let message = document.createElement("li");
        message.className = "empty-message";
        message.textContent = "No tasks found!";
        taskList.appendChild(message);
    }

    filteredTasks.forEach(function(task) {

        let li = document.createElement("li");
        li.className = "task-item";

        if (task.completed) {
            li.classList.add("completed");
        }

        // Checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.style.width = "18px";

        checkbox.addEventListener("change", function() {
            toggleTask(task.id);
        });

        // Task text
        let span = document.createElement("span");
        span.textContent = task.text;

        // Edit button
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";

        editBtn.addEventListener("click", function() {
            editTask(task.id);
        });

        // Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function() {
            deleteTask(task.id);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });

    updateStats();
}

// Mark task as completed or pending
function toggleTask(id) {
    tasks = tasks.map(function(task) {

        if (task.id === id) {
            task.completed = !task.completed;
        }

        return task;
    });

    saveTasks();
    displayTasks();
}

// Edit task
function editTask(id) {
    let task = tasks.find(function(t) {
        return t.id === id;
    });

    let newText = prompt("Edit your task:", task.text);

    if (newText !== null && newText.trim() !== "") {
        task.text = newText.trim();

        saveTasks();
        displayTasks();
    }
}

// Delete task
function deleteTask(id) {
    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    saveTasks();
    displayTasks();
}

// Search tasks
searchInput.addEventListener("input", function() {
    displayTasks();
});

// Filter tasks
filterBtns.forEach(function(btn) {

    btn.addEventListener("click", function() {

        filterBtns.forEach(function(b) {
            b.classList.remove("active");
        });

        btn.classList.add("active");

        currentFilter = btn.dataset.filter;

        displayTasks();
    });
});

// Update task statistics
function updateStats() {

    let total = tasks.length;

    let completed = tasks.filter(function(task) {
        return task.completed;
    }).length;

    let pending = total - completed;

    document.getElementById("totalTasks").textContent = total;

    document.getElementById("completedTasks").textContent = completed;

    document.getElementById("pendingTasks").textContent = pending;
}

// Clear all completed tasks
clearBtn.addEventListener("click", function() {

    tasks = tasks.filter(function(task) {
        return !task.completed;
    });

    saveTasks();
    displayTasks();
});

// Add task using button
addBtn.addEventListener("click", addTask);

// Add task using Enter key
taskInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        addTask();
    }
});

// Display saved tasks when page loads
displayTasks();
```

## OUTPUT
![alt text](<Screenshot 2026-11-17 000554.png>)
## RESULT
The program for creating To-do list using JavaScript is executed successfully.