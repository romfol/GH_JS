//pop Method
var arr0 = ['one', 'two', 'three'];
arr0.pop();
console.log(arr0);

//push Method
var arr1 = ['one', 'two', 'three'];
arr1.push(4);
console.log(arr1);

//concat Method
var arr2 = [1, 2, 3, 4];
var arr3 = [5, 6, 7, 8];
var arr4 = arr2.concat(arr3);
console.log(arr4);

//indexOf Method
var arr5 = [1, 2, 3, 4, 5, 6, 'seven', 'ten'];
console.log(arr5.indexOf ('seven'));
console.log(arr5.indexOf (1));

//join Method
var arr6 = [1, 2, 3, 4, 5, 6, 'seven', 'ten'];
arr6 = arr6.join(' + ');
console.log( arr6+' = 38' );

//forEach Method
var arr7 = [1, 2, 3, 4, 5, 6, 'seven', 'ten'];
arr7.forEach(function (item, i, arr7) {
    console.log (i+': '+item+'(array:'+arr7+')');
});

//filter Method
var arr8 = [1, 2, 3, -4, 5, -6, 'seven', 'ten',null];
var arr9 = arr8.filter(function (number) {
    return number >= 0;
});
console.log(arr9);

//find Method
var arr10 = [1, 2, 3, -4, 5, -6, 'seven', 'ten',null];
function fun(element, index, array) {
    if (element.length>1) {
        return true;
    }
}
console.log(arr10.find(fun));

//map Method
var arr11 = ['one', 'seven', 'ten'];
var arr11Lengths = arr11.map(function(name) {
    return name.length;
});
console.log( arr11Lengths );

//slice Method
var arr12 = [1, 2, 3, -4, 5, -6, 'seven', 'ten',null];
arr12 = arr12.slice(6);
console.log(arr12);

//splice Method
var arr13 = [1, 2, 3, -4, 5, -6, 'seven', 'ten',null];
arr13.splice(0, 5, 'added element');
console.log(arr13);

//shift Method
var arr14 = [1, 2, 3, -4, 5, -6, 'seven', 'ten',null];
arr14.shift();
console.log(arr14);

//unshift Method
var arr15 = [1, 2, 3, -4, 5, -6, 'seven', 'ten',null];
arr15.unshift (-10, 'thgsdfvgr', true);
console.log(arr15);