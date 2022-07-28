// array
const fruits = ['apple', 'banana', 'kiwi', 'melon'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.forEach((item, idx, array) => {
    console.log(item + ' ' + idx);
});
// push & pop
let a = fruits.pop();
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
const fruits2 = ['abc', 'def'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//indexOf, lastIndexOf, includes
//console.log(fruits2.include('apple'));
