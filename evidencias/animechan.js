const axios = require('axios')

let config = {
    method: 'get',
    url: "https://animechan.vercel.app/api/random"
}

const f = async ()=>{
    try {
       let response = await axios(config)
       console.log(response.data.character); 
    } catch (error) {
        console.error(error);
    }
}

f()