import { Router } from "express";
import { productsService } from "../persistence/index.js";

const router = Router();

// cargar un nuevo producto /api/products
router.post("/", async (req,res)=>{
    try {
        const productAdd = req.body;
        const add = await productsService.addProduct(productAdd);
        console.log("Peticion recibida")
        res.json(add)
    } catch (error) {
        res.status(404).json({status:"error",message:error.message})
        // res.json({status:"error",message:error.message});
    }
});
// localhost:8080/api/products con query
router.get("/", async (req,res)=>{
    try {
        const products = await productsService.getProducts();
        const limit = parseInt(req.query.limit);
        if(limit){
// slice devuelve una porcion del arreglo// en primer lugar es desde donde empieza a contar
// segundo paso la variable que me va a ingresar el usuario
        const productsLimit = products.slice(0,limit);
            res.json({limit:productsLimit})
        }else{
            res.json(products);
        }
    } catch (error) {
        res.status(404).json({status:"error",message:error.message});
        // res.json({status:"error",message:error.message});
    }
});
// localhost:8080/api/products/:pid
router.get("/:pid",async(req,res)=>{
    try {
        const id = parseInt(req.params.pid);
        const productId =  await productsService.getProductById(id);
        res.json({data:productId})
    } catch (error) {
        res.status(404).json({status:"error",message:error.message});
        // res.json({status:"error",message:error.message});
    }
    
});
// api/products/:pid (modificar un producto)
router.put("/:pid", async (req,res)=>{
    try {
        const updateId  = parseInt(req.params.pid);
        const newInfo = req.body;
        const prodUpdate= await productsService.updateProduct(updateId,newInfo);
        console.log("Peticion recibida,producto actualizado")
        res.json(prodUpdate);
    } catch (error) {
        res.status(404).json({status:"error",message:error.message});
    }
});
// api/products/:pid (eliminar producto)
router.delete("/:pid", async (req,res)=>{
    try {
        const deleteId = parseInt(req.params.pid);
        const newList = await productsService.deleteProduct(deleteId);
        console.log("Peticion recibida, eliminar producto")
        res.json(newList)
    } catch (error) {
        res.status(404).json({status:"error",message:error.message});
    }
});


export {router as productsRouter}