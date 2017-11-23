//focus on input after load page
document.getElementById('itmTxt').focus();

let btnNew = document.getElementById('add');
btnNew.onclick = addNewItem;



//some mess with date
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

function addNewItem() {

    //create the reference to input
    let itemText = document.getElementById('itmTxt');

    //auto focus and select after each operation
    itemText.focus();
    itemText.select();

    //get input text
    itemText = itemText.value;

    //do not make blank lists while input text returns 'false'
    if (!itemText) return false;

    //create lists
    let listItem = document.createElement('li');
    listItem.innerText = itemText;

    //create date
    let time = document.createElement('span');
    time.innerHTML = date;
    time.className = 'time';

    //create edit
    let edit = document.createElement('button');
    edit.className = 'edit';
    edit.innerHTML = 'Edit';
    edit.onclick = editItem;

    //create 'delete'
    let deleteItm = document.createElement('button');
    deleteItm.className = 'delete';
    deleteItm.innerHTML = 'Delete';
    deleteItm.onclick = deleteItem;

    //create reverse
    let reverse = document.getElementById('reverse');
    reverse.onclick = reverseItem;

    //append li, date, edit and delete into todoList
    let list = document.getElementById('todoList');
    list.appendChild(listItem);
    listItem.appendChild(time);
    listItem.appendChild(edit);
    listItem.appendChild(deleteItm);

}
function reverseItem() {
    let getCollection = document.body.children[2].childNodes;
    let get = Array.prototype.slice.call(getCollection);
    //reverse - Array!
    get.reverse();

    //getReverse.reverse();
    //return document.body.children[2].childNodes;
    //document.body.children[1].children[2].onclick = reverseItem;
    //this.parentNode.nextElementSibling.childNodes = ff();
}

//and it works
function deleteItem() {
    let item = this.parentNode;
    let parent = item.parentNode;
    parent.removeChild(item);
}

function editItem() {
    this.parentNode.innerText = prompt('How should this item be renamed?');
}
