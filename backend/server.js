import http from "http";
import app from "./app.js";
import connectDB from "./config/db.config.js";  

const server = http.createServer(app); 

connectDB();

const PORT = process.env.PORT || 8800;
server.listen(PORT, ()=>{
    console.log("Server is running on port", PORT);
})