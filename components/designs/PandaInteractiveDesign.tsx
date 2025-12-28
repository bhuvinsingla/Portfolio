import React, { useEffect } from 'react';

export const PandaInteractiveDesign: React.FC = () => {
  useEffect(() => {
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/designs/Panda-interactive/panda-interactive-login-form code/style.css';
    link.id = 'panda-interactive-style';
    if (!document.getElementById('panda-interactive-style')) {
      document.head.appendChild(link);
    }

    // Load Google Fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css?family=Ubuntu:500';
    fontLink.rel = 'stylesheet';
    if (!document.querySelector('link[href*="Ubuntu"]')) {
      document.head.appendChild(fontLink);
    }

    // Load Font Awesome
    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    if (!document.querySelector('link[href*="font-awesome"]')) {
      document.head.appendChild(faLink);
    }

    // Load jQuery and script
    const jquery = document.createElement('script');
    jquery.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js';
    jquery.id = 'jquery-script';
    
    const script = document.createElement('script');
    script.src = '/designs/Panda-interactive/panda-interactive-login-form code/script.js';
    script.id = 'panda-interactive-script';

    if (!document.getElementById('jquery-script')) {
      document.body.appendChild(jquery);
      jquery.onload = () => {
        if (!document.getElementById('panda-interactive-script')) {
          document.body.appendChild(script);
        }
      };
    } else if (!document.getElementById('panda-interactive-script')) {
      document.body.appendChild(script);
    }

    return () => {
      const styleLink = document.getElementById('panda-interactive-style');
      if (styleLink) document.head.removeChild(styleLink);
      const scriptTag = document.getElementById('panda-interactive-script');
      if (scriptTag) document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <div 
      style={{ backgroundColor: '#e95f30', minHeight: '100vh', position: 'relative' }}
      dangerouslySetInnerHTML={{
        __html: `
          <div class="login">
            <i class="fa fa-user" aria-hidden="true">&nbsp;&nbsp;</i><input type="text" /><br><br>
            <i class="fa fa-unlock-alt" aria-hidden="true">&nbsp;&nbsp;</i><input type="password" /><br><br>
            <button type="button">Login</button>
          </div>
          <div class="backg">
            <div class="panda">
              <div class="earl"></div>
              <div class="earr"></div>
              <div class="face">
                <div class="blshl"></div>
                <div class="blshr"></div>
                <div class="eyel">
                  <div class="eyeball1"></div>
                </div>
                <div class="eyer">
                  <div class="eyeball2"></div>
                </div>
                <div class="nose">
                  <div class="line"></div>
                </div>
                <div class="mouth">
                  <div class="m">
                    <div class="m1"></div>
                  </div>
                  <div class="mm">
                    <div class="m1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pawl">
            <div class="p1">
              <div class="p2"></div>
              <div class="p3"></div>
              <div class="p4"></div>
            </div>
          </div>
          <div class="pawr">
            <div class="p1">
              <div class="p2"></div>
              <div class="p3"></div>
              <div class="p4"></div>
            </div>
          </div>
          <div class="handl"></div>
          <div class="handr"></div>
        `
      }}
    />
  );
};

