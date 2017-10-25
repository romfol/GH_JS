/*Зробіть, щоб в чисел з'явився метод sum(), який отримує інше число і на виході дає їх суму, наприклад x.sum(y) === x + y */ 
Number.prototype.sum = function(x) { 
     return this + x;
    }
var y = 88;
console.log(y.sum(12));