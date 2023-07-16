import Cliente from "../models/Clientes.js";

const obtenerCliente = async (req,res)=>{
    const clientes = await Cliente.find();
    res.json(clientes);
}

const obtenerClienteId = async(req,res)=>{
    try {
        const cliente = await Cliente.findOne({_id: req.params.id});
        res.send(cliente);    
    } catch (error) {
        res.status(404);
        res.send({error: "Cliente no existe"});
    }
    
}

const agregarCliente = async (req,res) =>{

    const cliente = new Cliente(req.body);

    try {
        const nuevoCliente = await cliente.save();
        res.json(nuevoCliente);
    } catch (error) {
        res.status(404);
        res.send({error: "Cliente no pudo ser creado"});
    }
}

const borrarCliente = async (req,res) =>{

    try {
        await Cliente.deleteOne({_id: req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Cliente no pudo ser Eliminado/No existe"});
    }
}

const actualizarCliente = async (req,res) =>{

    try {
        const cliente = await Cliente.findOne({_id: req.params.id});
        
        if(req.body.Compania){
            cliente.Compania = req.body.Compania;
        }

        if(req.body.Contacto){
            cliente.Contacto = req.body.Contacto;
        }

        if(req.body.Titulo){
            cliente.Titulo = req.body.Titulo;
        }

        if(req.body.Direccion){
            cliente.Direccion = req.body.Direccion;
        }

        if(req.body.Ciudad){
            cliente.Ciudad = req.body.Ciudad;
        }

        if(req.body.CodigoPostal){
            cliente.CodigoPostal = req.body.CodigoPostal;
        }

        if(req.body.Pais){
            cliente.Pais = req.body.Pais;
        }

        if(req.body.Telefono){
            cliente.Telefono = req.body.Telefono;
        }

        if(req.body.Fax){
            cliente.Fax = req.body.Fax;
        }

        await cliente.save();
        res.send(cliente);

    } catch (error) {
        res.status(404);
        res.send({error: "Cliente no pudo ser Actualizado"});
    }
}

export { obtenerCliente, obtenerClienteId, agregarCliente, borrarCliente, actualizarCliente };