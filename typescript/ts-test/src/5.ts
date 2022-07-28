type MyInfo = {
    name: string;
    age: number;
};
const hong = { name: 'Hong Gil Dong', age: 20 };

console.log(hong.name);
//----------------------------------
// basic type
//-----------------------------------
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

//turple : 배열의 길이가 고정, 타입도 지정
let arr3: [string, number] = ['Hong', 23];

//Enum
enum Lang {
    Java,
    Go,
    COBOL
}
let lang: Lang = Lang.COBOL;
