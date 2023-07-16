import Producto from "../models/Productos.js";

const obtenerProducto = async (req,res)=>{
    const productos = await Producto.find();
    res.json(productos);
}


const obtenerProductoId = async(req,res)=>{
    try {
        const producto = await Producto.findOne({_id: req.params.id});
        res.send(producto);    
    } catch (error) {
        res.status(404);
        res.send({error: "Producto no existe"});
    }
    
}

const agregarProducto = async (req,res) =>{

    const producto = new Producto(req.body);

    try {
        const nuevoproducto = await producto.save();
        res.json(nuevoproducto);
    } catch (error) {
        res.status(404);
        res.send({error: "Producto no pudo ser creado"});
    }
}

const borrarProducto = async (req,res) =>{

    try {
        await Producto.deleteOne({_id: req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Producto no pudo ser Eliminado/No existe"});
    }
}

const actualizarProducto = async (req,res) =>{

    try {
        const producto = await Producto.findOne({_id: req.params.id});
        
        if(req.body.NombreProducto){
            producto.NombreProducto = req.body.NombreProducto;
        }

        if(req.body.Precio){
            producto.Precio = req.body.Precio;
        }

        if(req.body.Stock){
            producto.Stock = req.body.Stock;
        }

        if(req.body.CategoriaProducto){
            producto.CategoriaProducto = req.body.CategoriaProducto;
        }

        await producto.save();
        res.send(producto);

    } catch (error) {
        res.status(404);
        res.send({error: "Producto no pudo ser Actualizada"});
    }
}

export {obtenerProducto, obtenerProductoId, agregarProducto, borrarProducto, actualizarProducto };