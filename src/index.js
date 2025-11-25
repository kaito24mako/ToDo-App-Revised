import "./index.css";
import { renderTasks } from "./js/dom.js";

/* ==== Variables ==== */

const createTaskForm = document.querySelector("#create-task-form");
const editTaskDialog = document.querySelector("#edit-task-dialog");
let taskBeingEdited = null;

export let taskArray = [];

/* ==== localStorage ==== */

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(taskArray));
}

function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    taskArray = JSON.parse(saved);
  }
}

/* ==== App logic ==== */

class Task {
  constructor(title, date, completed = false) {
    this.title = title;
    this.date = date;
    this.completed = completed;
    this.id = crypto.randomUUID();
  }
}

function createTask(title, date, completed) {
  let newTask = new Task(title, date, completed);
  taskArray.push(newTask);
}

createTaskForm.addEventListener("submit", (e) => {
  const taskInput = document.querySelector("#todo-input");
  const dateInput = document.querySelector("#todo-date");

  e.preventDefault();

  createTask(taskInput.value, dateInput.value);
  saveTasks();
  renderTasks(taskArray);
  createTaskForm.reset();
});

export function handleTaskEvents(currentTask, task, taskStatus, taskLabel, taskDeleteBtn) {
  taskStatus.addEventListener("change", () => {
    task.classList.toggle("completed", taskStatus.checked);
    currentTask.completed = taskStatus.checked;

    /* put completed tasks at the bottom */
    taskArray.sort((a, b) => {
      return a.completed - b.completed;
    });

    saveTasks();
    renderTasks(taskArray);
  });

  taskLabel.addEventListener("click", () => {
    taskBeingEdited = currentTask;

    document.querySelector("#todo-edit-input").value = currentTask.title;
    document.querySelector("#todo-edit-date").value = currentTask.date;

    editTaskDialog.showModal();
  });

  taskDeleteBtn.addEventListener("click", () => {
    const id = currentTask.id;
    const index = taskArray.findIndex((t) => t.id === id);

    if (index !== -1) {
      taskArray.splice(index, 1);
    }

    saveTasks();
    renderTasks(taskArray);
  });
}

function handleFormEvents() {
  const editTaskForm = document.querySelector("#edit-task-form");
  const cancelFormBtn = document.querySelector("#cancel-btn");

  editTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    taskBeingEdited.title = document.querySelector("#todo-edit-input").value;
    taskBeingEdited.date = document.querySelector("#todo-edit-date").value;

    saveTasks();
    renderTasks(taskArray);
    editTaskDialog.close();
  });

  cancelFormBtn.addEventListener("click", () => {
    editTaskDialog.close();
    editTaskForm.reset();
  });
}

function initiateApp() {
  loadTasks();
  renderTasks(taskArray);
  handleFormEvents();
}

initiateApp();
