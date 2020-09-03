import { Persona } from './Persona';
//instanciamos un objeto de tipo persona 
var miObjetoPersona = new Persona (10 ,'alex','de assis',25);
miObjetoPersona.caminar();

console.log('Demostracion TypeScript');
//Let / Var / Const
//var 
/*console.log('Demo VAR');
var foo = 123;
if (true) {
    var foo = 456;
}
console.log(foo);//imprime 456
//Let 
console.log('Demo LET');
let foo2 = 123;
if (true) {
    let foo2 = 456;//imprime 123
}
console.log(foo2);*/
//CONST
console.log('Demo Const');
const foo = 123;
//foo = 456 ; ESTO NO ESTA PERMITIDO 
console.log('mi constante : ' + foo);
//las constante admiten objetos literales

const foo2 = { bar: 123 };
//foo2 = { bar : 456 };  no se permite la modificacion de onjeto 
foo2.bar = 456; //Permitido modificar variables del objeto literal

//TIPOS PRIMITIVOS
console.log('TIPOS PRIMITIVOS');
console.log('Booleanos');
let isDone: boolean = false;
console.log('booleanas ' + isDone);

console.log('Numericos');
let decimal: number = 6;
console.log('Number decimal ' + decimal);

let hex: number = 0xf00d;
console.log('Number Hexadecimal ' + hex);

let binary: number = 0b1010;
console.log('Number Binario ' + binary);

let octal: number = 0o744;
console.log('Number Octal' + octal);

console.log('CADENAS DE CARACTERES');
let color: string = "blue";
console.log('color : ' + color);
color = 'red';
console.log('color : ' + color);

console.log('TEMPLATES PARA CONCATENAR String');
let fullName: string = 'Alex De Assis';
let age: number = 25;
let sentence: string = `Hello, my name is ${fullName}. I' ll be ${age + 1} years old nex month`;
console.log(sentence);

let sentence2: string = "Hello, my name is " + fullName + " . " + "I'll be " + (age + 1) + " years old next month.";
console.log(sentence2);

