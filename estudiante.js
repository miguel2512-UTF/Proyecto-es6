let colors = require("colors")

const estudiantes=["Laura","Carlos","Ana","Jorge"]

const g1=["Laura" , "Carlos", "Ana"]

const g2=["Enrique","Jairo","Valeria"]

const g3=[
    ...g1,
    "Diana",
    ...g2,
    "Duvan"
]

const estudiante = {
    id: 1,
    nombre: 'Miguel',
    apellido: 'Wilchez',
    identificacion: 1141114369,
    amigos: g3
}

//desestructurar arreglo de estudiante
let [ , , A , J] = estudiantes

console.log(estudiante)