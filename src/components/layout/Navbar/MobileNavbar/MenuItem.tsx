import * as React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuItemProps {
  link: {
    id: number;
    title: string;
    href: string;
  };
}

const MenuItem = () => {
  return (
    <motion.li
      className=' mb-2'
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className=" pt-2 pb-5 border-b border-gray-800 ">
          <a href="#" className="block px-3  py-1 rounded font-semibold text-white hover:bg-gray-800 sm:text-sm sm:px-2 xl:text-gray-900 xl:hover:bg-gray-200">List your property</a>
          <a href="#" className="mt-1 block  px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200">Trips</a>
          <a href="#" className="mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:hover:bg-gray-200">Messages</a>
      </div>
      <div className='relative px-3 py-5 '>
          <div className="flex items-center sm:hidden">
              <img className="h-10 w-10 object-cover rounded-full border-2 border-gray-600" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt=""/>
              <span className="ml-4 font-semibold text-gray-200 sm:hidden">Isla Schoger</span>
          </div>

          <div className="mt-5 sm:hidden">
            <a href="#account" className="block text-gray-400 hover:text-white">Account settings</a>
            <a href="#support" className="mt-3 block text-gray-400 hover:text-white">Support</a>
            <a href="#sign-out" className="mt-3 block text-gray-400 hover:text-white">Sign out</a>
          </div>
      </div>
    </motion.li>
  );
};

export default MenuItem;