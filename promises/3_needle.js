const needle = require('needle')

let endpoint= 'https://pokeapi.co/api/v2/type'

needle('get', endpoint)
    .then((response)=>{
        return response.body.results
    })
    .then((data)=>{
        data.forEach(element => {
            console.log(`Tipo: ${element.name}`);
            console.log('---------------------');
        });
    })
    .catch()