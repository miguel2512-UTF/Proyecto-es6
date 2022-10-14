const axios = require('axios')

let config = {
    method: 'get',
    url: "https://restcountries.com/v3.1/all"
}

const f = async ()=>{
    try {
       let response = await axios(config)
       response.data.forEach(element => {
        console.log(`País: ${element.name.common}`);
       });
    } catch (error) {
        console.error(error);
    }
}

f()