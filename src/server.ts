import bodyParser from "body-parser"
import express from "express"
import router from "./presentation/routes/index"

const port = 3001 || process.env.PORT 

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/customer', router)

app.listen(port, () => {
  try {
    console.log('Server running on port ' + port)
    
  } catch (error) {
    throw new Error('Server error - ' +error)
  }
})