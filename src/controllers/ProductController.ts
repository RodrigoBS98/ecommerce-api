import {Request, Response} from 'express'
import Product from '../models/Product';

export async function getProducts(req: Request, res: Response): Promise<Response>{
    const productos = await Product.find().populate('user', 'name _id');
    return res.json(productos);        
}

export async function getProduct(req: Request, res: Response): Promise<Response>{
    const producto = await Product.findById(req.params.id).populate('user', 'name _id');
    return res.json(producto)
}

export async function createProduct(req: Request, res: Response): Promise<Response>{
    const {title, description, cost_price, sale_price, user} = req.body;
    const newProducto = new Product({
        title, 
        description,
        imgURL: req.file.path,
        cost_price, 
        sale_price, 
        user});
    await newProducto.save();
return res.json({
    message:'Producto registrado',
    newProducto
});
}

export async function updateProduct(req: Request, res: Response): Promise<Response>{
    const producto = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.json(producto);
}

export async function  deleteProduct(req: Request, res: Response): Promise<Response>{
    await Product.findByIdAndDelete(req.params.id);
    return res.json({message: 'El producto ha sido eliminado'})
}