/*5. Рекурсія
5.1. Написати рекурсивну функцію для обчислення факторіалу
5.2. Написати рекурсивну функцію для обчислення степені числа
5.3. Написати рекурсивну функцію для обчислення суми цифр цілого числа (наприклад, сума цифр числа 3742 буде 3+7+4+2 = 16)
5.4. Виконати завдання 5.1 - 5.3 без використання рекурсії і визначити який варіант працює швидше (наприклад, скільки часу треба на 10000 обчислень)*/

function factorial(num) {
    if (num === 0){
        return 1;  
    } else { 
        return num*factorial(num-1);
    }
}
console.log(factorial(3));

function pwr(num, pow) {
    if (pow !== 1) {        
        return num*pwr(num, pow-1);
    } else {
        return num;
    }
}
console.log(pwr(3, 4));

 function sum(num) {
     var rest = num % 10;
     if (num > 0) {
         rest += sum(Math.floor(num/10));
     }
     return rest;
}
console.log(sum(46552));

function pow(n, pwr) {
    var result = n;
    for (var i = 1; i < pwr; i++) {
    result *= n; 
    }
    return result;
}
console.log( pow(5,5) );


var timeLoop = performance.now();
for (var i = 1; i < 1000; i++) pow(111, 222);
timeLoop = performance.now() - timeLoop;

var timeRecursion = performance.now();
for (var i = 1; i < 1000; i++) pwr(111, 222);
timeRecursion = performance.now() - timeRecursion;

alert( "Рекурсия дольше у " + Math.round(timeRecursion / timeLoop) + " раз" );