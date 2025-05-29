const http = require('http');
const fs = require('fs');
const path = require('path');



// This is a function to read a file (html) and send it as text to the front end on request
function serveStaticFile(res, filename) {
    fs.readFile(path.join(__dirname, 'public', filename), (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}



const server = http.createServer((req, res) => {    
    // root url serve the product form
    if (req.url == '/') {
        serveStaticFile(res, 'product-form.html');
    } 
    // product-view route serve product-display.html page
    else if (req.url == '/product-view') {
        serveStaticFile(res, 'product-display.html');
    }

    
    // products get request. It will read all contents of json file and send it to the client 
    else if (req.method == 'GET' && req.url == '/products')  {
        fs.readFile('products.json', (err, data) => {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(data);
        })
    }

    // add new entry
    else if (req.method == 'POST' && req.url == '/add-product') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const newProduct = JSON.parse(body);

            fs.readFile('products.json', (err, data) => {
                const products = JSON.parse(data);
                products.push(newProduct);

                fs.writeFile('products.json', JSON.stringify(products, null, 2), err => {
                    if (err) {
                        return send500(res);
                    }
                    res.end(JSON.stringify({ message: 'Product added successfully' }));
                });
            
            });
        })
    }   

    // delete
    else if (req.method == 'DELETE' && req.url.startsWith('/products/')) {
        const deleteId = req.url.split('/')[2];
        console.log(req.url);
        
        fs.readFile('products.json', (err, data) => {
            const products = JSON.parse(data);
            const newProducts = products.filter(p => p.id != deleteId);

            fs.writeFile('products.json', JSON.stringify(newProducts, null, 2), err => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Product deleted' }));
            })
        });
    }

    else if (req.url.startsWith('/edit-product/')) {
        const editId = req.url.split('/')[2];

        fs.readFile('products.json', (err,data) => {
            const products = JSON.parse(data);

            const eidtProduct = products.find(p => p.id == editId);
            
        })
    }
});



server.listen(3000, () => {
    console.log("server started....");
    
});