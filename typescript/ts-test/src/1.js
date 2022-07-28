var message = 'hello typescript!';
console.log(message);
var numbers = [1, 2, 3];
var strings = ['Hont', 'Gil', 'Dong'];
var color = 'red'; //3중 하나
console.log(color);
function sum(x, y) {
    return x + y;
}
var result = sum(1, 2);
console.log(result);
function sumArray(numbers) {
    return numbers.reduce(function (sum, current) {
        return sum + current;
    }, 0);
}
result = sumArray([1, 2, 3]);
console.log(result);
