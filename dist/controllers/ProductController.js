"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.getProducts = void 0;
const Product_1 = __importDefault(require("../models/Product"));
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const productos = yield Product_1.default.find().populate('user', 'name _id');
        return res.json(productos);
    });
}
exports.getProducts = getProducts;
function getProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const producto = yield Product_1.default.findById(req.params.id).populate('user', 'name _id');
        return res.json(producto);
    });
}
exports.getProduct = getProduct;
function createProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, description, cost_price, sale_price, user } = req.body;
        const newProducto = new Product_1.default({
            title,
            description,
            imgURL: req.file.path,
            cost_price,
            sale_price,
            user
        });
        yield newProducto.save();
        return res.json({
            message: 'Producto registrado',
            newProducto
        });
    });
}
exports.createProduct = createProduct;
function updateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const producto = yield Product_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(producto);
    });
}
exports.updateProduct = updateProduct;
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Product_1.default.findByIdAndDelete(req.params.id);
        return res.json({ message: 'El producto ha sido eliminado' });
    });
}
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=ProductController.js.map