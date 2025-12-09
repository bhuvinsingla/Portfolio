import React from 'react';
import { Section } from './Section';
import { PROJECTS } from '../constants';
import { Code2, ExternalLink, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Showcasing innovation through code. Real-world applications of Blockchain, AI, and Web Technologies.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-900/20 flex flex-col">
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-slate-900 rounded-lg text-brand-400">
                  <Layers className="w-6 h-6" />
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              {project.features && (
                <ul className="space-y-2 mb-6 flex-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2 text-xs text-slate-300">
                      <Code2 className="w-3 h-3 min-w-[12px] mt-0.5 text-brand-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <div className="pt-4 border-t border-slate-700/50">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-slate-900/50 text-slate-400 text-xs rounded border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
