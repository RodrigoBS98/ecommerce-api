import { Schema, model } from 'mongoose'

const UsuarioSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    last_name:{

    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String, 
        required: true,
    },
    user: {
        type: String, 
        required: true, 
        unique: true
    },
    create_date: {
        type: Date, 
        default: Date.now
    },
    update_date: {
        type: Date, 
        default: Date.now
    },
});
export default model('Usuario', UsuarioSchema);