import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const db = async () => {
await mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
 .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch((err) => {
        console.error("Error:", err)
    })
}
export default db