//1. importamos la dependencia
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint= 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'

function exito(response) {
    console.log(JSON.parse(response));
}

function fallo(status) {
    console.log(status);
}

function get_data(endpoint, exito, fallo) {
    //2. creamos el objeto de la API
    let http = new XMLHttpRequest()

    //3. abrir conexion de la API
    http.open('get', endpoint)

    //4. enviar la solicitud(request) a la API
    http.send()

    //5. hacer el tratamiento de la response
    http.onload = function(){
        if (http.status === 200) {
            exito(http.responseText)
        }else{
            fallo(http.status)
        }
    }
}

//6. Invocamos la funcion de get_data

get_data(endpoint, exito, fallo)