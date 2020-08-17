"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const app = express_1.default();
// configuracion
app.set('port', process.env.PORT || 3000);
app.use(express_1.default.json());
// midleware
app.use(morgan_1.default('dev'));
// routes
app.use('/api', index_1.default);
// cargar imagenes
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
//# sourceMappingURL=app.js.map