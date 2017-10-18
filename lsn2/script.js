//task1
for (var i='#' ;; i=i+'#') {
    console.log(i);
     if (i=='#######') break;   
}

//task2
for (i=1; i<=100; i++) {
    if (i%3==0 && i%5==0) {
        console.log('FizzBuzz');
    } else if(i%3==0) {
        console.log('Fizz');
    } else if (i%5==0) {
        console.log('Buzz');    
    } else {
        console.log(i);
    }
}

//task3
var size = 8;
var board = "";
for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}
console.log(board);

//task4
function min(a, b) {
    if (a<b)
        return a;
    else if (b<a)
        return b;
    else return 'Enter different numbers'
}
console.log(min(4,4));

function isEven(n) {
    
}