const express = require('express')
const app = express()
const port = 3000
const { log: clg } = console;
var fs = require('fs');

// Storing the JSON format data in myObject



const userRouter = require('./routes/v1/user.route.js')
app.use(express.json())
app.use('/api/v1/user', userRouter)

app.get('/', (req, res) => {
res.send('the more you read !')

})
app.all('/*', (q, s, n)=>{
    s.send("no route match")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = clg;
