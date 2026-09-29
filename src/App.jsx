import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  // Controls whether the landing page or the product list is displayed
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHome = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {/* Landing page */}
      <div
        className={`landing-page ${showProductList ? 'fade-out' : ''}`}
        style={{ display: showProductList ? 'none' : 'block' }}
      >
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>

            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>

      {/* Product listing page */}
      <div
        className={`product-list-container ${showProductList ? 'visible' : ''}`}
        style={{ display: showProductList ? 'block' : 'none' }}
      >
        <ProductList onHomeClick={handleHome} />
      </div>
    </div>
  );
}

export default App;
