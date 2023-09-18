import express from "express";
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";
import { viewsRouter } from "./routes/views.routes.js";
import { __dirname } from "./utils.js";
import path from "path";
import { engine } from "express-handlebars";
import { Server } from "socket.io";


// se define el puerto
const port = 8080;

const app = express();

app.listen(port,()=> console.log(`Servidor funcionando en el puerto ${port}`));

// configuracion handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

// midleware para leer la info del body
app.use(express.json());
//  midleware para leer la informacion del formulario
app.use(express.urlencoded({extended:true}));
// se agrega la ruta donde van a estar nuestreos archivos publicos
app.use(express.static("public"));

// routes
app.use(viewsRouter);
app.use("/api/products",productsRouter);
app.use("/api/carts",cartsRouter);


// app.use(viewsRouter);