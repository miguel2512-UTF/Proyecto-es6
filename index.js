//let variables o identificadores simples
// let lenguaje = "PHP"

//cont: funciones, arreglos, objetos

//template string
// console.log(`I hate ${lenguaje}`)

// console.log("I hate "+lenguaje)

import { materias } from "./materias.js";
import pkg from "colors";

//métodos de los arreglos
// materias.forEach(function(materia) {
//     if (materia.tipo==="técnica") {
//         console.log(`materia: ${materia.nombre}`.yellow)
//         console.log(`instructor: ${materia.instructor}`.blue)
//     }
// })

//map: construye un arreglo con base en otro
// const profesores = materias.map((materia)=>{
//     return materia.instructor
// })

// console.log(profesores)

//find: encontrar el primer elemento en el arreglo
// const PHP = materias.filter((materia)=>{
//     return materia.instructor === "Tatiana Cabrera"
// });

// console.log(PHP)

//push: agregar elemento
// materias.push({
//     id: 4,
//     nombre: "Diseño FrintEnd",
//     instructor: "Adriana Duarte",
//     tipo: "técnica",
//     notas: [
//         4.5,
//         3.8,
//         5
//     ]
// })

console.log(materias)

//Splice: eliminar
// materias.splice(0, 1)
// console.log(materias)

//findIndex: Actualizar

const numero = (materia)=>{
    if (materia.id==1) {
        materia.instructor = "miguel"
    }
}

materias.findIndex(numero)

console.log(materias)