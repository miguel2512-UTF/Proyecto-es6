const needle = require('needle')

let endpoint= 'https://ws-public.interpol.int/notices/v1/red'

needle('get', endpoint)
    .then((response)=>{
        return response.body._embedded.notices
    })
    .then((data)=>{
        data.forEach(element => {
            console.log(`Nombre: ${element.forename}`);
            console.log(`Fecha de Nacimiento: ${element.date_of_birth}`);
            console.log(`Nacionalidad: ${element.nationalities}`);
            console.log('---------------------');
        });
    })
    .catch()