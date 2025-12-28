import React from 'react';

export const AnimatedBagLoginDesign: React.FC = () => {
  return (
    <div 
      style={{
        margin: 0,
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f0f0f0'
      }}
    >
      <iframe
        src="/designs/Animated-Bag-Login/index.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          background: '#f0f0f0'
        }}
        title="Animated Bag Login"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
      />
    </div>
  );
};

