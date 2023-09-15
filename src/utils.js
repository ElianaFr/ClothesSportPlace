import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

export const __dirname=path.dirname(fileURLToPath(import.meta.url));

// diskStorage almacenamiento en memoria del server
const storage = multer.diskStorage({
    // donde se guardan los archivos
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,"../public/images"))
    },
    // con que nombre vamos a guardar el archivo
    filename:function(req,file,cb){
        cb(null,`${file.originalname}`)
    }
});
export const uploader = multer({storage});
