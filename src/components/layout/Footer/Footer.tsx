import React from 'react';
import { HiOutlineLocationMarker,HiOutlinePhone,HiOutlineMail } from 'react-icons/hi';
import Demo from '../../home/demo/Demo';

const Footer = () => {

  const footerIcon = [
    {
      icon: <HiOutlineLocationMarker/> ,
      title: "Uttara 18 No Sector",
    },
    {
      icon: <HiOutlinePhone/>,
      title: "+880 1624239653"
    },
    {
      icon: <HiOutlineMail/>,
      title: "nuranawsaf712@gmail.com"
    },
  ]

  return (
    <>
    <div></div>
    </>
  )
}

export default Footer
