import mongoose from "mongoose";

const productoSchema = mongoose.Schema(
    {
        NombreProducto: {
            type: String,
            required: true,
            trim: true
        },
        Precio: {
            type: String,
            required: true,
            trim: true
        },
        Stock: {
            type: String,
            required: true,
            trim: true
        },
        CategoriaProducto: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true,
    }
);

const Producto = mongoose.model("Producto",productoSchema);

export default Producto;