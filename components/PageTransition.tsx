'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        initil={{ opacity: 1 }}
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
