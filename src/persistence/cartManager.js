import fs from "fs";
class CartManager{
    constructor (filePath){
        this.filePath = filePath;
    }
    fileExist(){
        return fs.existsSync(this.filePath);   
    }
    async getCarts(){
        try {
            if(this.fileExist()){
                const content = await fs.promises.readFile(this.filePath,"utf8");
                const contentCarts = JSON.parse(content);
                return contentCarts;
            }else{
                throw new Error ("No es posible cargar la informacion");
            }    
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }
    async createCarts(){
        try {
            
            if(this.fileExist()){
                const content = await fs.promises.readFile(this.filePath,"utf8");
                const contentCarts = JSON.parse(content);
                let newId
                if(contentCarts.length ==0){
                    newId=0
                }else{
                    newId = contentCarts[contentCarts.length-1].id +1
                }
                
                const newCart ={
                    id:Number(newId),
                    products:[]
                }
                contentCarts.push(newCart);
                await fs.promises.writeFile(this.filePath,JSON.stringify(contentCarts,null,'\t'));
                return newCart
            }else{
                throw new Error ("No es posible agregar al carrito");
            }    
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }
    async getCartById(id){
        try {
            if(this.fileExist()){
                const content = await fs.promises.readFile(this.filePath,"utf8");
                const contentCarts = JSON.parse(content);
                const cartId = contentCarts.find(e=> e.id=== id);
                if(!cartId){
                    throw new Error ("El carrito no existe");
                }else{
                    return cartId
                }
                
                // return cartId
            }else{
                throw new Error ("No se pudo cargar el carrito");
            }    
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }
    async updateCart(cid,pid){
        try {
            if(this.fileExist()){
                const content = await fs.promises.readFile(this.filePath,"utf8");
                const contentJson = JSON.parse(content);
                const cartIndex= contentJson.findIndex(e=>e.id === cid);
                if(cartIndex === -1){
                    throw new Error ("Carrito no encontrado")
                    // console.log ("Carrito no encontrado")
                }else {
                    const productIndex = contentJson[cartIndex].products.findIndex(e => e.id === pid);
                    if(productIndex === -1){
                        contentJson[cartIndex].products.push({
                            id:pid,
                            quantity:1
                        });
                    }else{
                        contentJson[cartIndex].products[productIndex].quantity ++;
                    }
                };
                await fs.promises.writeFile(this.filePath,JSON.stringify(contentJson,null,"\t"));
            }
        }catch (error) {
            console.log(error.message);
            throw error;
        }

    }
}


export {CartManager};