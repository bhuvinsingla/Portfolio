import React from 'react';
import { Section } from './Section';
import { SKILLS } from '../constants';
import { Terminal, Database, Cpu, Brain } from 'lucide-react';

const getIcon = (category: string) => {
  if (category.includes('Frontend')) return <Terminal className="w-6 h-6 text-brand-400" />;
  if (category.includes('Backend')) return <Database className="w-6 h-6 text-brand-400" />;
  if (category.includes('Blockchain')) return <Cpu className="w-6 h-6 text-brand-400" />;
  return <Brain className="w-6 h-6 text-brand-400" />;
};

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Arsenal" subtitle="A comprehensive list of technologies and tools I utilize to build scalable solutions.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((group, idx) => (
          <div 
            key={idx} 
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-brand-500/50 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-700 group-hover:border-brand-500/50 transition-colors">
                {getIcon(group.category)}
              </div>
              <h3 className="font-semibold text-lg text-slate-200">{group.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-slate-900 text-slate-400 rounded text-sm font-medium border border-slate-700/50 hover:text-brand-300 hover:border-brand-500/30 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
