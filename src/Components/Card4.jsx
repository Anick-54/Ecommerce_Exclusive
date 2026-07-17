

import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { Button } from "./Button";
import { FaStar } from "react-icons/fa";
import { Flex, Rate } from 'antd';
import { Link } from "react-router";



 

export const Card4 = ({item}) => {
  const price = Number(item.price) || 0;
  const originalPrice = (price / (1 - (Number(item.discountPercentage) || 0) / 100)).toFixed(2);
  const formattedPrice = price.toFixed(2);

  return (
    <><Link to={`/productdetails/${item.id}`}>

    <div className="w-[270px] group cursor-pointer">
        <div className="bg-[#F5F5F5] relative overflow-hidden">
            <div className="h-[250px] flex justify-center items-center">
                <img src={item.thumbnail} alt="" />
            </div>
            <h5 className="absolute top-3 left-3 w-[55px] h-[26px] bg-primary text-white text-xs rounded-[4px] font-poppins flex justify-center items-center">${item.discountPercentage}</h5>
            <div className="absolute top-3 right-3 w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center ">
                <FaRegHeart />   
            </div>
            <div className="absolute top-14 mt-2 right-3 w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center ">
                 <FiEye />
            </div>
            <div className="absolute -bottom-10.5 group-hover:bottom-0 duration-500 ease-linear">
                <Button>Add To Cart</Button>
            </div>
        </div>
        <div className="#">
            <h2 className="font-medium pt-4 text-[16px] font-poppins">{item.title}</h2>
            <p className="text-sm text-gray-600 font-poppins">{item?.category || 'No category'}</p>
            <div className="flex gap-3">
                <h2 className="text-primary font-bold py-2 font-poppins text-[16px]">${formattedPrice}</h2>
                <h2 className="text-secondary font-bold py-2 font-poppins text-[16px] line-through">${originalPrice}</h2>
            </div>
            <div className="flex text-[#ffad33] text-sm gap-2">
                {/* <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> */}
                <Rate defaultValue={item.rating} allowClear={false} />

                <div className="text-[14px] text-black font-semibold font-poppins">
                  <h2>{item.rating}</h2>
               </div>
            </div>
            
        </div>

    </div>
   </Link>


    </>
   
  )
}
