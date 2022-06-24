// array
var fruits = ['apple', 'banana', 'kiwi', 'melon'];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
fruits.forEach(function (item, idx, array) {
    console.log(item + ' ' + idx);
});
// push & pop
var a = fruits.pop();
console.log('-------------------');
console.log(a);
console.log(fruits);
// shift and unshift
fruits.unshift('peach', 'stawberry');
console.log(fruits);
//splice
fruits.splice(1, 1);
fruits.splice(3);
fruits.splice(1, 1, 'grape', 'berry'); //idx 1에서 1개 지우고 거기에 넣기
//concat
var fruits2 = ['abc', 'def'];
var newFruits = fruits.concat(fruits2);
console.log(newFruits);
//indexOf, lastIndexOf, includes
console.log(fruits2.include('apple'));
