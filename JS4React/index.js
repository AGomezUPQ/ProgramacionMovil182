//funcion
/*
function suma  (a,b){
    return a+b
}

*/
//funcion fatArrow
/*
const suma = (a,b)=>{
    return a+b
    }

console.log(suma(2,3));
*/

//fat arrow simplificada
/*
const suma = (a,b)=> a+b

console.log(suma(2,3));
*/
/*

const usuario={
    nombre: 'ivan',
    apellidoP: 'Guerra',
    edad: 36,
    direccion:{
        pais: 'Mexico',
        ciudad: 'Queretaro',
        calle:'la misma 123'
    },
    amigos:['Alex', 'Carlos'],
    estatus: true,
    enviaCorreo: enviarCorr=()=> 'enviando...'
};


// Propiedades de un objeto
//console.log(usuario);
//console.log(usuario.nombre);
//console.log(usuario.direccion.calle);
//console.log(usuario.amigos);

// Métodos de un objeto
console.log(usuario.enviaCorreo());


// Trabajo con el DOM
const titulo = document.createElement('h1');
titulo.innerText = 'Soy un título creado con JS';
document.body.append(titulo);

const boton = document.createElement('button');
boton.innerText = 'Presioname';
document.body.append(boton);

boton.addEventListener('click', function() {
    //console.log('Evento click ejecutado');
    titulo.innerText = 'Evento click ejecutado';
    alert('Exito');
});

*/


//Arreglos
const nombres = ['Alan', 'Isa', 'Pablo', 'Juan Luis']

//For clasico
/*
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}


// forEach

nombres.forEach(function(nombre) {
    console.log(nombre);
});


// Map sirve para recorrer un arreglo y devolver un nuevo arreglo
//Array

 const array2 = nombres.map(function(nombre) {
    console.log(nombres)
    return nombre
 }) 
 console.log(nombres)
 console.log(array2)

 //Funcion find: ubicar elementos en un arreglo

 const resultado = nombres.find(function (nombre) {
    if(nombre === 'Pablo'){
    return nombre
 }
 })

 console.log(resultado)

 //Funcion filter: recorre el arreglo filtrando un resultado a otro

 const resultado = nombres.filter(function (nombre) {
    if(nombre != 'Pablo'){
    return nombre
 }
 })
 console.log(resultado)
 console.log(nombres)

 */

//Funcion Concatenar: 

const edades = [78,89,12,8,10,15]
console.log(nombres.concat(edades))

//Spread operatorS
console.log([...nombres, ...edades])



//MODULOS: IMPORT & EXPORT
/*
import {suma,resta} from "./calculadora.js"
import * as calculadora from "./calculadora.js"

console.log(suma(4,8))
console.log(resta(45,8))
*/