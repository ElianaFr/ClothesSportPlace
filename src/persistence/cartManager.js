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
                throw new Error ("No es posible leer el archivo");
            }    
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }
    async createCarts(){
        try {
            // const {id, quantity} = prodCart;
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
                throw new Error ("No es posible leer el archivo");
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
                return cartId
            }else{
                throw new Error ("No es posible leer el archivo");
            }    
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }
    async updateCart(){
        try {
            if(this.fileExist(id,products)){
                const content = await fs.promises.readFile(this.filePath,"utf8");
                const contentJson = JSON.parse(content);
                const cartIndex= contentJson.findIndex(e=>e.id === id);
                if(prodIndex === -1){
                    console.log ("Carrito no encontrado")
                }else {
                    contentJson[cartIndex]={ ...contentJson[cartIndex], ...products};
                    
                };
                // contentJson[prodIndex]={...contentJson[prodIndex],...product}
                await fs.promises.writeFile(this.filePath,JSON.stringify(contentJson,null,"\t"));
                



            } 
        }catch (error) {
            console.log(error.message);
            throw error;
        }

    }
}


export {CartManager};