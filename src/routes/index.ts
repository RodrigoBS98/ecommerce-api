import {Router} from 'express'

import multer from '../libs/multer'

import {createProduct, deleteProduct, getProduct, getProducts, updateProduct} from '../controllers/ProductController'

const router = Router()


router.route('/product')
                .get(createProduct)
                .post(multer.single('image'),createProduct)
router.route('/product')
                .get(createProduct)
                .post(multer.single('image'),createProduct)


export default router
