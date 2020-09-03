export class Persona{
    nombre: string;
    apellido: string;
    edad: number;
    kilometros: number;
    constructor(cuantosKilometros: number , nombre2: string, apellido2: string, edad2: number){
        this.kilometros = cuantosKilometros;
        this.nombre = nombre2;
        this.apellido = apellido2;
        this.edad = edad2 ;
    }
    caminar(){
        console.log('estoy caminando ' + this.kilometros);
    }
}