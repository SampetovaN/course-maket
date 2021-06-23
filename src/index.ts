// Core types

function add(n1: number, n2: number, showResult: boolean) {
  return showResult ? n1 + n2 : null;
}

let number1: number;
number1 = 34;
const number2 = 10;
let isShowResult = true;
const result = add(number1, number2, isShowResult);
// console.log(result)
//  objectU
enum Role {ADMIN = "123", READ = "345", author = "1245"}

const person = {
  name: "Nika",
  age: 30,
  hobbies: ['sports', 'cooking'],
  role: Role.author
}
let activities: any[];
activities = [11, 'dfgg', 'fdfdf', 'ffvfv']
//console.log(person.role)
// Union-Literal types
type Combinable = number | string;
type Descriptor = 'as-num' | 'as-text';

function combine(n1: Combinable, n2: Combinable, resultConv: Descriptor) {
  if (typeof n1 === 'number' && typeof n2 === 'number' || resultConv === 'as-num') {
    return +n1 + +n2;
  }
  return n1.toString() + n2.toString();
}

/*console.log(combine(1, 0, 'as-num'))
console.log(combine('1', '0', 'as-num'))
console.log(combine('gg', 'Nd', 'as-text'))*/

function sum(n1: number, n2: number): number {
  return n1 + n2;
}
// difference between void and undefined
function printRes(num: number): void {
  console.log('Res' + num)
}
function printRes1(num: number): undefined {
  console.log('Res' + num)
  //always add return - otherwise will be error
  return;
}
let combineValues: (a:number, b:number) => number;
combineValues = sum;
//console.log(combineValues(12, 44))
//printRes(sum(7,8))
function addAndHandle(n1:number, n2: number, cb:(n1:number) => void) {
  const result = n1+ n2;
  cb(result);
}
//addAndHandle(12, 10, printRes)
// difference between any and unknown
let userInput: unknown;
let userValue: any;
let userAge: number;
let useName: string;
userInput = 5;
userInput = "Max"
userValue = 23
if(typeof userInput === 'string') {
  useName = userInput
}
userAge = userValue

function genError(mes: string, code: number): never{
  throw {message: mes, errorCode: code};
}




