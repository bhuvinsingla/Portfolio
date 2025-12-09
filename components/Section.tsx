import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
              {title}
              <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-brand-500 rounded-full"></span>
            </h2>
          )}
          {subtitle && (
            <p className="text-slate-400 mt-2 max-w-2xl text-lg">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};
