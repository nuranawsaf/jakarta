import React from 'react'

const Homes = () => {
  return (
    <div>
        <div className='bg-gray-100 md:bg-green-600 lg:bg-red-500 xl:bg-yellow-500 2xl:bg-pink-600'>
            <div className='px-8 py-12 max-w-md max-auto'>
                <img className='h-10' src="/assets/images/logo.png" alt="" />
                <img className='mt-6 rounded-lg shadow-xl' src="/assets/images/image1.jpg" alt="" />
                <h1 className='mt-6 text-2xl font-bold text-gray-900 leading-tight'>you can work from anywhere. <span className='text-indigo-500'>Take advantage of it.</span></h1>
                <p className='mt-2 text-gray-600 '>
                  Working helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vaction.
                </p>
                <div className='mt-4'>
                  <a className='inline-block px-4 py-2 rounded-lg shadow-lg uppercase tracking-wider font-semibold bg-indigo-500 text-sm text-white' href="">Book your escape</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homes