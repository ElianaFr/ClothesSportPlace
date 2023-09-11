import express from "express";
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";
// import {ProductManager} from "./persistence/productManager.js";
// se crea el servicio que me esta permitiendo acceder a la info que va a estar 
// en el archivo products
// const managerProductService =  new ProductManager("./src/files/fileProduct.json");

// se define el puerto
const port = 8080;

const app = express();

app.listen(port,()=> console.log(`Servidor funcionando en el puerto ${port}`));

// routes
app.use(express.json());

app.use("/api/products",productsRouter);
app.use("/api/carts",cartsRouter);


// // app.listen(port,()=>console.log("Servidor funcionando"));

// // rutas del servidor
// app.get("/products",async (req,res)=>{
//     try {
//         // guardamos la informacion en una variable 
//         const products = await managerProductService.getProducts();
//         // limite de los productos del usuario que quiere ver
//         const limit = parseInt(req.query.limit);
//         if(limit){
//             // slice devuelve una porcion del arreglo
//             // en primer lugar es desde donde empieza a contar
//             // segundo paso la variable que me va a ingresar el usuario
//             const productsLimit = products.slice(0,limit);
//             res.send(productsLimit)
//         }else{
//             res.send(products);
//         }
//     } catch (error) {
//         res.send(error.message)
//     }
// });
// // ruta por id
// app.get("/products/:prodId",async (req,res)=>{
//     try {
//         const id = parseInt(req.params.prodId);
//         const productId =  await managerProductService.getProductById(id);
//         if (productId){
//             res.send(productId)
//         }else{
//             res.send("Producto no encontrado")
//         }
//     } catch (error) {
//         res.send(error.message)
//     }
// });
