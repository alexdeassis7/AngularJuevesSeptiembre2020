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
var foo = 123;
//foo = 456 ; ESTO NO ESTA PERMITIDO 
console.log('mi constante : ' + foo);
//las constante admiten objetos literales
var foo2 = { bar: 123 };
//foo2 = { bar : 456 };  no se permite la modificacion de onjeto 
foo2.bar = 456; //Permitido modificar variables del objeto literal
//TIPOS PRIMITIVOS
console.log('TIPOS PRIMITIVOS');
console.log('Booleanos');
var isDone = false;
console.log('booleanas ' + isDone);
console.log('Numericos');
var decimal = 6;
console.log('Number decimal ' + decimal);
var hex = 0xf00d;
console.log('Number Hexadecimal ' + hex);
var binary = 10;
console.log('Number Binario ' + binary);
var octal = 484;
console.log('Number Octal' + octal);
console.log('CADENAS DE CARACTERES');
var color = "blue";
console.log('color : ' + color);
color = 'red';
console.log('color : ' + color);
console.log('TEMPLATES PARA CONCATENAR String');
var fullName = 'Alex De Assis';
var age = 25;
var sentence = "Hello, my name is " + fullName + ". I' ll be " + (age + 1) + " years old nex month";
console.log(sentence);
var sentence2 = "Hello, my name is " + fullName + " . " + "I'll be " + (age + 1) + " years old next month.";
console.log(sentence2);
