const express = require('express');
const GetControllers = require('../controller/product');
const router = express.Router();

router.post('/', GetControllers.CreateData)
router.get('/', GetControllers.getAllProducts)
router.get('/:id', GetControllers.GetData);
router.put('/:id', GetControllers.PutData);
router.patch('/:id', GetControllers.PatchData);
router.delete('/:id', GetControllers.DeleteData);

module.exports = router;