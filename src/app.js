import express from "express";
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";

// se define el puerto
const port = 8080;

const app = express();

app.listen(port,()=> console.log(`Servidor funcionando en el puerto ${port}`));

// routes
app.use(express.json());

app.use("/api/products",productsRouter);
app.use("/api/carts",cartsRouter);

