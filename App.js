const express = require('express')
const cors = require('cors')
const userRouter = require('./routers/userRouter')

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use('/user/',userRouter);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))