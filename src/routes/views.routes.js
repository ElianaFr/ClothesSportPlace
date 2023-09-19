import { Router } from "express";
import { productsService } from "../persistence/index.js";


const router = Router();

// solo rutas get porque las esta ejecutando desde el navegador
router.get("/", async (req,res)=>{
    try {
        const products = await productsService.getProducts();
        // console.log("datos products",products)
        res.render("home",{products:products});    
    } catch (error) {
        res.status(404)
    }        
});
router.get("/realtimeproducts", (req,res)=>{
    try {
        res.render("realTimeProducts");
    } catch (error) {
        res.status(404)
    }
});


export {router as viewsRouter};
