import taskController from './controller/task';

window.addEventListener('load', function () {
    taskController(document.getElementById('todo-list'));
});
