const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000;

app.use(cors());

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'asia',
        'waterTemp': 200,
        'caffinated': true,
        'steepTimeSeconds': 180,
        'flavor': 'delicious'
        
    },

    'matcha': {
        'type': 'green',
        'origin': 'Asia',
        'waterTemp': 200,
        'caffinated': false,
        'steepTimeSeconds': 180 ,
        'flavor': 'delicious'
        
    },

    'unkown': {
        'type': 'unkown',
        'origin': 'unkown',
        'waterTemp': 0,
        'caffinated': false,
        'steepTimeSeconds': 0,
        'flavor': 'unkown'
        
    }
}

// when we hear a get request we respond with a file
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    if( tea[teaName] ) {
        response.json(tea[teaName])
    } else [
        response.json(tea['unkown'])
    ]
})

// we must create a way for the server to listen to the request
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! Betta go catch it!`)
})

