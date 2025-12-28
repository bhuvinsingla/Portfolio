import React, { useState } from 'react';
import { getDesignPath } from '../../utils/paths';

export const AnimatedBagLoginDesign: React.FC = () => {
  const [hasError, setHasError] = useState(false);

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
      {hasError ? (
        <div style={{ textAlign: 'center', color: '#666', padding: '20px' }}>
          <p>Design is loading...</p>
          <p style={{ fontSize: '12px', marginTop: '10px' }}>If this persists, check that the file exists at /designs/Animated-Bag-Login/index.html</p>
        </div>
      ) : (
        <iframe
          src={getDesignPath('/designs/Animated-Bag-Login/index.html')}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            background: '#f0f0f0'
          }}
          title="Animated Bag Login"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
          onError={() => setHasError(true)}
          onLoad={(e) => {
            // Check if iframe loaded successfully
            try {
              const iframe = e.target as HTMLIFrameElement;
              if (iframe.contentWindow?.location.href === 'about:blank') {
                setHasError(true);
              }
            } catch (err) {
              // Cross-origin, assume it loaded
            }
          }}
        />
      )}
    </div>
  );
};

