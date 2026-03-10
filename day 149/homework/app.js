const http = require("http");

let products = [
{
    id: 0,
    name: "apple",
    price: 1.00
},
{
    id: 1,
    name: "banana",
    price: 2.00
},
{
    id: 2,
    name: "orange",
    price: 1.50
},
{
    id: 3,
    name: "pineapple",
    price: 2.50
},
{
    id: 4,
    name: "dragon fruit",
    price: 10.00
}
]

function getRequestBody(req) {
    return new Promise((resolve, reject) => {
        let data = "";

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            resolve(data);
        });

        req.on('error', err => {
            reject(err);
        });

    });
}

const server = http.createServer(async (req, res) => {
    const {method} = req;

    switch (method) {
        case "GET":
            res.statusCode = 200;
            return res.end(JSON.stringify(products));

        case "POST":
            const body = await getRequestBody(req);
            const newProduct = JSON.parse(body);

            if (!newProduct.id || !newProduct.name || !newProduct.price) {
                res.statusCode = 406;
                return res.end("Not enough data to add product")
            }

            if (products.map(prod => prod.id).includes(newProduct.id)) {
                res.statusCode = 409;
                return res.end("Product with same ID already exists!");
            }

            products.push(newProduct);

            res.statusCode = 200;
            return res.end(JSON.stringify(products));

                    case "PUT":
            const body1 = await getRequestBody(req);
            const newProduct1 = JSON.parse(body1);

            if (!products.map(prod => prod.id).includes(newProduct1.id)) {
                res.statusCode = 404;
                return res.end(`Product with Id: ${newProduct1.id} not found!`)
            }

            const foundProduct = products.filter(prod => prod.id === newProduct1.id)[0];
            if (foundProduct.name === newProduct1.name && foundProduct.price === newProduct1.price) {
                res.statusCode=400;
                return res.end("There is nothing to be changed, no new infomation!");
            }

            foundProduct.name = newProduct1.name;
            foundProduct.price = newProduct1.price;

            res.statusCode = 200;
            return res.end(JSON.stringify(foundProduct));

        case "DELETE":
            const body2 = await getRequestBody(req);
            const newProduct2 = JSON.parse(body2);

            if (!newProduct2.id) {
                res.statusCode = 406;
                return res.end("Not enough data to delete product")
            }

            if (products.filter(prod => prod.id === newProduct2.id).length === 0) {
                res.statusCode = 404;
                return res.end("Product not found!");
            }

            products = products.filter(prod => prod.id !== newProduct2.id);

            res.statusCode = 204;
            return res.end();

        default:
            res.statusCode = 400;
            return res.end("Wrong method of request");
    }
});

server.listen(3000, () => console.log("Server is running on port 3000"));