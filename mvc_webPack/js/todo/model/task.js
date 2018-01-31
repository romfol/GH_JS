import options from './taskModel';
import TaskModel from './taskModel';

let tasks = new TaskModel([
    {
        text: 'Brew coffee',
        done: false,
        date: new Date().toLocaleString('en-US', options)
    }
]);

export default tasks;