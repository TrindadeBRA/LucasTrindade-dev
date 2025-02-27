import { Skill } from '@/pages/api/sectionSkills';
import React from 'react';
import { Check } from 'react-feather';

export default function Skills(skillsData: Skill){

  return (
    <div className="bg-gray-800 py-14 sm:py-20" id="skills">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600" data-aos="fade-right">Conhecimentos gerais</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl" data-aos="fade-right">Algumas Skills</p>
          </div>
          <dl className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-3 text-base leading-7 text-gray-300 sm:grid-cols-3">
            {Object.values(skillsData).map((skill:any, index) => (
              <div key={index} className="relative pl-9">
                <dt className="font-semibold text-white" data-aos="fade-in">
                  <Check className="absolute left-0 top-1 h-5 w-5 text-indigo-500" />
                  {skill.skill_name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
