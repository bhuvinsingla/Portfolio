import React, { useEffect } from 'react';

export const AppleIphoneDesign: React.FC = () => {
  useEffect(() => {
    // Import and apply the CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/designs/Apple-iphone/style.css';
    link.id = 'apple-iphone-style';
    
    // Check if already added
    if (!document.getElementById('apple-iphone-style')) {
      document.head.appendChild(link);
    }

    // Import Google Fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap';
    fontLink.rel = 'stylesheet';
    if (!document.querySelector('link[href*="Poppins"]')) {
      document.head.appendChild(fontLink);
    }

    return () => {
      const styleLink = document.getElementById('apple-iphone-style');
      if (styleLink) {
        document.head.removeChild(styleLink);
      }
    };
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      background: '#151515',
      fontFamily: '"Poppins", sans-serif'
    }}>
      <div className="card">
        <div className="circle">
          <img src="/designs/Apple-iphone/logo.png" alt="Logo" className="logo" />
        </div>
        <img src="/designs/Apple-iphone/iphone.png" alt="iPhone" className="product_img" />
        <div className="content">
          <h2>iPhone</h2>
          <p>
            Heat‑forged aluminium unibody design for exceptional pro capability.
          </p>
          <a href="#">Shop Now</a>
        </div>
      </div>
    </div>
  );
};

