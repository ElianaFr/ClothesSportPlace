// socket del lado del cliente
const socketClient = io();
// elementos 
const productList = document.getElementById("productList")
const createProdForm = document.getElementById("createProdForm")
const deleteId = document.getElementById("")
// recibimos la info del formulario al socket servidor
// capturamos el evento
createProdForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const formData = new FormData(createProdForm);
    // console.log(formData.get("title"));
    // se crea un objeto json a partir de los datos del form
    const jsonDataForm = {};
    // por cada uno de los elementos del form
    // se van a ir agregando ese elemento como propiedad del obj json
    // for itera cada uno de los elementos del arreglo para crear un objeto
    // key es el atributo name de ese form
    for(const [key,value] of formData.entries()){
        jsonDataForm[key]= value;
    };
    jsonDataForm.price = parseInt(jsonDataForm.price);
    jsonDataForm.code = parseInt(jsonDataForm.code);
    jsonDataForm.stock = parseInt(jsonDataForm.stock);
    console.log(jsonDataForm);
    // enviamos el objeto con la info del prod al servidor
    socketClient.emit("addProduct",jsonDataForm);
    createProdForm.reset();
});

// Cargamos los productos que estan en la base de datos
socketClient.on("productsArray", (productData)=>{
    console.log(productData)
    let productsElement = "";
    productData.forEach(product => {
        productsElement +=
        `   
        <div class="cardForm">
            <p> Producto: ${product.title}</p> 
            <p> Detalle: ${product.description}</p>
            <p> Codigo: ${product.code}</p>
            <p> Stock: ${product.stock}</p>
            <p> Precio: $ ${product.price}</p>
            <button class="btnProd" onclick="deleteProd(${product.id})">BORRAR</button>
            
        </div>
        
        `
    });
    productList.innerHTML = productsElement;

});


//eliminar productos
const deleteProd = (pid) =>{
    console.log(pid)
    socketClient.emit("deleteProd",pid);
}
