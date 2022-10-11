//1. importamos la dependencia
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint= 'https://pokeapi.co/api/v2/type'

const exito =(response)=> {
    const tipos = JSON.parse(response).results
    tipos.forEach((tipo)=>{
        console.log(`Tipo: ${tipo.name}`)
        console.log('*..-..+..._...+..-..*')
    })
    //console.log(JSON.parse(response).results);
}

const fallo=(status)=> {
    console.log(status);
}

const get_data=(endpoint, exito, fallo)=> {
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
        //exito(http.responseText)
    }
}

//6. Invocamos la funcion de get_data
get_data(endpoint, exito, fallo)