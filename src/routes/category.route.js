import {Router} from 'express'
import {authRequired} from '../middlewares/validateToken.js'
import {getCategories, getCategory, createCategory, updateCategory, deleteCategory} from '../controllers/categories.controller.js'

const router = Router();

router.get("/categories", authRequired, getCategories);
router.get("/categories/:id", authRequired, getCategory);
router.post("/categories", authRequired, createCategory);
router.put("/categories/:id", authRequired, updateCategory);
router.delete("/categories/:id", authRequired, deleteCategory);

export default router;