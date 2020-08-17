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
const express_1 = require("express");
const Usuario_1 = __importDefault(require("../models/Usuario"));
class UsuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    obtenerUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield Usuario_1.default.find();
            res.json(usuarios);
        });
    }
    obtenerUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield Usuario_1.default.findOne({ usuario: req.params.usuario });
            res.json(usuario);
        });
    }
    crearUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, correo, contrasenia, usuario, } = req.body;
            const newUsuario = new Usuario_1.default({
                nombre,
                correo,
                contrasenia,
                usuario,
            });
            yield newUsuario.save();
            res.json(newUsuario);
        });
    }
    actualizarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield Usuario_1.default.findOneAndUpdate({ usuario: req.params.usuario }, req.body, { new: true });
            res.json(usuario);
        });
    }
    borrarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Usuario_1.default.findOneAndDelete({ usuario: req.params.usuario });
            res.json({ message: 'El usuario ha sido eliminado' });
        });
    }
    routes() {
        this.router.get('/', this.obtenerUsuarios);
        this.router.get('/:usuario', this.obtenerUsuario);
        this.router.post('/', this.crearUsuario);
        this.router.put('/:usuario', this.actualizarUsuario);
        this.router.delete('/:usuario', this.borrarUsuario);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
