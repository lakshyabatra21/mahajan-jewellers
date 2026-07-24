const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.static(__dirname));

const PRODUCTS_FILE = path.join(__dirname, 'data', 'products.json');
const ORDERS_FILE = path.join(__dirname, 'data', 'orders.json');
const USERS_FILE = path.join(__dirname, 'data', 'users.json');

// Helper to read JSON
function readJSON(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (err) {
    return [];
  }
}

// Helper to write JSON
function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
}

// API - Get Products
app.get('/api/products', (req, res) => {
  res.json(readJSON(PRODUCTS_FILE));
});

// API - Create Product
app.post('/api/products', (req, res) => {
  const products = readJSON(PRODUCTS_FILE);
  const newProduct = req.body;
  
  // Assign max ID
  const maxId = products.reduce((acc, p) => p.id > acc ? p.id : acc, 0);
  newProduct.id = maxId + 1;
  
  products.unshift(newProduct);
  writeJSON(PRODUCTS_FILE, products);
  res.status(201).json(newProduct);
});

// API - Update Product
app.put('/api/products/:id', (req, res) => {
  const products = readJSON(PRODUCTS_FILE);
  const id = parseInt(req.params.id);
  const idx = products.findIndex(p => p.id === id);
  
  if (idx !== -1) {
    products[idx] = { ...products[idx], ...req.body, id };
    writeJSON(PRODUCTS_FILE, products);
    res.json(products[idx]);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// API - Delete Product
app.delete('/api/products/:id', (req, res) => {
  let products = readJSON(PRODUCTS_FILE);
  const id = parseInt(req.params.id);
  
  if (products.some(p => p.id === id)) {
    products = products.filter(p => p.id !== id);
    writeJSON(PRODUCTS_FILE, products);
    res.json({ success: true });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// API - Get Orders
app.get('/api/orders', (req, res) => {
  res.json(readJSON(ORDERS_FILE));
});

// API - Create Order
app.post('/api/orders', (req, res) => {
  const orders = readJSON(ORDERS_FILE);
  const newOrder = req.body;
  
  orders.unshift(newOrder);
  writeJSON(ORDERS_FILE, orders);
  res.status(201).json(newOrder);
});

// API - Update Order Status
app.put('/api/orders/:id', (req, res) => {
  const orders = readJSON(ORDERS_FILE);
  const orderId = req.params.id;
  const idx = orders.findIndex(o => o.id === orderId);
  
  if (idx !== -1) {
    orders[idx].status = req.body.status;
    writeJSON(ORDERS_FILE, orders);
    res.json(orders[idx]);
  } else {
    res.status(404).json({ error: "Order not found" });
  }
});

// API - Delete Orders (Clear Order History)
app.delete('/api/orders', (req, res) => {
  writeJSON(ORDERS_FILE, []);
  res.json({ success: true });
});

// API - Login User
app.post('/api/auth/login', (req, res) => {
  const users = readJSON(USERS_FILE);
  const { identifier, password } = req.body;
  
  const user = users.find(u => (u.email === identifier || u.phone === identifier) && u.password === password);
  
  if (user) {
    res.json({
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role
    });
  } else {
    res.status(401).json({ error: "Invalid email/phone or password" });
  }
});

// API - Signup User
app.post('/api/auth/signup', (req, res) => {
  const users = readJSON(USERS_FILE);
  const newUser = req.body;
  
  if (users.some(u => u.email === newUser.email)) {
    return res.status(400).json({ error: "Email already registered" });
  }
  
  users.push(newUser);
  writeJSON(USERS_FILE, users);
  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
    phone: newUser.phone,
    role: newUser.role
  });
});

app.listen(PORT, () => {
  console.log(`[Server] Full-Stack server is live on http://localhost:${PORT}`);
});
