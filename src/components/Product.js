import React,{ useState } from "react";
import product1 from "../assets/image-product-1.jpg";
import product2 from "../assets/image-product-2.jpg"; 
import product3 from "../assets/image-product-3.jpg"; 
import product4 from "../assets/image-product-4.jpg"; 
import thumbnail1 from "../assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/image-product-4-thumbnail.jpg";
import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import carticon from "../assets/icon-cart.svg";
import nextIcon from "../assets/icon-next.svg"; 
import prevIcon from "../assets/icon-previous.svg";
const Product = ({ addToCart })=>{
    const productImages = [ product1, product2, product3, product4]

    const [currentImageIndex, setCurrentImageIndex] = useState(0); 
    const currentImage = productImages[currentImageIndex];
    const handleImageChange = (index) => {
      setCurrentImageIndex(index);
    };

    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const toggleViewer = () => {
        setIsViewerOpen(!isViewerOpen);
      };

    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () => {
        setQuantity ((prevQuantity) => prevQuantity + 1);
    }  
    const decrementQuantity = () => {
        if (quantity > 1) {
        setQuantity ((prevQuantity) => prevQuantity - 1);
    }
};
    const handleAddToCart = () => {
        const product ={
            id: 1,
            name: "Fall Limited Edition sneakers",
            price: 125.0,
            quantity,
            Image: currentImage,
        };
        addToCart(product);
        alert(`Added ${quantity} item(s) to cart`);
    };
        const handleNextImage = () => {
            setCurrentImageIndex((prevIndex) =>
            prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
        );
      };
      const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
        );
      };
    

    return(
        <>
        <div className="pageView">
        <div className="mainProduct">
            <img src={currentImage} alt="product" onClick={toggleViewer} style={{ cursor: 'pointer'}} />
            
            {isViewerOpen && (
        <div className="viewer-overlay" onClick={toggleViewer}>
          <div className="viewer-content">
            <span className="close" onClick={toggleViewer}>&times;</span>
        
            <div className="viewMain">
            <img src={currentImage} alt="product" className="viewer-image" />
            <div className="navigation">
                  <img
                    src={prevIcon}
                    alt="Previous"
                    className="prev"
                    onClick={(e) => {
                        e.stopPropagation();
                        handlePrevImage();
                      }}
                  />
                  <img
                    src={nextIcon}
                    alt="Next"
                    className="next"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleNextImage();
                    }}
                  />
                </div>
                </div>
        <div className="thumbnails1">
        <img 
          src={thumbnail1} 
          alt="thumbnail1" 
          className={`thumbnail ${currentImage === product1 ? 'active' : ''}`} 
          onClick={() => handleImageChange(0)} 
        />
        <img 
          src={thumbnail2} 
          alt="thumbnail2" 
          className={`thumbnail ${currentImage === product2 ? 'active' : ''}`} 
          onClick={(e) => {
            e.stopPropagation();
            handleImageChange(1);
          }} 
        />
        <img 
          src={thumbnail3} 
          alt="thumbnail3" 
          className={`thumbnail ${currentImage === product3 ? 'active' : ''}`} 
          onClick={(e) => {
            e.stopPropagation();
            handleImageChange(2);
          }} 
        />
        <img 
          src={thumbnail4} 
          alt="thumbnail4" 
          className={`thumbnail ${currentImage === product4 ? 'active' : ''}`} 
          onClick={(e) => {
            e.stopPropagation();
            handleImageChange(3);
          }} 
        />
      </div>
        </div>
        </div>
      )}
      
            <div className="thumbnails">
        <img 
          src={thumbnail1} 
          alt="thumbnail1" 
          className={`thumbnail ${currentImage === product1 ? 'active' : ''}`} 
          onClick={() => handleImageChange(0)} 
        />
        <img 
          src={thumbnail2} 
          alt="thumbnail2" 
          className={`thumbnail ${currentImage === product2 ? 'active' : ''}`} 
          onClick={() => handleImageChange(1)} 
        />
        <img 
          src={thumbnail3} 
          alt="thumbnail3" 
          className={`thumbnail ${currentImage === product3 ? 'active' : ''}`} 
          onClick={() => handleImageChange(2)} 
        />
        <img 
          src={thumbnail4} 
          alt="thumbnail4" 
          className={`thumbnail ${currentImage === product4 ? 'active' : ''}`} 
          onClick={() => handleImageChange(3)} 
        />
      </div>
        </div>
        
        <div>
            <div className="companyName">
                <p> SNEAKER COMPANY </p>
            </div>
            <h1> Fall Limited Edition <br></br> 
                Sneakers </h1>
            
            <div className="productDetails">
            <p>
                These low-profile sneakers are your perfect casual wear companation.
            <br></br>    Featuring adurabel rubber outer sole, they'll withstand everything 
            <br></br>    the weather can offer. 
            </p>
            <div className="price">
            <div>
                <p><b> $125.00 </b></p>
                </div>
                <div>
                    <p> <b> 50% </b> </p>
                </div>
            </div>
            <div className="preprice">
            <p> $250.00 </p>
            </div>
            <br></br> 
            <br></br>
            <div className="quantityControl">
                <button onClick={decrementQuantity}>
                    <img src={minus} alt="-"/>
                </button>
                <p style={{ margin: '0 10px' }}>{quantity}</p>
                <button onClick={incrementQuantity}>
                    <img src={plus} alt="+"/>
                </button>
            </div>
           
            <div className="addcart">
                <button onClick={handleAddToCart}>
                    <img src={carticon} alt="carticon" style ={{ height: "15px", }}/>
                       <b>Add to cart</b>
                </button>
            </div>
            
            </div>

        </div>
        </div>
        </>
    )
}
export default Product;
