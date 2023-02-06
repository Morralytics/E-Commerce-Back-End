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

router.put('/:id', async (req, res) => {
  try {
    const updateTagData = await Tag.update(req.body, {
      where: {
        tag_id: req.params.id,
      },
    })
    res.status(200).json(updateTagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedTagData = await Tag.destroy({
      where: {
        tag_id: req.params.id,
      },
    });
    res.status(200).json(deletedTagData)
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
