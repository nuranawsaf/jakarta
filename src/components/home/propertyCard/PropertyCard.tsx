import React from 'react'
import { cardData } from '../cards/cardata'
import { BsFillStarFill } from 'react-icons/bs'

const PropertyCard = () => {
  return (
    <div className='sm:px-2 sm:overflow-x-auto'>
                <div className='sm:flex sm:-mx-2 sm:pb-8 '>
                        {
                            cardData.map((item) => (
                                
                                        <div  className='sm:max-w-xs sm:w-full sm:flex-shrink-0 mt-6 sm:px-2'>
                                        
                                        <div className='relative pb-5/6 '>
                                            <img className=' h-full w-full rounded-lg shadow-md object-cover' src={item.imageUrl} alt="" />
                                        </div>
                                    

                                            <div className='px-4 -mt-16 relative '>
                                                <div className='bg-white rounded-lg px-4 py-4 shadow-lg'>
                                                    <div className='flex items-baseline'>
                                                        <span className='px-2 py-1 inline-block leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-xs'>Plus</span>

                                                        <div className='ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide'>
                                                            3 beds &bull; 2 baths
                                                        </div>
                                                    </div>

                                                    <h4 className='mt-1 text-gray-900 font-semibold text-lg'>{item.title}</h4>
                                                    <div className='mt-1'>
                                                        <span className='text-gray-900'>${item.price}</span> 
                                                        <span className='ml-1 text-sm text-gray-600'>/wk</span>
                                                    </div>
                                                    <div className='mt-2 flex items-center text-sm text-gray-600'>
                                                        <div className='flex text-teal-500'>
                                                        <svg v-for="i in 5" className="h-4 w-4 fill-current"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/>
                                                        </svg>
                                                        <svg v-for="i in 5" className="h-4 w-4 fill-current"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/>
                                                        </svg>
                                                        <svg v-for="i in 5" className="h-4 w-4 fill-current"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/>
                                                        </svg>
                                                        <svg v-for="i in 5" className="h-4 w-4 fill-current"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/>
                                                        </svg>
                                                        <svg v-for="i in 5" className="h-4 w-4 fill-current"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"/>
                                                        </svg>
                                                        </div>
                                                        <span className='ml-2'>{item.reviewCount} reviews</span>
                                                    </div>
                                                </div>
                                            </div>

                                            
                                        </div>
                            ))
                        }
                </div>
            </div>
  )
}

export default PropertyCard