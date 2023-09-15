import express from "express";
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";

// se define el puerto
const port = 8080;

const app = express();

app.listen(port,()=> console.log(`Servidor funcionando en el puerto ${port}`));

// midleware para leer la info del body
app.use(express.json());
//  midleware para leer la informacion del formulario
app.use(express.urlencoded({extended:true}));
// se agrega la ruta donde van a estar nuestreos archivos publicos
app.use(express.static("public"));
// routes
app.use("/api/products",productsRouter);
app.use("/api/carts",cartsRouter);

