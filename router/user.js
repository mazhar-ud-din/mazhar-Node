const express = require('express');
const userControllers = require('../controller/users');
const router = express.Router();

router.post('/', userControllers.CreateData)
router.get('/', userControllers.getAllProducts)
router.get('/:id', userControllers.GetData);
router.put('/:id', userControllers.PutData);
router.patch('/:id', userControllers.PatchData);
router.delete('/:id', userControllers.DeleteData);

module.exports = router;