const request=require('request')

let endpoint = 'https://passwordinator.herokuapp.com?num=true&caps=true'

const r = request(endpoint, {json: true}, function(err, data, response) {
    console.log(response.data);
})