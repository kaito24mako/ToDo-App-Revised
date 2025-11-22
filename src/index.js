import "./index.css";

// const taskInput = document.querySelector('#todo-input');
// const dateInput = document.querySelector('#todo-date');

const taskArray = [];

class Task {
    constructor(title, date, completed = false) {
        this.title = title;
        this.date = date;
        this.completed = completed;
    }
}

function createTask(title, date, completed) {
    let newTask = new Task(title, date, completed);
    taskArray.push(newTask);
}

console.log(createTask('do project', 'october'))
console.log(createTask('finish project', 'october'))
console.log(taskArray);