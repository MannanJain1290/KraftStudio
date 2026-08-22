import mongoose from "mongoose"; 
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"])


const connectDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log("DB Connected");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)

}

export default connectDB;