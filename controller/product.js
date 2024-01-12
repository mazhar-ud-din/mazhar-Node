const model = require('../modal/product')
const Product = model.Product;

exports.CreateData = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({ success: true, message: 'Product created successfully', data: product });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ success: true, message: 'Products retrieved successfully', data: products });
    } catch (error) {
        console.error('Error retrieving products:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};

exports.GetData = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found', data: null });
        }
        res.status(200).json({ success: true, message: 'Product retrieved successfully', data: product });
    } catch (error) {
        console.error('Error retrieving product:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};

exports.PutData = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProduct = await Product.findOneAndReplace({ _id: id }, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found', data: null });
        }
        res.status(200).json({ success: true, message: 'Product updated successfully', data: updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};

exports.PatchData =async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProduct = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found', data: null });
        }
        res.status(200).json({ success: true, message: 'Product updated successfully', data: updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
}
exports.DeleteData =async (req, res) => {
   try {
        const id = req.params.id;
        const updatedProduct = await Product.findOneAndDelete({ _id: id },{ new: true });
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found', data: null });
        }
        res.status(200).json({ success: true, message: 'Product updated successfully', data: updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
}




// exports.getAllProducts = (req, res) => {
//     console.log(Product)
//     res.json(Product);
// };


// exports.GetData = (req, res) => {
//     const ids = +req.params.id;
//     const product = DataJson.products.find(p => p.id == ids);
//     if (product) {
//         res.json(product);
//     } else {
//         res.status(404).json({ error: 'Product not found' });
//     }
// }

// exports.PutData = (req, res) => {
//     const productId = +req.params.id;
//     const productIndex = DataJson.products.findIndex(p => p.id === productId);
//     if (productIndex !== -1) {
//         DataJson.products[productIndex] = { ...req.body, id: productId };
//         res.status(200).json({ Msg: 'Successfully Updated' });
//     } else {
//         res.status(404).json({ error: 'Product not found' });
//     }
// }

// exports.PatchData = (req, res) => {
//     const productId = +req.params.id;
//     const productIndex = DataJson.products.findIndex(p => p.id === productId);
//     if (productIndex !== -1) {
//         DataJson.products[productIndex] = { ...DataJson.products[productIndex], ...req.body, id: productId };
//         res.status(200).json({ Msg: 'Successfully Updated' });
//     } else {
//         res.status(404).json({ error: 'Product not found' });
//     }
// }

// exports.DeleteData = (req, res) => {
//     const productId = +req.params.id;
//     const productIndex = DataJson.products.findIndex(p => p.id === productId);
//     if (productIndex !== -1) {
//         DataJson.products.splice(productIndex, 1);
//         res.status(200).json({ Msg: 'Successfully Updated' });
//     } else {
//         res.status(404).json({ error: 'Product not found' });
//     }
// }