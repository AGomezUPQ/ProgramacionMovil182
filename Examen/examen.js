//Examen
//Declara el siguiente arreglo:
//i.
//numeros= [9,2,8,7,5,6,6,1,3,4,2,8,1,7,6]
//II.
//Crea una función asíncrona que recorra el arreglo numeros y genere uno nuevo llamado pares que contenga solo los pares de arreglo numeros
//III.
//mprimir los 2 arreglos como resultado

let numeros = [9,2,8,7,5,6,6,1,3,4,2,8,1,7,6];

//Async function
async function obtenerPares(arr) {
    let pares = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            pares.push(num);
        }
    }
    return pares;
}
async function main() {
    let pares = await obtenerPares(numeros);
    console.log("Arreglo original:", numeros);
    console.log("Arreglo de pares:", pares);
}
main();

//I.
//Declara el siguiente arreglo
//estudiantes = [ { name: 'Mane', age: 15 }, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, { name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 },];
//II.
//Crea una función asíncrona que recorra el arreglo estudiantes y que guarde en un nuevo arreglo solo los nombres de los estudiantes que tienen mas de 18 años
//III.
//Imprimir los 2 arreglos como resultado

const estudiantes = [ { name: 'Mane', age: 15 }, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, { name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 },];

async function estudiantesmayores(array2) {
    let mayores = [];
    for (let estudiante of array2) {
        if (estudiante.age > 18) {
            mayores.push(estudiante.name);
        }
    }
    return mayores;
}
async function main2() {
    let mayores = await estudiantesmayores(estudiantes);
    console.log("Arreglo original:", estudiantes);
    console.log("Arreglo de personas mayores:", mayores);
}
main2();