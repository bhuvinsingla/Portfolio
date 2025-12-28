import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { AppleIphoneDesign } from './designs/AppleIphoneDesign';
import { NeonDragonDesign } from './designs/NeonDragonDesign';
import { AnimatedBagLoginDesign } from './designs/AnimatedBagLoginDesign';

const DESIGNS: Record<string, { 
  title: string; 
  folder: string; 
  basePath: string;
  component?: React.ComponentType;
}> = {
  'animated-bag-login': {
    title: 'Animated Bag Login',
    folder: 'Animated-Bag-Login',
    basePath: '/designs/Animated-Bag-Login',
    component: AnimatedBagLoginDesign,
  },
  'apple-iphone': {
    title: 'Apple iPhone Animation',
    folder: 'Apple-iphone',
    basePath: '/designs/Apple-iphone',
    component: AppleIphoneDesign,
  },
  'neon-dragon': {
    title: 'Interactive Neon Dragon',
    folder: 'Interactive-Neon-Dragon-Code',
    basePath: '/designs/Interactive-Neon-Dragon-Code',
    component: NeonDragonDesign,
  },
  'legend-login': {
    title: 'Legend Login Form',
    folder: 'legend_login_form',
    basePath: '/designs/legend_login_form',
  },
  'netflix-intro': {
    title: 'Netflix Intro Animation',
    folder: 'Netflix-Intro',
    basePath: '/designs/Netflix-Intro',
  },
  'panda-interactive': {
    title: 'Panda Interactive Login',
    folder: 'Panda-interactive/panda-interactive-login-form code',
    basePath: '/designs/Panda-interactive/panda-interactive-login-form code',
  },
};

export const DesignView: React.FC = () => {
  const { designId } = useParams<{ designId: string }>();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const design = designId ? DESIGNS[designId] : null;

  useEffect(() => {
    if (!designId || !DESIGNS[designId]) {
      navigate('/');
      return;
    }

    // If component exists, it will be rendered directly
    // Otherwise, load via iframe
    if (!design.component && containerRef.current) {
      const container = containerRef.current;
      container.innerHTML = '';

      const iframe = document.createElement('iframe');
      iframe.src = `${design.basePath}/index.html`;
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      iframe.style.background = 'transparent';
      iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads');
      iframe.setAttribute('allow', 'fullscreen');
      iframe.title = design.title;

      iframe.onload = () => {
        setIsLoading(false);
      };

      iframe.onerror = () => {
        setIsLoading(false);
        container.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #fff; padding: 20px;">
            <h2 style="margin-bottom: 10px;">Failed to load design</h2>
            <p style="color: #94a3b8; margin-bottom: 20px;">Make sure the design files are in: public${design.basePath}</p>
            <p style="color: #64748b; font-size: 12px;">Path: ${design.basePath}/index.html</p>
          </div>
        `;
      };

      container.appendChild(iframe);

      return () => {
        container.innerHTML = '';
      };
    } else if (design.component) {
      setIsLoading(false);
    }
  }, [designId, design, navigate]);

  if (!design) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-white">{design.title}</h1>
            </div>
            {isLoading && (
              <div className="text-sm text-slate-400">Loading...</div>
            )}
          </div>
        </div>
      </div>

      {/* Design Content */}
      {design.component ? (
        <div className="w-full h-[calc(100vh-73px)] bg-slate-900" style={{ position: 'relative' }}>
          {React.createElement(design.component)}
        </div>
      ) : (
        <div 
          ref={containerRef}
          className="w-full h-[calc(100vh-73px)] bg-slate-900"
          style={{ position: 'relative' }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-slate-400">Loading design...</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

