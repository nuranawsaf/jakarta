import React from 'react'
import { cardFormatData } from "./cardata";
import PropertyCard from '../propertyCard/PropertyCard'
import SearchFilter from '../searchFilter/SearchFilter';
import Demo from '../demo/Demo';
import SiteHeader from '../siteHeader/SiteHeader';

const Cards = () => {
  return (
    <div id="app" className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">
      <div className="xl:flex-shrink-0"><SiteHeader /></div>
      <div className="xl:flex-1 xl:flex xl:overflow-y-hidden">
        <div className=' xl:h-[1668px] xl:bg-gray-800 hidden xl:block'>
        <Demo/>
        </div>
        <div className='xl:hidden'>
          <SearchFilter/>
        </div>
        <div>
          {[1,2].map((item) => (
            <main className="py-6 xl:flex-1 xl:overflow-x-hidden">
            <div>
              <div className="px-4 xl:px-4">
                <h3 className="text-gray-900 text-xl">Los Angeles</h3>
                <div className='flex justify-between '>
                <p className="text-gray-600">Live like the stars in these luxurious Southern California estates.</p>
                <p className='text-indigo-500 cursor-pointer' >View all</p>
                </div>
              </div>
              <div className=" sm:overflow-x-auto sm:overflow-y-hidden">
                <div className="px-2 sm:inline-flex  sm:pb-1 xl:px-3">
                  <div className="sm:mt-0  sm:flex-shrink-0">
                    <PropertyCard />
                  </div>
                </div>
              </div>
            </div>
          </main>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards