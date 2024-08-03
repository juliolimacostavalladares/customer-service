import express from "express"
import router from "./presentation/routes/index"

const port = 3001 || process.env.PORT 

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use('/customer', router)

app.listen(port, () => {
  try {
    console.log('Server running on port ' + port)
    
  } catch (error) {
    throw new Error('Server error - ' +error)
  }
})