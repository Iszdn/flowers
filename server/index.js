import express from 'express'
import cors from 'cors'
import "dotenv/config"
import mongoose from 'mongoose'
import router from './src/routers/instum.js'
const app = express()
app.use(cors())
app.use(express.json())
app.use("/",router)
const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
const PORT=process.env.PORT


mongoose.connect(url).then(()=>console.log("connect")).catch((error)=>console.log(error))

app.listen(PORT, () => {
  console.log(`Example app listening on port`)
})