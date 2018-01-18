function TaskModel(tasks) {
    let allTasks = JSON.parse(localStorage.getItem('allTasks'));
    this.listeners = [];
    tasks = allTasks || tasks;
    tasks.forEach(task => {
        this.push(task);
    });
}

function addToLocalStorage() {
    let all = [];
    for (let i = 0; i < tasks.length; i++) {
        all.push(tasks[i]);
    }
    localStorage.setItem('allTasks', JSON.stringify(all));
}

TaskModel.prototype = Object.create(Array.prototype);

TaskModel.prototype.done = function (task, status) {
    task.done = status;
    addToLocalStorage(tasks);
    this.trigger('done', [task]);
};

TaskModel.prototype.add = function (text) {
    let task = {
        text,
        done: false,
        date: new Date().toLocaleString('en-US', options)
    };
    this.push(task);
    addToLocalStorage(tasks);
    this.trigger('add', [task]);
};

TaskModel.prototype.delete = function (task) {
    let index = this.indexOf(task);
    if (index >= 0) {
        this.splice(index, 1);
    }
    localStorage.setItem('arrTasks', JSON.stringify(tasks));
    addToLocalStorage(tasks);
    this.trigger('delete', [task]);
};

TaskModel.prototype.move = function (task) {
    let index = tasks.indexOf(task);
    if (event.target.innerHTML === 'Up') {
        if (index !== 0) {
            let up = tasks[index - 1];
            tasks[index - 1] = task;
            tasks[index] = up;
        }
    } else {
        if (index !== tasks.length - 1) {
            let down = tasks[index + 1];
            tasks[index + 1] = task;
            tasks[index] = down;
        }
    }
    addToLocalStorage(tasks);
    this.trigger('move', [task]);
};

TaskModel.prototype.on = function (event, callback) {
    this.listeners.push({
        event,
        callback
    });
};

TaskModel.prototype.trigger = function (event, args) {
    let tasks = this;

    this.listeners.forEach(listener => {
        if (listener.event === event) {
            listener.callback.apply(tasks, args);
        }
    });
};

let options = {
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
};


