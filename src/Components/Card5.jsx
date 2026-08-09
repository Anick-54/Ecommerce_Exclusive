import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router';




export const Card5 = ({children, className, image, tittle, des}) => {
  return (
    <><Link>
    <div className={`${className} w-[370px] h-[564px] mt-[140px]`}>
       <div className='bg-[#F5F5F5]'>
        <img src={image} alt="image" />
       </div>
       <h3 className='text-[32px] font-medium font-inter font-semibold font-inter mt-8'>{tittle}</h3>
       <h4 className='mt-2 font-inter'>{des}</h4>
       {children}
       <div className='flex gap-4 mt-4'>
            <div className='hover:text-primary'>
                <CiTwitter size={24}/>
            </div>
            <div className='hover:text-primary'>
                <IoLogoInstagram size={24} />
            </div>
            <div className='hover:text-primary'>
                <FaLinkedinIn size={24}/>
            </div>
       </div>
    </div>
    </Link>
    </>
  )
}
