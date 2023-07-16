import Empleado from "../models/Empleados.js";

const obtenerEmpleado = async (req,res)=>{
    const empleados = await Empleado.find();
    res.json(empleados);
}

const obtenerEmpleadoId = async(req,res)=>{
    try {
        const empleado = await Empleado.findOne({_id: req.params.id});
        res.send(empleado);    
    } catch (error) {
        res.status(404);
        res.send({error: "Empleado no existe"});
    }
    
}

const agregarEmpleado = async (req,res) =>{

    const empleado = new Empleado(req.body);

    try {
        const nuevoEmpleado = await empleado.save();
        res.json(nuevoEmpleado);
    } catch (error) {
        res.status(404);
        res.send({error: "Empleado no pudo ser creado"});
    }
}

const borrarEmpleado = async (req,res) =>{

    try {
        await Empleado.deleteOne({_id: req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Empleado no pudo ser Eliminada/No existe"});
    }
}

const actualizarEmpleado = async (req,res) =>{

    try {
        const empleado = await Empleado.findOne({_id: req.params.id});
        
        if(req.body.Nombre){
            empleado.Nombre = req.body.Nombre;
        }

        if(req.body.Apellido){
            empleado.Apellido = req.body.Apellido;
        }

        if(req.body.Correo){
            empleado.Correo = req.body.Correo;
        }

        if(req.body.Telefono){
            empleado.Telefono = req.body.Telefono;
        }

        if(req.body.Direccion){
            empleado.Direccion = req.body.Direccion;
        }

        if(req.body.Pais){
            empleado.Pais = req.body.Pais;
        }

        await empleado.save();
        res.send(empleado);

    } catch (error) {
        res.status(404);
        res.send({error: "Empleado no pudo ser Actualizado"});
    }
}

export {obtenerEmpleado, obtenerEmpleadoId, agregarEmpleado, borrarEmpleado, actualizarEmpleado};