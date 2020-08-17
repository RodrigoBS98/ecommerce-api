"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UsuarioSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {},
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
exports.default = mongoose_1.model('Usuario', UsuarioSchema);
//# sourceMappingURL=User.js.map