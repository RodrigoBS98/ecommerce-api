import { Schema, model, Document } from 'mongoose'

const ProductoSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String
    },
    imgURL: {
        type: String, 
        required: true, 
        unique: true
    },
    cost_price: {
        type: Number, 
        required: true
    },
    sale_price: {
        type:Number, 
        required: true
    },
    create_date: {
        type: Date, 
        default: Date.now
    },
    update_date: {
        type: Date, 
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

interface IProducto extends Document{
    title: {
        type: string, 
        required: true
    },
    description: {
        type: string
    },
    imgURL: {
        type: string, 
        required: true, 
        unique: true
    },
    cost_price: {
        type: number, 
        required: true
    },
    sale_price: {
        type: number, 
        required: true
    },
    create_date: {
        type: Date, 
    },
    update_date: {
        type: Date, 
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}

export default model('Producto', ProductoSchema);