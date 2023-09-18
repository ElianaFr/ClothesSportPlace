import { Router } from "express";

const router = Router();

// solo rutas get porque las esta ejecutando desde el navegador
router.get("/", (req,res)=>{
        res.render("home");
    
});
router.get("/realtimeproducts", (req,res)=>{
    res.render("realTimeProducts");
    
});


export {router as viewsRouter};
