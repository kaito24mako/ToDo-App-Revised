import { handleTaskEvents } from "../index.js";

const taskContainer = document.querySelector("#todo-list-container");

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-AU", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
}

export function renderTasks(arr) {
  taskContainer.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    const currentTask = arr[i];

    const task = document.createElement("li");
    task.classList.add("todo");

    const taskStatus = document.createElement("input");
    taskStatus.id = "todo-1";
    taskStatus.type = "checkbox";
    taskStatus.checked = currentTask.completed;

    if (currentTask.completed) task.classList.add("completed");

    const taskLabel = document.createElement("label");
    taskLabel.classList.add("todo-text");
    taskLabel.textContent = currentTask.title;

    const taskDate = document.createElement("span");
    taskDate.classList.add("todo-date");
    taskDate.textContent = formatDate(currentTask.date);

    const taskDeleteBtn = document.createElement("button");
    taskDeleteBtn.id = "todo-delete-btn";
    taskDeleteBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="21px">
        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
        </svg>
        `;

    taskContainer.appendChild(task);
    task.append(taskStatus, taskLabel, taskDate, taskDeleteBtn);

    // handleFormEvents(currentTask, taskLabel);
    handleTaskEvents(currentTask, task, taskStatus, taskLabel, taskDeleteBtn);
  }
}

