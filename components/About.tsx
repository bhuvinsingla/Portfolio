import React from 'react';
import { Section } from './Section';
import { ExternalLink } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about" title="About" subtitle="My journey from non-medical stream to engineering and beyond.">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Started my career in the non-medical stream, pivoted into engineering, and never looked back. My journey began with CRM systems—diving into data and analytics—before branching out into full-stack development and exploring the fast-evolving world of blockchain and crypto trends.
          </p>
          
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Today, I blend hands-on experience across cutting-edge technologies with a strong passion for building scalable, smart, and user-focused solutions.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Tech Stack:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-slate-400 font-medium">• Backend:</p>
                <p className="text-slate-300">Node.js, TypeScript</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-slate-400 font-medium">• Frontend:</p>
                <p className="text-slate-300">Angular, React, Next.js, Vite</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-slate-400 font-medium">• AI Integrations:</p>
                <p className="text-slate-300">Vapi, LangChain, RAG, MediaDevices</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-slate-400 font-medium">• CRM:</p>
                <p className="text-slate-300">Salesforce</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-slate-400 font-medium">• Blockchain:</p>
                <p className="text-slate-300">Solidity, ERC-20</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-slate-400 font-medium">• Databases & Tools:</p>
                <p className="text-slate-300">SQL, MySQL, Supabase, Git, Node</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700">
            <p className="text-slate-300 text-lg italic">
              Always learning. Always building. Always curious.
            </p>
          </div>

          {/* <div className="mt-6">
            <a 
              href="https://bhuvin.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors"
            >
              <span>Visit my website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div> */}
        </div>
      </div>
    </Section>
  );
};

