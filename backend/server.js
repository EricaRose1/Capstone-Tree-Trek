const express = require("express");
const cors = require('cors')
const axios = require('axios')
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const SECRET = process.env.REACT_APP_API_KEY || "test";

const PORT = process.env.PORT || 3001;
app.use(cors())

app.get("/", (req, res) => {
    res.json("hi")
})

app.get('/parks', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://developer.nps.gov/api/v1/parks?limit=5',
        headers: {
            'X-API-Key': SECRET
        }
    }
    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.error(error)
    })
})



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
