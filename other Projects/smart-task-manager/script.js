// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // DOM Selection
  const form = document.getElementById("taskForm");
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const filters = document.getElementById("filters");

  // Add Task
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "task";

    li.innerHTML = `
      <span>${taskText}</span>
      <div>
        <button class="complete">✓</button>
        <button class="delete">✕</button>
      </div>
    `;

    taskList.appendChild(li);
    input.value = "";
  });

  // Event Delegation for Complete & Delete
  taskList.addEventListener("click", function (event) {
    const target = event.target;
    const taskItem = target.closest("li");

    if (target.classList.contains("complete")) {
      taskItem.classList.toggle("completed");
    }

    if (target.classList.contains("delete")) {
      taskItem.remove();
    }
  });

  // Filtering Tasks
  filters.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") return;

    const filter = event.target.getAttribute("data-filter");
    const tasks = taskList.children;

    for (let task of tasks) {
      const isCompleted = task.classList.contains("completed");

      if (filter === "all") {
        task.style.display = "flex";
      } else if (filter === "completed" && isCompleted) {
        task.style.display = "flex";
      } else if (filter === "pending" && !isCompleted) {
        task.style.display = "flex";
      } else {
        task.style.display = "none";
      }
    }
  });

});
