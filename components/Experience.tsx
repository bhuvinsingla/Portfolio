import React from 'react';
import { Section } from './Section';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, Calendar, MapPin, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <div className="bg-slate-900/50">
    <Section id="experience" title="Professional Journey" subtitle="My path in software development and key career milestones.">
      <div className="relative">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-700 transform -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {EXPERIENCE.map((job, idx) => (
            <div key={job.id} className={`flex flex-col md:flex-row gap-8 items-center md:items-start ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-[50%] transform -translate-x-1/2 w-4 h-4 bg-brand-500 rounded-full border-4 border-slate-900 hidden md:block mt-1.5 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>

              {/* Content Card */}
              <div className="w-full md:w-[45%]">
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <div className="flex items-center gap-2 text-brand-400 font-medium">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <div className="text-right">
                       <div className="flex items-center gap-2 text-slate-400 text-sm justify-end">
                        <Calendar className="w-3 h-3" />
                        <span>{job.period}</span>
                      </div>
                      {job.location && (
                        <div className="flex items-center gap-2 text-slate-500 text-xs justify-end mt-1">
                          <MapPin className="w-3 h-3" />
                          <span>{job.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                        <span className="min-w-[6px] h-[6px] rounded-full bg-slate-500 mt-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty Spacer for Timeline Balance */}
              <div className="hidden md:block w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section Mini */}
      <div className="mt-20">
         <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-brand-500" />
            Education
         </h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
               <div key={idx} className="bg-slate-800/30 border border-slate-700 p-6 rounded-lg flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <p className="text-slate-400">{edu.institution}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-700/50">
                    <span className="text-brand-400 font-mono text-sm">{edu.year}</span>
                    <span className="text-white font-bold">{edu.score}</span>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </Section>
    </div>
  );
};
