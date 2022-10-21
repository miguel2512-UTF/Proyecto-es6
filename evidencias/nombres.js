const axios = require('axios')

let config = {
    method: 'get',
    url: "https://random-names-api.herokuapp.com/random"
}

axios(config)
    .then((response)=>{
        return response.data.body
    })
    .then((data)=>{
        console.log(data.name);
    })
    .catch((error)=>{
        console.error(error);
    })