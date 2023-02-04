const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{
        model: Product,
      }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  };
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{
        model: Product,
      }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  };
});

router.post('/', async (req, res) => {
  try {
    const newCategoryData = await Category.create(req.body);
    res.status(200).json(newCategoryData);
  } catch (err) {
    res.status(200).json(err);
  };
});

router.put('/:id', async (req, res) => {
  try {
    const updateCategoryData = await Category.update(req.body, {
      where: {
        category_id: req.params.id,
      },
    })
    res.status(200).json(updateCategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedCategoryData = await Category.destroy({
      where: {
        category_id: req.params.id,
      },
    });
    res.status(200).json(deletedCategoryData)
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
