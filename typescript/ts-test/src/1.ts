const message: string = 'hello typescript!';
console.log(message);
const numbers: number[] = [1, 2, 3];
const strings: string[] = ['Hont', 'Gil', 'Dong'];
let color: 'red' | 'blue' | 'yello' = 'red'; // 3중 하나
console.log(color);

function sum(x: number, y: number): number {
    return x + y;
}
let result = sum(1, 2);
console.log(result);

function sumArray(numbers: number[]): number {
    return numbers.reduce((sum, current) => sum + current, 0);
}
result = sumArray([1, 2, 3]);
console.log(result);
