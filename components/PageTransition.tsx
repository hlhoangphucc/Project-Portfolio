'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.4, esse: 'esaseInOut' },
        }}
        className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
