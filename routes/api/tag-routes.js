const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  };
});

  router.get('/:id', async (req, res) => {
    try {
      const tagData = await Tag.findByPk(req.params.id);
      res.status(200).json(tagData);
    } catch (err) {
      res.status(400).json(err);
    };
  });

  router.post('/', async (req, res) => {
    try {
      const newTagData = await Tag.create(req.body);
      res.status(200).json(newTagData);
    } catch (err) {
      res.status(200).json(err);
    };
  });

  router.put('/:id', (req, res) => {
    // update a tag's name by its `id` value
  });

  router.delete('/:id', (req, res) => {
    // delete on tag by its `id` value
  });

  module.exports = router;
