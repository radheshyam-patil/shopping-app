// File: app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
let products = [
 { id: 1, name: "Laptop", price: 75000 },
 { id: 2, name: "Headphones", price: 2500 },
 { id: 3, name: "Mouse", price: 800 }
];
app.get('/', (req, res) => res.send("🛒 Welcome to Mini Shopping App!"));
app.get('/products', (req, res) => res.json(products));
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
