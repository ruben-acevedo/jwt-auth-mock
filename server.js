const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req,res) => {
  res.send("Hello World!")
})

app.listen(3000, () =>  console.log("initialized at 3000."))
