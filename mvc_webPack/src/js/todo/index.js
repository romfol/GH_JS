import taskController from './controller/task';
const css = require('../../css/task.css');

window.addEventListener('load', function () {
    taskController(document.getElementById('todo-list'));
});
