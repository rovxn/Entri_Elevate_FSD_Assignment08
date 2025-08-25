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
  li.className = "flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 shadow-sm";

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "text-gray-800";

  // Button group
  const btnGroup = document.createElement("div");
  btnGroup.className = "flex space-x-2";

  // Toggle complete button
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "✔";
  toggleBtn.className = "px-2 py-1 text-green-600 border border-green-600 rounded hover:bg-green-600 hover:text-white transition";
  toggleBtn.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.className = "px-2 py-1 text-yellow-600 border border-yellow-600 rounded hover:bg-yellow-600 hover:text-white transition";
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "px-2 py-1 text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white transition";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Append buttons
  btnGroup.appendChild(toggleBtn);
  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  // Append to li
  li.appendChild(span);
  li.appendChild(btnGroup);

  // Add li to list
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
}

// Add task on button click
addTaskBtn.addEventListener("click", addTask);

// Add task on Enter key
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
