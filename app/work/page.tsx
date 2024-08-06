'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/Worksliderbtns';

const projects = [
  {
    num: '01',
    category: 'Mobile',
    title: 'Project 1',
    description:
      'Develop a social networking application for young people, allowing users to share images, videos, post interactions, private messages with message recall feature. The app uses React Native technology to ensure a smooth user experience on iOS and Android platforms',
    stack: [
      { name: 'React Native' },
      { name: 'Django' },
      { name: 'Postgre SQL' },
    ],
    image: '/assets/work/thumb2.png',
    demo: 'https://www.youtube.com/watch?v=anR0_-icF2c',
    github: 'https://github.com/hlhoangphucc/Tello-App-React',
  },
  {
    num: '02',
    category: 'Mobile',
    title: 'Project 2',
    description:
      'Develop a simple entertaining game based on the brick-laying mechanism. Players will try to arrange tiles to match the horizontal row to remove them and score points. Single-player mode records the highest scores, while multiplayer mode allows for direct competition and ranks players based on total scores',
    stack: [{ name: 'Flutter' }, { name: 'Firebase' }],
    image: '/assets/work/thumb3.png',
    demo: 'https://www.youtube.com/watch?v=mZnjVzXTuSs',
    github:
      'https://github.com/hlhoangphucc/Game_tetris---App_chat/tree/Phuc/tetris_game',
  },
  {
    num: '03',
    category: 'IOT',
    title: 'Project 3',
    description:
      'Develop an advanced smart home system, combining the comfort of a traditional home with intelligent remote control capabilities. The system includes smart automatic watering features, smart rain sensor, and security alarm system. Users can easily manage and control home appliances through an intuitive interface, providing a more comfortable and safer life.',
    stack: [{ name: 'C/C++' }, { name: 'React Native' }, { name: 'MongoDB' }],
    image: '/assets/work/Thumb4.png',
    demo: 'https://www.youtube.com/watch?v=7EtD1vGL58o',
    github:
      'https://github.com/hlhoangphucc/Smart-Home/blob/main/sketch_jul5c.ino',
  },
  {
    num: '04',
    category: 'fullstack',
    title: 'Project 4',
    description:
      'Develop a comprehensive e-commerce platform, including a sales website with core features such as shopping cart, product detail view and ordering. At the same time, build a strong administration system to manage products, users and order status effectively. The project aims to provide a seamless shopping experience for customers and maximum support for business operations',
    stack: [{ name: 'Asp.Net' }, { name: 'MS SQL Server' }],
    image: '/assets/work/thumb1.png',
    demo: 'https://youtu.be/mO5RqjLdfj8',
    github: 'https://github.com/hlhoangphucc/Sales-Manager/tree/Hoang-Phuc',
  },
];

const Page = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: 'easeIn' }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline num */}
              <div className='text-8xl font-extrabold text-transparent text-stroke'>
                {project.num}
              </div>
              {/* project category */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              {/* project description */}
              <p className='text-white/60'>{project.description}</p>
              {/* stack */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {/*  remove the lost command */}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>
              {/* border*/}
              <div className='border border-white/20'></div>
              {/*  buttons */}
              <div className='flex items-center gap-4'>
                {/* demo */}
                <Link href={project.demo}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Demo project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                      {/* image */}
                      <div className='relative w-full h-full'>
                        <Image
                          src={project.image}
                          fill
                          className='object-cover'
                          alt=''
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
