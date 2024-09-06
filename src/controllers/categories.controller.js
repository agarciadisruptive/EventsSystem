import Category from '../models/category.model.js'

export const getCategories = async (req, res) => {
  // const categories = await Category.find();
  const categories = await Category.find({
    user: req.user.id
  }).populate('user');
  res.json(categories);
}

export const getCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).json({message: "Category not found"})
  res.json(category);
}

export const createCategory = async (req, res) => {
  const {name} = req.body;
  const newCategory = new Category({user: req.user.id, name});
  const category = newCategory.save();
  res.json(category);
}

export const updateCategory = async (req, res) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true});
  if (!category) return res.status(404).json({message: "Category not found"})
  res.json(category);
}

export const deleteCategory = async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) return res.status(404).json({message: "Category not found"})
  res.sendStatus(204);
}