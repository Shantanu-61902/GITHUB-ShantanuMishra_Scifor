function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const buttons = document.createElement("div");
  buttons.classList.add("task-buttons");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.title = "Mark as complete";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");

    if (li.classList.contains("completed")) {
      alert("Task marked as completed!");
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.title = "Delete task";
  deleteBtn.onclick = () => {
    li.remove();
    alert("Task deleted!");
  };

  buttons.appendChild(completeBtn);
  buttons.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(buttons);

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
