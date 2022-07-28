//Basic types
let id: number = 5;
let company: string = 'Kalpa Tech';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

//Tuple
let person: [number, string, boolean] = [1, 'Hong', true];
//Tuple array
let employee: [number, string][];

employee = [
    [1, 'Hong'],
    [2, 'Kim'],
    [3, 'Lee']
];

//Union
let pid: string | number = 22;
pid = '22';

//Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right /*0, 1, 2, 3*/
}
console.log(Direction1.Up);

//Object
type User = {
    id: number;
    name: string;
};
const user: User = {
    id: 1,
    name: 'Hong'
};

//Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

//Functions
function addNum(x: number, y: number): number {
    return x + y;
}

//Void
function log(message: string | number): void {
    console.log(message);
}

log('1111');
log(1);

// Interfaces
interface UserInterface {
    readonly id: number;
    name: string;
    age?: number;
}
const user1: UserInterface = {
    id: 1,
    name: 'John'
};

// user1.id = 5;

interface MathFunc {
    (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
interface PersonInterface {
    id: number;
    name: string;
    register(): string;
}
class Person implements PersonInterface {
    id: number; // protected,
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        console.log(123);
    }
    register() {
        return `${this.name} is registered`;
    }
}
const hong = new Person(1, 'Hong');
const kim = new Person(2, 'Kim');
// hong.id = 5;

console.log(hong, kim);
console.log(hong.register());

class Employee extends Person {
    position: string;
    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(3, 'Park', 'developer');

console.log(emp.register());

//Generics

// function getArray<(items: any[]): any[] {
//     return new Array().concat(items)
// }
// let numArray = getArray([1,2,3])
// let strArray = getArray(['Hong', 'Park', 'Kim'])
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(['Kim', 'Hong']);
