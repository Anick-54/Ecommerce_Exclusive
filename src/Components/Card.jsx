import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { Button } from "./Button";
import { FaStar } from "react-icons/fa";



 

export const Card = ({img, heading, price, rating}) => {
  return (
    <>
    <div className="w-[270px] group ">
        <div className="bg-[#F5F5F5] relative overflow-hidden">
            <div className="h-[250px] flex justify-center items-center">
                <img src={img} alt="" />
            </div>
            <div className="absolute top-3 right-3 w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center ">
                <FaRegHeart />   
            </div>
            <div className="absolute top-14 mt-2 right-3 w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center ">
                 <FiEye />
            </div>
            <div className="absolute bottom-0 ">
                <Button>Add To Cart</Button>
            </div>
        </div>
        <div className="#">
            <h2 className="font-medium pt-4 text-[16px] font-poppins">{heading}</h2>
            <h2 className="text-primary font-bold py-2 font-poppins text-[16px]">{price}</h2>
            <div className="flex text-[#ffad33] text-sm gap-2">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                <div className="text-[14px] text-black font-semibold font-poppins">
                  <h2>{rating}</h2>
               </div>
            </div>
            
        </div>

    </div>



    </>
   
  )
}
