'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Photo from '@/components/Photo';
import Socials from '@/components/Socials';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  const [animationState, setAnimationState] = useState('enter');
  const [textState, setTextState] = useState('Hoang Phuc');

  useEffect(() => {
    const cycleText = () => {
      setAnimationState('exit');
      setTimeout(() => {
        setTextState((prev) =>
          prev === 'Hoang Phuc' ? 'FrontEnd Developer' : 'Hoang Phuc'
        );
        setAnimationState('enter');
      }, 2000);
    };

    const interval = setInterval(cycleText, 6000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const letterVariants = {
    hidden: { x: '-100%', opacity: 0 },
    enter: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
  };

  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <h1 className='h1 mb-6'>
              Hello I&apos;m <br />
              <motion.div
                className={`text-accent inline-block relative h-[40px] ${
                  textState === 'FrontEnd Developer' ? 'small-text' : ''
                }`}
                variants={containerVariants}
                initial='hidden'
                animate={animationState}
              >
                {textState.split('').map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              As a Front-End Developer, I have a proven track record in creating
              engaging user interfaces for mobile applications. My experience at
              MCI equipped me with a comprehensive skill set in React Native. I
              also equipped myself with knowledge including ASP.NET, Flutter,
              Node.js, Django and IOT development. Additionally, I can work with
              various databases such as MS SQL Server, MySQL, PostgreSQL, and
              Firebase.
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a href='/assets/cv.pdf' download='CV_HUYNH_LE_HOANG_PHUC.pdf'>
                <Button
                  variant='outline'
                  size='lg'
                  className='uppercase flex items-center gap-2'
                >
                  Download CV
                  <FiDownload className='text-xl' />
                </Button>
              </a>
              <div className='mb-8 xl:mb-0'>
                <Socials
                  containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0 '>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
