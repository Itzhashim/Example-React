import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Sample grocery items
const itemsData = [
  { id: 1, name: 'Apples' },
  { id: 2, name: 'Bananas' },
  { id: 3, name: 'Carrots' },
  { id: 4, name: 'Bread' },
  { id: 5, name: 'Milk' },
];

// Grocery List Page
function GroceryList({ items, addToCart }) {
  const [search, setSearch] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>🛍️ Grocery List</h2>
      <input
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredItems.map(item => (
          <li key={item.id} style={{ marginTop: '10px' }}>
            {item.name}
            <button onClick={() => addToCart(item)} style={{ marginLeft: '10px' }}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Grocery Cart Page
function GroceryCart({ cartItems }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>🧺 Grocery Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Main App
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Link to="/" style={{ margin: '0 15px' }}>Grocery List</Link>
          <Link to="/cart" style={{ margin: '0 15px' }}>Grocery Cart ({cart.length})</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<GroceryList items={itemsData} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<GroceryCart cartItems={cart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
