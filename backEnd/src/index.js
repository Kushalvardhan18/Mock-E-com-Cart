import express from "express"
import dotenv from "dotenv"
import routes from "./routes/cart.routes.js"
import db from "./utils/db.js"
import cors from "cors"

dotenv.config()
const app = express()
const port = process.env.PORT || 4000
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all origins
  next();
});
app.get('/', (req, res) => {
    res.send('Hello World!')
})

db()

app.use("/api", routes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

})