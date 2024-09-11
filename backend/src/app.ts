import  express, { Router }  from "express";
import { userRoutes } from "./routes/users_routes";
import { productRoutes } from "./routes/product_routes";
import cors from "cors";

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(productRoutes);

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
});