import mongoose from "mongoose";

const empleadoSchema = mongoose.Schema(
    {
        Nombre: {
            type: String,
            required: true,
            trim: true
        },
        Apellido: {
            type: String,
            required: true,
            trim: true
        },
        Correo: {
            type: String,
            required: true,
            trim: true
        },
        Telefono: {
            type: String,
            required: true,
            trim: true
        },
        Direccion: {
            type: String,
            required: true,
            trim: true
        },
        Pais: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true,
    }
);

const Empleado = mongoose.model("Empleado",empleadoSchema);

export default Empleado;