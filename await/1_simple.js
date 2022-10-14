//1. importamos la dependencia
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint= 'https://pokeapi.co/api/v2/type'

const exito =(response)=> {
    const tipos = JSON.parse(response).results
    tipos.forEach((tipo)=>{
        console.log(`Tipo: ${tipo.name}`)
        console.log('------------------')
    })
    //console.log(JSON.parse(response).results);
}

const fallo=(status)=> {
    console.log(status);
}

const get_data=(endpoint)=> {
    //definir una promesa para la conexión API
    let promise = new Promise((resolve, reject)=>{
        //1. creamos el objeto de la API
        let http = new XMLHttpRequest()

        //2. abrir conexion de la API
        http.open('get', endpoint)

        //3. enviar la solicitud(request) a la API
        http.send()

        //4. hacer el tratamiento de la response
        http.onload = function(){
            if (http.status === 200) {
                resolve(http.responseText)
            }else{
                reject(http.status)
            }
            //exito(http.responseText)
        }
    })

    return promise
}

async function f(){
    try {
        let response = await get_data(endpoint)
        exito(response)
    } catch (error) {
        fallo(error)
    }
}
f()

//6. Invocamos la funcion de get_data
// get_data(endpoint)
//     .then((response)=>{
//         exito(response)
//     })
//     .catch((status)=>{
//         fallo(status)
//     })