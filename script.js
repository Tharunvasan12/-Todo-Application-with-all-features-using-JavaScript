
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
