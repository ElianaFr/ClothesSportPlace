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
    async updateCart(id,products){
        try {
            if(this.fileExist()){
                const content = await fs.promises.readFile(this.filePath,"utf8");
                const contentJson = JSON.parse(content);
                const cartIndex= contentJson.findIndex(e=>e.id === id);
                if(cartIndex === -1){
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