"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../libs/multer"));
const ProductController_1 = require("../controllers/ProductController");
const router = express_1.Router();
router.route('/')
    .get(ProductController_1.createProduct)
    .post(multer_1.default.single('image'), ProductController_1.createProduct);
router.route('/')
    .get(ProductController_1.createProduct)
    .post(multer_1.default.single('image'), ProductController_1.createProduct);
exports.default = router;
//# sourceMappingURL=index.js.map