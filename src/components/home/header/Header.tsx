import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { GoSearch } from 'react-icons/go'
import { BsFilter } from 'react-icons/bs'

const Header = () => {
  return (
    <div id='app' className=' bg-gray-200 antialiased'>
        <header className='bg-gray-900 px-4 py-3 flex justify-between  items-center'>
          <img className='h-8 w-auto' src="/assets/images/logo.png" alt="" />
          <button>
            <AiOutlineMenu  className='h-6 w-6 fill-current text-gray-400' />
          </button>
        </header>
        <section className='flex justify-between bg-gray-800 px-4 py-3'>
          <div className='relative '>
              <div className='absolute inset-y-0 left-0 flex items-center pl-2'>
                  <GoSearch className='h-6 w-6 fill-current text-gray-400' />
              </div>
              <input className='bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10  py-2' placeholder='Search by keywords' />
          </div>
                
                <button className='inline-flex items-center hover:bg-gray-600 bg-gray-700 focus:outline-none focus:shadow-outline rounded-lg shadow pr-4 pl-3'>
                  <span>
                      <BsFilter className="h-6 w-6 fill-current text-gray-300" />
                  </span>
                  <span className='text-white font-medium ml-2'>
                      Filters
                  </span>
                  </button>
        </section>
    </div>
  )
}

export default Header