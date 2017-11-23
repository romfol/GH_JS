//jQuery ('li')

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

    //Click event for complete
    complete.addEventListener('click', completeItem);

    let edit = document.createElement('button');
    edit.innerText = 'Edit that item';
    edit.classList.add('edit');

    let remove = document.createElement('button');
    remove.innerText = 'Delete Item';
    remove.classList.add('remove');

    //Click event for remove
    remove.addEventListener('click', removeItem);

    //appending all elements into HTML
    list.insertBefore(item, list.childNodes[0]);//each added on the top of list
    item.appendChild(buttons);
    item.appendChild(time);
    buttons.appendChild(complete);
    buttons.appendChild(edit);
    buttons.appendChild(remove);
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

function removeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    parent.removeChild(item);
}


////focus on input after load page
//document.getElementById('itmTxt').focus();
//
//let btnNew = document.getElementById('add');
//btnNew.onclick = addNewItem;
//
//
//
////some mess with date
//let date = new Date();
//let options = {
//    year: 'numeric',
//    month: 'numeric',
//    day: 'numeric',
//    weekday: 'long',
//    hour: 'numeric',
//    minute: 'numeric'
//};
//date = date.toLocaleString("en-US", options);
//
//function addNewItem() {
//
//    //create the reference to input
//    let itemText = document.getElementById('itmTxt');
//
//    //auto focus and select after each operation
//    itemText.focus();
//    itemText.select()
//;//
//    //get input text
//    itemText = itemText.value;
//
//    //do not make blank lists while input text returns 'false'
//    if (!itemText) return false;
//
//    //create lists
//    let listItem = document.createElement('li');
//    listItem.innerText = itemText;
//
//    //create date
//    let time = document.createElement('span');
//    time.innerHTML = date;
//    time.className = 'time';
//
//    //create edit
//    let edit = document.createElement('button');
//    edit.className = 'edit';
//    edit.innerHTML = 'Edit';
//    edit.onclick = editItem;
//
//    //create 'delete'
//    let deleteItm = document.createElement('button');
//    deleteItm.className = 'delete';
//    deleteItm.innerHTML = 'Delete';
//    deleteItm.onclick = deleteItem;
//
//    //create reverse
//    let reverse = document.getElementById('reverse');
//    reverse.onclick = reverseItem;
//
//    //append li, date, edit and delete into todoList
//    let list = document.getElementById('todoList');
//    list.appendChild(listItem);
//    listItem.appendChild(time);
//    listItem.appendChild(edit);
//    listItem.appendChild(deleteItm);
//
//}
//function reverseItem() {
//    let getCollection = document.body.children[2].childNodes;
//    let get = Array.prototype.slice.call(getCollection);
//    //reverse - Array!
//    get.reverse();
//
//    //getReverse.reverse();
//    //return document.body.children[2].childNodes;
//    //document.body.children[1].children[2].onclick = reverseItem;
//    //this.parentNode.nextElementSibling.childNodes = ff();
//}
//
////and it works
//function deleteItem() {
//    let item = this.parentNode;
//    let parent = item.parentNode;
//    parent.removeChild(item);
//}
//
//function editItem() {
//    this.parentNode.innerText = prompt('How should this item be renamed?');
//}
