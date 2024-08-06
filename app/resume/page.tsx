'use client';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiNextdotjs,
  SiCsharp,
  SiCplusplus,
  SiDotnet,
  SiFirebase,
  SiDjango,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiPython,
  SiTypescript,
  SiMysql,
} from 'react-icons/si';

const about = {
  title: 'About me',
  description: "Here's how to get in touch with me",
  info: [
    {
      fieldname: 'Name',
      fieldValue: 'Hoang Phuc',
    },
    {
      fieldname: 'Phone',
      fieldValue: '(+84) 336 755 724',
    },
    {
      fieldname: 'Experience',
      fieldValue: '6 Month',
    },
    {
      fieldname: 'Email',
      fieldValue: 'hlhoangphucc@gmail.com',
    },
    {
      fieldname: 'Nationality',
      fieldValue: 'VietNam',
    },

    {
      fieldname: 'Language',
      fieldValue: 'English',
    },
  ],
};

const experience = {
  title: 'My experience',
  description:
    'My collection of front-end development experience, demonstrates my expertise in building innovative mobile applications',
  item: [
    {
      company: 'MCI SOLUTIONS',
      position: 'Mobile Developer',
      duration: 'Nov 2023 - Jan 2024',
    },
  ],
};

const education = {
  title: 'My education',
  description:
    'A strong academic foundation in technology and software development',
  item: [
    {
      institution: 'Cao Thang Technical College',
      degree: 'Practicing engineer',
      duration: 'Aug 2020 - Aug 2023 ',
    },
  ],
};

const skills = {
  title: 'My skills',
  description:
    'My technical expertise, including programming languages, frameworks, and tools',
  skillList: [
    { icon: <FaJs />, name: 'JavaScript', category: 'Programming Language' },
    {
      icon: <SiTypescript />,
      name: 'TypeScript',
      category: 'Programming Language',
    },
    { icon: <SiCsharp />, name: 'C#', category: 'Programming Language' },
    { icon: <SiCplusplus />, name: 'C++', category: 'Programming Language' },
    { icon: <SiPython />, name: 'Python', category: 'Programming Language' },

    { icon: <FaReact />, name: 'React', category: 'Technology' },
    { icon: <FaNodeJs />, name: 'Node.js', category: 'Technology' },
    { icon: <SiNextdotjs />, name: 'Next.js', category: 'Technology' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', category: 'Technology' },
    { icon: <SiDotnet />, name: 'ASP.NET', category: 'Technology' },
    { icon: <SiDjango />, name: 'Django', category: 'Technology' },
    { icon: <FaHtml5 />, name: 'HTML5', category: 'Technology' },
    { icon: <FaCss3 />, name: 'CSS3', category: 'Technology' },

    { icon: <SiFirebase />, name: 'Firebase', category: 'Database' },
    {
      icon: <SiMicrosoftsqlserver />,
      name: 'MS SQL Server',
      category: 'Database',
    },
    { icon: <SiPostgresql />, name: 'PostgreSQL', category: 'Database' },
    { icon: <SiMysql />, name: 'MySQL', category: 'Database' },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Skill = {
  icon: React.ReactElement;
  name: string;
  category: string;
};
type Skills = {
  title: string;
  description: string;
  skillList: Skill[];
};
const SkillGroup = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <div>
    <h4 className='text-2xl font-bold mb-4'>{title}</h4>
    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
      {skills.map((item, index) => (
        <li key={index}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                  {item.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className='capitalize'>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      ))}
    </ul>
  </div>
);

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  const technologySkills = skills.skillList.filter(
    (skill) => skill.category === 'Technology'
  );
  const programmingSkills = skills.skillList.filter(
    (skill) => skill.category === 'Programming Language'
  );
  const databaseSkills = skills.skillList.filter(
    (skill) => skill.category === 'Database'
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='Experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='Experience'>Experience</TabsTrigger>
            <TabsTrigger value='Education'>Education</TabsTrigger>
            <TabsTrigger value='Skills'>Skills</TabsTrigger>
            <TabsTrigger value='About'>About me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value='Experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>

                <ScrollArea className='h-[480px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[38px]'>
                    {experience.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='Education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>

                <ScrollArea className='h-[480px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[38px]'>
                    {education.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.degree}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.duration}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='Skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[38px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <SkillGroup title='Technology' skills={technologySkills} />
                <SkillGroup
                  title='Programming Languages'
                  skills={programmingSkills}
                />
                <SkillGroup title='Databases' skills={databaseSkills} />
              </div>
            </TabsContent>
            <TabsContent
              value='About'
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='flex items-center xl:justify-start gap-4'
                      >
                        <span className='text-white/60'>{item.fieldname}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
