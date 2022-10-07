function llamarAlumno(alumno, callback) {
    let llamadaAlumno = `llamando al alumno. ${alumno}`
    
    //ejecutar la función callback
    callback(llamadaAlumno)
}

//definir función callback
const imprimir = (texto)=>{
    console.log(texto)
}

//Invocar la función principal
llamarAlumno("Cristian Buitrago", imprimir)