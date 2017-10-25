/* 1. Створити об'єкт. В цьому об'єкті написати власні реалізації наступних методів масиву: pop(), push(), slice(), join(), reverse()
2. Оголосити масив для тестування методів ['a', 'b', 'c', 4, 5, 6]
3. Продемонструвати роботу кожного методу двома способами:
3.1. викликаючи метод цього об'єкту, в контексті масиву*/
var arr = ['a', 'b', 'c', 4, 5, 6];

var arrMeth = {
        arr_pop: function () {
            return this.splice(this.length-1, 1);
        },
        arr_push: function (item) {
            return this.splice(this.length, 0, item);
        },
        arr_slice: function (j, f) {
            return this.slice(j, f);
        },
        arr_join: function (d) {
            return this.join(d);
        },
        arr_reverse: function (s) {
            return this.reverse(s);
        },
};



arrMeth.arr_pop.call(arr);
console.log(arr);

arrMeth.arr_push.call(arr, 'wat');
console.log(arr);

console.log(arrMeth.arr_slice.call(arr, 0, 4));

console.log(arrMeth.arr_join.call(arr, ','));

console.log(arrMeth.arr_reverse.call(arr));

/*3.2. перевизначивши метод прототипу масиву */
Array.prototype.pop = arrMeth.arr_pop;
arr.pop();
console.log(arr)

Array.prototype.push = arrMeth.arr_push;
(arr.push(0));
console.log(arr);

Array.prototype.slic = arrMeth.arr_slice;
console.log([4,2,'yalya'].slic(1,3));

Array.prototype.joing = arrMeth.arr_join;
console.log(arr.joing(';'));

Array.prototype.revrse = arrMeth.arr_reverse;
console.log(arr.revrse());