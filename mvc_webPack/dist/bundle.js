/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller_task__ = __webpack_require__(1);


window.addEventListener('load', function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__controller_task__["a" /* default */])(document.getElementById('todo-list'));
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = taskController;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_task__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_task__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_taskAddForm__ = __webpack_require__(3);





function taskController(rootElement) {

    Object(__WEBPACK_IMPORTED_MODULE_1__view_task__["a" /* default */])(rootElement, __WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */], {
        onDone,
        onDelete,
        onMove
    });

    Object(__WEBPACK_IMPORTED_MODULE_2__view_taskAddForm__["a" /* default */])(rootElement, {
        onSubmit
    });

    function onDone(task, status) {
        __WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */].done(task, status);
    }

    function onDelete(task) {
        __WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */].delete(task);
    }

    function onSubmit(text) {
        __WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */].add(text);
    }

    function onMove(task) {
        __WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */].move(task);
    }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = taskView;
function taskView(rootElement, tasks, actions) {
    let ul = document.createElement('ul');

    let template = document.createElement('li');
    template.innerHTML = `
        <input type="checkbox" class="done">
        <span class="date"></span>
        <span class="text"></span>
        <button class="delete">Delete</button>
        <button class="up">Up</button>
        <button class="down">Down</button>
    `;

    tasks.forEach(function(task) {
        add(task);
    });

    tasks.on('done', function (task) {
        [].forEach.call(ul.childNodes, function (li) {
            if (li.task === task) {
                li.querySelector('.text').style.textDecoration = task.done ? 'line-through' : '';
            }
        });
    });

    tasks.on('add', function (task) {
        add(task);
    });

    tasks.on('delete', function (task) {
        [].forEach.call(ul.childNodes, function (li) {
            if (li.task === task) {
                li.remove();
            }
        });
    });

    tasks.on('move', function () {
        let liS = document.querySelectorAll('li');
        for (let i = 0; i < liS.length; i++) {
            ul.removeChild(liS[i]);
        }
        tasks.forEach(function(task) {
            add(task);
        });
    });


    rootElement.appendChild(ul);

    function add(task) {
        let li = template.cloneNode(true);
        li.task = task;

        let date = li.querySelector('.date');
        date.innerText = task.date;

        let text = li.querySelector('.text');
        text.innerHTML = task.text;
        text.style.textDecoration = task.done ? 'line-through' : '';

        let checkbox = li.querySelector('.done');
        checkbox.checked = task.done ? 'checked' : '';
        checkbox.addEventListener('change', function (event) {
            actions.onDone(task, event.target.checked);
        });

        li.querySelector('.delete').addEventListener('click', function (event) {
            actions.onDelete(task);
        });

        li.querySelector('.up').addEventListener('click', function (event) {
            actions.onMove(task);
        });

        li.querySelector('.down').addEventListener('click', function (event) {
            actions.onMove(task);
        });

        ul.appendChild(li);
    }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = taskAddFormView;
function taskAddFormView(rootElement, actions) {
    let form = document.createElement('form');
    form.innerHTML = `
        <input type="text" name="text">
        <input type="submit" value="Add">
    `;

    form.addEventListener('submit', function (event) {
        let input = form.querySelector('[name=text]');
        let text = input.value.trim();

        if (text) {
            actions.onSubmit(text);
            input.value = '';
        }
        event.preventDefault();
    });

    rootElement.appendChild(form);
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__taskModel__ = __webpack_require__(5);



let tasks = new __WEBPACK_IMPORTED_MODULE_0__taskModel__["a" /* default */]([
    {
        text: 'Brew coffee',
        done: false,
        date: new Date().toLocaleString('en-US', __WEBPACK_IMPORTED_MODULE_0__taskModel__["a" /* default */])
    }
]);

/* harmony default export */ __webpack_exports__["a"] = (tasks);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_task__ = __webpack_require__(4);

/* harmony default export */ __webpack_exports__["a"] = (TaskModel);

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
    for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */].length; i++) {
        all.push(__WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */][i]);
    }
    localStorage.setItem('allTasks', JSON.stringify(all));
}

TaskModel.prototype = Object.create(Array.prototype);

TaskModel.prototype.done = function (task, status) {
    task.done = status;
    addToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */]);
    this.trigger('done', [task]);
};

TaskModel.prototype.add = function (text) {
    let task = {
        text,
        done: false,
        date: new Date().toLocaleString('en-US', options)
    };
    this.push(task);
    addToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */]);
    this.trigger('add', [task]);
};

TaskModel.prototype.delete = function (task) {
    let index = this.indexOf(task);
    if (index >= 0) {
        this.splice(index, 1);
    }
    localStorage.setItem('arrTasks', JSON.stringify(__WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */]));
    addToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */]);
    this.trigger('delete', [task]);
};

TaskModel.prototype.move = function (task) {
    let index = __WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */].indexOf(task);
    if (event.target.innerHTML === 'Up') {
        if (index !== 0) {
            let up = __WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */][index - 1];
            __WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */][index - 1] = task;
            __WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */][index] = up;
        }
    } else {
        if (index !== __WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */].length - 1) {
            let down = __WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */][index + 1];
            __WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */][index + 1] = task;
            __WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */][index] = down;
        }
    }
    addToLocalStorage(__WEBPACK_IMPORTED_MODULE_0__model_task__["a" /* default */]);
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






/***/ })
/******/ ]);