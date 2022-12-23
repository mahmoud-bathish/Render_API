const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!  Mahmoud')
})

app.get('/students', (req, res) => {
  res.send(
    `[{
        id:1,
        fName:"Mahmoud",
        lName:"Bathich"
    },
    {
        id:2,
        fName:"Ahmad:,
        lName:"Bathich:
    }]
    `
  )
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})