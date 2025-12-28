import React, { useState, useEffect, useRef } from 'react';
import { Section } from './Section';
import { ExternalLink, X } from 'lucide-react';
import { AppleIphoneDesign } from './designs/AppleIphoneDesign';
import { NeonDragonDesign } from './designs/NeonDragonDesign';
import { AnimatedBagLoginDesign } from './designs/AnimatedBagLoginDesign';
import { LegendLoginDesign } from './designs/LegendLoginDesign';
import { NetflixIntroDesign } from './designs/NetflixIntroDesign';
import { PandaInteractiveDesign } from './designs/PandaInteractiveDesign';

interface Design {
  id: string;
  title: string;
  description: string;
  folder: string;
  thumbnail?: string;
}

const DESIGNS_MAP: Record<string, { 
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
    component: LegendLoginDesign,
  },
  'netflix-intro': {
    title: 'Netflix Intro Animation',
    folder: 'Netflix-Intro',
    basePath: '/designs/Netflix-Intro',
    component: NetflixIntroDesign,
  },
  'panda-interactive': {
    title: 'Panda Interactive Login',
    folder: 'Panda-interactive/panda-interactive-login-form code',
    basePath: '/designs/Panda-interactive/panda-interactive-login-form code',
    component: PandaInteractiveDesign,
  },
};

const DESIGNS: Design[] = [
  {
    id: 'animated-bag-login',
    title: 'Animated Bag Login',
    description: 'Creative login form with animated bag design',
    folder: 'Animated-Bag-Login',
  },
  {
    id: 'apple-iphone',
    title: 'Apple iPhone Animation',
    description: 'Interactive iPhone card with hover effects',
    folder: 'Apple-iphone',
  },
  {
    id: 'neon-dragon',
    title: 'Interactive Neon Dragon',
    description: 'Cursor-following neon dragon animation',
    folder: 'Interactive-Neon-Dragon-Code',
  },
  {
    id: 'legend-login',
    title: 'Legend Login Form',
    description: 'Elegant login form with legendary design',
    folder: 'legend_login_form',
  },
  {
    id: 'netflix-intro',
    title: 'Netflix Intro Animation',
    description: 'Netflix-style letter animation intro',
    folder: 'Netflix-Intro',
  },
  {
    id: 'panda-interactive',
    title: 'Panda Interactive Login',
    description: 'Interactive panda-themed login form',
    folder: 'Panda-interactive/panda-interactive-login-form code',
  },
];

export const Designs: React.FC = () => {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDesignClick = (design: Design) => {
    setSelectedDesign(design);
    setIsLoading(true);
  };

  const closeModal = () => {
    setSelectedDesign(null);
    setIsLoading(false);
  };

  const designData = selectedDesign ? DESIGNS_MAP[selectedDesign.id] : null;

  useEffect(() => {
    if (selectedDesign && designData) {
      // If component exists, it will be rendered directly
      // Otherwise, load via iframe
      if (!designData.component && containerRef.current) {
        const container = containerRef.current;
        container.innerHTML = '';

        const iframe = document.createElement('iframe');
        iframe.src = `${designData.basePath}/index.html`;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.style.background = 'transparent';
        iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads');
        iframe.setAttribute('allow', 'fullscreen');
        iframe.title = designData.title;

        iframe.onload = () => {
          setIsLoading(false);
        };

        iframe.onerror = () => {
          setIsLoading(false);
          container.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #fff; padding: 20px;">
              <h2 style="margin-bottom: 10px;">Failed to load design</h2>
              <p style="color: #94a3b8; margin-bottom: 20px;">Make sure the design files are in: public${designData.basePath}</p>
            </div>
          `;
        };

        container.appendChild(iframe);

        return () => {
          container.innerHTML = '';
        };
      } else if (designData.component) {
        setIsLoading(false);
      }
    }
  }, [selectedDesign, designData]);

  return (
    <>
      <Section 
        id="designs" 
        title="Design Showcase" 
        subtitle="A collection of creative UI/UX designs and interactive components I've built."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESIGNS.map((design) => (
            <div
              key={design.id}
              onClick={() => handleDesignClick(design)}
              className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-900/20 cursor-pointer"
            >
              <div className="aspect-video bg-slate-900 rounded-lg mb-4 flex items-center justify-center border border-slate-700 group-hover:border-brand-500/30 transition-colors overflow-hidden">
                <div className="text-4xl font-bold text-slate-600 group-hover:text-brand-400 transition-colors">
                  {design.title.charAt(0)}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                {design.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {design.description}
              </p>
              
              <div className="flex items-center gap-2 text-brand-400 text-sm font-medium">
                <span>View Design</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Modal */}
      {selectedDesign && designData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl h-[90vh] bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700 bg-slate-800/50">
              <div>
                <h3 className="text-2xl font-bold text-white">{designData.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{selectedDesign.description}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="relative h-[calc(90vh-80px)] w-full bg-slate-800 overflow-hidden">
              {designData.component ? (
                <div className="w-full h-full" style={{ position: 'relative' }}>
                  {React.createElement(designData.component)}
                </div>
              ) : (
                <div 
                  ref={containerRef}
                  className="w-full h-full"
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
          </div>
        </div>
      )}
    </>
  );
};

