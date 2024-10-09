import React, {useState} from "react";
import './App.css';
import Header from './components/Header.js';
import './components/Header.css';
import Product from './components/Product.js';
import './components/Product.css';

function App() {
  const [cart, setcart] = useState([]);
      const removeFromCart = (id) => {
        setcart(cart.filter((item) => item.id !== id));
      };
    

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) =>item.name === product.name );
    if (existingProductIndex >= 0) {
      const updatecart = cart.map((item, index) => {
        if (index === existingProductIndex) {
          return {...item, quantity: item.quantity + product.quantity};
        }
        return item;
      });
      setcart(updatecart);
    } else {
      setcart([...cart,product]);
    }
  };
  
  return (
    <>
    <div> 
      <Header cart={cart} removeFromCart={removeFromCart}/>
    </div>
    <div>
      <Product setcart={setcart} addToCart={addToCart}/>
    </div>
    </>
  );
}

export default App;
