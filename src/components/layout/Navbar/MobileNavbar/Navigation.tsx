import * as React from 'react';
import { motion } from 'framer-motion';
import { links } from '../navdata';
import MenuItem from './MenuItem';
import Link from 'next/link';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation: React.FC = () => {
  return (
    <motion.ul
      className='absolute top-0 right-0 z-30 w-screen md:w-full px-4 h-full bg-gray-900 sb'
      variants={variants}
    >
      <Link href='/'>
          <div className='cursor-pointer flex items-center px4 py-4 '>
              <img className='h-8 w-auto ' src="/assets/images/logo.png" alt="" />
          </div>
      </Link>

      <div className=''>
        <MenuItem   />
      </div>
    </motion.ul>
  );
};

export default Navigation;