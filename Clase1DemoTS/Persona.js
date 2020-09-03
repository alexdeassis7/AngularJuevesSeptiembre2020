"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(cuantosKilometros, nombre2, apellido2, edad2) {
        this.kilometros = cuantosKilometros;
        this.nombre = nombre2;
        this.apellido = apellido2;
        this.edad = edad2;
    }
    Persona.prototype.caminar = function () {
        console.log('estoy caminando ' + this.kilometros);
    };
    return Persona;
}());
exports.Persona = Persona;
