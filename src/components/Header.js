import cartIcon from "../assets/icon-cart.svg";
import menuIcon from "../assets/icon-menu.svg";
import imageAvatar from "../assets/image-avatar.png"
import React, { useState } from "react";
import deletIcon from "../assets/icon-delete.svg";
import cartImage from "../assets/image-product-1-thumbnail.jpg";
import thumbnail1 from "../assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/image-product-4-thumbnail.jpg";

const Header = ({ cart, removeFromCart, item })=>{
    const [isCartVisible, setIsCartVisible] = useState(false);
    
    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
      };
      
      
return(
    <>
    <div className="header">
        <div className="logonav">
    <div className="logo">
        <h2> sneakers </h2>
        </div>
        
        <nav>
        <div className="navbar">
            <li><a href="#">Collections </a> </li>
            <li><a href="#">Man </a></li>
            <li><a href="#">Women </a></li>  
            <li><a href="#">About </a></li>
            <li><a href="#">Contact </a></li>
            </div>
        </nav>
        </div>
        <div className="icon">
        <button onClick={toggleCartVisibility}>
        {isCartVisible}
            <img src={cartIcon} alt="icon-cart.svg"/>
            
        </button>
        <button>
            <img src={imageAvatar} alt="Menu"/>
        </button>
        </div>
        </div>
        {isCartVisible && (
            <div className="cart">
              <h3>  Cart </h3>
             
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <ul>
                  <div className="cartItem">
                  <div className="cartImage">
                  <img src={cartImage} alt="image"/>
                  </div>
                  {cart.map((item, index) => (
                    <div key={index}>
                      {item.name} <br></br>
                       ${item.price} x {item.quantity} = ${item.price * item.quantity}
                      <button className="delete-item"
                      onClick={() => removeFromCart(item.id)}
                      >
                        <img src={deletIcon} alt="Remove"/>
                      </button>
                    </div>
                  ))}
                  </div>
                </ul>
              )}
              <button class="checkout-btn"><b>Checkout</b></button>
            </div>
        )}
    </>
)
} 
export default Header;