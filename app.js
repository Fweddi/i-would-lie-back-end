const express = require('express')
const app = express()
const port = 9000

let testAPIRouter = require("./routes/testAPI");
let cors = require("cors");

app.use(cors());

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
app.get('/', (req, res) => res.send('Hello World!'))
app.use("/testAPI", testAPIRouter);


