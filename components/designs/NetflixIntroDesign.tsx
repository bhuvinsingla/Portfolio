import React, { useEffect } from 'react';
import { getDesignPath } from '../../utils/paths';

export const NetflixIntroDesign: React.FC = () => {
  useEffect(() => {
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = getDesignPath('/designs/Netflix-Intro/style.css');
    link.id = 'netflix-intro-style';
    if (!document.getElementById('netflix-intro-style')) {
      document.head.appendChild(link);
    }

    return () => {
      const styleLink = document.getElementById('netflix-intro-style');
      if (styleLink) document.head.removeChild(styleLink);
    };
  }, []);

  // Generate fur spans
  const furSpans = Array.from({ length: 31 }, (_, i) => (
    <span key={i} className={`fur-${31 - i}`}></span>
  ));

  // Generate lamp spans
  const lampSpans = Array.from({ length: 28 }, (_, i) => (
    <span key={i} className={`lamp-${i + 1}`}></span>
  ));

  return (
    <div id="container">
      <netflixintro letter="N">
        <div className="helper-1">
          <div className="effect-brush">
            {furSpans}
          </div>
          <div className="effect-lumieres">
            {lampSpans}
          </div>
        </div>
        <div className="helper-2">
          <div className="effect-brush">
            {furSpans}
          </div>
        </div>
        <div className="helper-3">
          <div className="effect-brush">
            {furSpans}
          </div>
        </div>
        <div className="helper-4">
          <div className="effect-brush">
            {furSpans}
          </div>
        </div>
      </netflixintro>
    </div>
  );
};

