import {Router} from 'express';

const router: Router = Router();

router.get('/login', (req, res) =>{
    res.send('Hello world')
});

export default router;