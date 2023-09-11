import { Router } from "express";
import { cartsService } from "../persistence/index.js";

const router = Router();

// localhost:8080/api/carts
router.get("/", async (req,res)=>{
    try {
        const carts = await cartsService.getCarts()
        res.json(carts)
    } catch (error) {
        res.json({error:error.message})
    }
});
// /api/carts/:cid
router.get("/:cid", async (req,res)=>{
    try {
        const cartId = parseInt(req.params.cid)
        const cart = await cartsService.getCartById(cartId)
        res.json(cart)
    } catch (error) {
        res.json({error:error.message})
    }
});
//api/cart/:cid/
router.post("/:cid/products/:pid",async (req,res)=>{
    try {
        const cartId = parseInt(req.params.cid);
        const prodId = parseInt(req.params.pid);
        const upCart = await cartsService.updateCart(cartId,prodId);
        res.json({upCart})
    } catch (error) {
        res.json({error:error.message});
    }
});

router.post("/",async (req,res)=>{
    try {
        const createCart = await cartsService.createCarts();
        res.json({data:createCart})
    } catch (error) {
        res.json({error:error.message});
    }
});


export {router as cartsRouter}