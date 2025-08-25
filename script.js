// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to create a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create <li>
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  // Task text span
  const span = document.createElement("span");
  span.textContent = taskText;

  // Buttons
  const btnGroup = document.createElement("div");

  // Toggle complete button
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "✔";
  toggleBtn.className = "btn btn-sm btn-outline-primary me-2";
  toggleBtn.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.className = "btn btn-sm btn-outline-warning me-2";
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "btn btn-sm btn-outline-danger";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Append buttons
  btnGroup.appendChild(toggleBtn);
  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  // Append span and buttons to li
  li.appendChild(span);
  li.appendChild(btnGroup);

  // Add li to task list
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
}

// Event listener for Add button
addTaskBtn.addEventListener("click", addTask);

// Allow pressing Enter to add task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
