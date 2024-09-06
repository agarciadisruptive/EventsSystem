import {Router} from 'express'
import {authRequired} from '../middlewares/validateToken.js'

const router = Router();

router.get('/events', authRequired, (req, res) => res.send('events'));

export default router;