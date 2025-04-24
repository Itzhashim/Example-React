import React, {useState } from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

const groceryItems = [
  { id: 1, name: "Apple", price: 2.5 },
  { id: 2, name: "Banana", price: 1.2 },
  { id: 3, name: "Carrot", price: 1.0 },
  { id: 4, name: "Milk", price: 1.5 },
  { id: 5, name: "Bread", price: 2.0 },
];

function App(){
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const deleteItem = (indexToRemove) => {
    setCart(cart.filter((_,index) => index !== indexToRemove))
  };

  return (
    <Router>
      <div>
        <h1>Grocery Store</h1>
        <nav>
          <Link to = "/" >Home</Link>
          <Link to = "/cart">Cart</Link>
        </nav>

        <Routes>
          <Route path = "/" element = {<GroceryList groceryItems = {groceryItems} addToCart = {addToCart} />}/>

          <Route path = "/cart" element = {<Cart cart = {cart} deleteItem = {deleteItem} />}/>
        </Routes>
      </div>
    </Router>
  );
}

function GroceryList({groceryItems,addToCart}) {
  const [search, setSearch] = useState("");

  const filteredItems = groceryItems.filter((item) => 
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Grocery List</h2>

      <input
        type = "text"
        value = {search}
        onChange = {(e) => setSearch(e.target.value)}
        placeholder = "search groceries..."
      />
      
      <ul>
        {filteredItems.map((item) => (
          <li key = {item.id}>
            <span>{item.name} - {item.price}</span>
            <button onClick= {() => addToCart(item)}>Add To Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Cart({cart,deleteItem}){
  const totalCost = cart.reduce((acc, item) => acc + item.price, 0);
  const itemCount = cart.length;

  return(
    <div>
      <h2>Your Cart</h2>

      <ul>
        {cart.map((item, index) => (
          <li key = {index}>
            <span>{item.name} - {item.price}</span>
            <button onClick={() => deleteItem(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <div>
        <h2>Cart Summary</h2>
        <p>Number of items: {itemCount}</p>
        <p>Total Price: {totalCost}</p>
      </div>
    </div>
  );
}
export default App;