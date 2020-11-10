// getting our libraries
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
app.use(cors())
app.use(bodyParser())

let myQuotes = [
    'Live life to the fullest'
]

// let codhers = {}

// app.get('/codhers', (req, res) => {
//     app.json({
//         message: 'Here are all the Codhers',
//         data: codhers
//     })
// })

// app.post('/codhers' , (req, res) => {
    
// })


app.get('/quotes', (req, res) => {
    res.json({ quotes: myQuotes})
})

app.post('/quotes', (req, res) =>
{
    console.log(req.body)


    myQuotes = [
        ...myQuotes,
        ...req.body.addThisQuote
    ]

    res.json({
    message: "This "
    })
})

app.listen(3000, () => {
    console.log("Codher server is running!");
  });


// post = adds
// get = retrieves
// patch = modifies
// delete = deletes