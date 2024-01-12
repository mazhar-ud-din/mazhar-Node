const fs = require(`fs`)

const DataJson = JSON.parse(fs.readFileSync(`data.json`, 'utf-8'))
const user = DataJson.users;

exports.CreateData = (req, res) => {
    console.log(req.body);
    user.push(req.body);
    res.status(201).json(req.body);
  };
  
  exports.getAllProducts = (req, res) => {
    res.json(user);
  };

exports.GetData = (req, res) => {
    const ids = +req.params.id;
    const product = user.find(p => p.id == ids);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
}

exports.PutData = (req, res) => {
    const productId = +req.params.id;
    const productIndex = user.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        user[productIndex] = { ...req.body, id: productId };
        res.status(200).json({ Msg: 'Successfully Updated' });
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
}

exports.PatchData = (req, res) => {
    const productId = +req.params.id;
    const productIndex = user.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        user[productIndex] = { ...user[productIndex], ...req.body, id: productId };
        res.status(200).json({ Msg: 'Successfully Updated' });
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
}

exports.DeleteData = (req, res) => {
    const productId = +req.params.id;
    const productIndex = user.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        user.splice(productIndex, 1);
        res.status(200).json({ Msg: 'Successfully Updated' });
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
}