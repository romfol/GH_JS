
document.getElementById('item').focus();

document.getElementById('add').addEventListener('click', function () {
    let value = document.getElementById('item').value;
    if (value) addItemTodo(value);
});

//Date create
let date = new Date();
let options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric'
};
date = date.toLocaleString("en-US", options);

//adds new items
function addItemTodo (text) {

    document.getElementById('item').select();

    let list = document.getElementById('todo');

    let item = document.createElement('li');
    item.innerText = text;

    let buttons = document.createElement('span');
    buttons.classList.add('buttons');

    let time = document.createElement('span');
    time.innerText = date;
    time.classList.add('time');

    let complete = document.createElement('button');
    complete.innerText = 'Mark';
    complete.classList.add('complete');
    complete.addEventListener('click', completeItem);

    let edit = document.createElement('button');
    edit.innerText = 'Edit that item';
    edit.classList.add('edit');
    edit.addEventListener('click', editItem);

    let remove = document.createElement('button');
    remove.innerText = 'Delete Item';
    remove.classList.add('remove');
    remove.addEventListener('click', removeItem);

    //appending all elements into HTML
    list.insertBefore(item, list.childNodes[0]);//each added on the top of list
    item.appendChild(buttons);
    item.appendChild(time);
    buttons.appendChild(complete);
    buttons.appendChild(edit);
    buttons.appendChild(remove);

    ////Drag'n'Drop implementation
    //let body = jQuery(document.body);
    //item.addEventListener('mousedown', function (event) {
    //    let helper = $(event.currentTarget);
    //    let clone = helper.clone();
    //    clone.appendTo(document.body.children[2]);

    //    body.on('mousemove', function (event) {
    //        clone.css({
    //            top:event.pageY,
    //            left:event.pageX
    //        })
    //    });
    //});
}

function completeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;

    //Check if item completed or not
    let target = id === 'todo' ? document.getElementById('completed'):document.getElementById('todo');
    parent.removeChild(item);
    target.appendChild(item);
}

function editItem() {
    let check = prompt('How should this item be renamed?');
    if (check) this.parentNode.parentNode.innerText = check;
  }

function removeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    parent.removeChild(item);
}

//Reverse implement
document.getElementById('reverse').addEventListener('click', function () {
    let getCollection = document.getElementById('todo');
    Array.prototype.slice.call(getCollection.childNodes).reverse().forEach(function (e) {
        getCollection.appendChild(e);
    })

});

