const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'product-form.html'));
});

app.get('/product-view', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'product-display.html'))
});

app.get('/products', async (req,res) => {
    let products = [];
    const productsFile = await fs.readFile(__dirname + '/products.json', 'utf8');
    if (productsFile != '') {
        products = JSON.parse(productsFile);
    }
    res.json(products)
});

app.post('/add-product', async (req, res) => {
    const newProduct = req.body;
    console.log("req.body: " + req.body);
    newProduct.id = makeid(5);
    let products = [];

    try {
        const productsFile = await fs.readFile(__dirname + '/products.json', 'utf8');
        if (productsFile != '') {
            products = JSON.parse(productsFile);
        }
        products.push(newProduct);
        await fs.writeFile(__dirname + '/products.json', JSON.stringify(products, null, 2));
        console.log("Added a new product" + newProduct.name);
        res.json({ success: true, message: 'Saved successfully' });
    } catch (err) {
        console.log("error in reading file: " + err);
        res.status(500).send('error reading/writing to file');
    }
})

app.listen(PORT, () => {
    console.log("Starting express Server on port 3000");
    
});




// Randomly generate id
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}