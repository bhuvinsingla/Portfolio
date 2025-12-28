import React, { useEffect } from 'react';
import { getDesignPath } from '../../utils/paths';

export const LegendLoginDesign: React.FC = () => {
  useEffect(() => {
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = getDesignPath('/designs/legend_login_form/style.css');
    link.id = 'legend-login-style';
    if (!document.getElementById('legend-login-style')) {
      document.head.appendChild(link);
    }

    // Load Font Awesome
    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    if (!document.querySelector('link[href*="font-awesome"]')) {
      document.head.appendChild(faLink);
    }

    // Load script
    const script = document.createElement('script');
    script.src = getDesignPath('/designs/legend_login_form/script.js');
    script.id = 'legend-login-script';
    if (!document.getElementById('legend-login-script')) {
      document.body.appendChild(script);
    }

    return () => {
      const styleLink = document.getElementById('legend-login-style');
      if (styleLink) document.head.removeChild(styleLink);
      const scriptTag = document.getElementById('legend-login-script');
      if (scriptTag) document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <div 
      style={{
        background: `url(${getDesignPath('/designs/legend_login_form/background.jpg')})`,
        minHeight: '100vh',
        minWidth: '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      dangerouslySetInnerHTML={{
        __html: `
          <div class="main-container centered-flex">
            <div class="form-container">
              <div class="icon fa fa-user"></div>
              <form class="centered-flex">
                <div class="title">LOGIN</div>
                <div class="msg"></div>
                <div class="field">
                  <input type="text" placeholder="Username" id="uname" />
                  <span class="fa fa-user"></span>
                </div>
                <div class="field">
                  <input type="password" placeholder="Password" id="pass" />
                  <span class="fa fa-lock"></span>
                </div>
                <div class="action centered-flex">
                  <label for="remember" class="centered-flex">
                    <input type="checkbox" id="remember" /> Remember me
                  </label>
                  <a href="#">Forget Password ?</a>
                </div>
                <div class="btn-container">
                  <input type="submit" id="login-btn" value="Login" />
                </div>
                <div class="signup">
                  Don't have an Account?<a href="#"> Sign up</a>
                </div>
              </form>
            </div>
          </div>
        `
      }}
    />
  );
};

