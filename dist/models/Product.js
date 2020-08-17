"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductoSchema = new mongoose_1.Schema({
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
        type: Number,
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
});
exports.default = mongoose_1.model('Producto', ProductoSchema);
//# sourceMappingURL=Product.js.map