const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const productsPath = path.join(__dirname, 'data', 'products.json');

// API untuk mendapatkan produk
app.get('/api/products', (req, res) => {
  fs.readFile(productsPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading products');
    res.json(JSON.parse(data));
  });
});

// Simulasi penyimpanan pesanan (dalam memori)
let orders = [];
app.post('/api/orders', (req, res) => {
  const order = req.body;
  orders.push(order);
  res.json({ success: true, orderId: orders.length });
});

app.listen(3000, () => console.log('Server running on port 3000'));