import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriasRouter from "./routes/categorias.routes.js"
import clientesRouter from "./routes/clientes.routes.js"
import empleadosRouter from "./routes/empleados.routes.js"
import productosRouter from "./routes/productos.routes.js"
import cors from "cors";

const app = express();

const configCors = {
    methods:["GET", "POST", "DELETE", "PATCH", "PUT"]
};

app.use(express.json());

app.use(cors(configCors));

dotenv.config();

app.use("/categoria",categoriasRouter);
app.use("/cliente",clientesRouter);
app.use("/empleado",empleadosRouter);
app.use("/producto",productosRouter)

const PORT = process.env.PORT
conectarDB();

app.listen(5000, ()=>{
    console.log(`Super Server web running on the port ${PORT}`);
})