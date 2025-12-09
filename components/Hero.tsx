import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 flex-1">
            <div className="inline-block px-3 py-1 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-400 font-mono text-sm tracking-wide mb-4">
              OPEN TO WORK
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl">
              {PERSONAL_INFO.role} specializing in scalable web architectures, blockchain tech, and AI integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a 
                href="#projects"
                className="group flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg shadow-brand-500/25"
              >
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-all backdrop-blur-sm"
              >
                Contact Me
              </a>
            </div>

            <div className="pt-8 flex gap-6 justify-center md:justify-start">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-brand-400 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Code decoration / Abstract graphic */}
          <div className="flex-1 hidden md:block">
             <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-sm space-y-2">
                   <div className="text-slate-400">// Skills overview</div>
                   <div>
                      <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-purple-400">new</span> <span className="text-yellow-400">Developer</span>({'{'}
                   </div>
                   <div className="pl-4">
                      name: <span className="text-green-400">"{PERSONAL_INFO.name}"</span>,
                   </div>
                   <div className="pl-4">
                      skills: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"Solidity"</span>],
                   </div>
                   <div className="pl-4">
                      passion: <span className="text-green-400">"Building the future"</span>
                   </div>
                   <div>{'}'});</div>
                   <div className="text-slate-400 mt-4">// Ready to deploy</div>
                   <div><span className="text-blue-400">developer</span>.<span className="text-yellow-400">code</span>();</div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  );
};
