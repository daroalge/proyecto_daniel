import  express, { Router }  from "express";
import { userRoutes } from "./routes/users_routes";


require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRoutes);

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
});