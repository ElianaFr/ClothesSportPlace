import { ProductManager } from "./productManager.js";
import { CartManager } from "./cartManager.js";
import { __dirname } from "../utils.js";
import path from "path";

const productsService = new ProductManager(path.join(__dirname,"/files/fileProduct.json"));
const cartsService = new CartManager(path.join(__dirname,"/files/carts.json"));

export { productsService, cartsService };