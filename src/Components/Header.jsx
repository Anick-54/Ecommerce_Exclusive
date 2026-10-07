import { useState } from "react";
import { Container } from "./Container"
import { Flex } from "./Flex"
import { SlArrowDown } from "react-icons/sl";




export const Header = () => {
    const[show, setShow] = useState(false);
    const handleClick = () =>{
        setShow(!show)
    }
  return (
   <>
    <header className="bg-black py-3 px-2 lg:px-0 ">
        <Container>
            <Flex className="justify-between items-center">   
                <div className="text-white text-center w-full lg:w-[90%] text-sm">
                     <h5>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className="font-bold underline cursor-pointer hover:text-pink-500">ShopNow</a></h5>
                </div>
                <div className="relative">
                    <button onClick={handleClick} className="flex gap-[5px] text-white items-center text-sm cursor-pointer ">
                        English <SlArrowDown />
                    </button>
                </div>
                <div className={`${show ? 'block' : 'hidden'} absolute top-16 right-0
                 px-5 z-50 lg:top-10 lg:right-60 lg:px-5 lg: block flex-wrap w-40 h-20 rounded-lg bg-black text-white text-[16px] pl-5 pt-4 pb-2 ml-5 leading-7`}>
                    <h4 className="cursor-pointer hover:text-pink-500">English (UK)</h4>
                    <h4 className="cursor-pointer hover:text-pink-500">Bangla</h4>
                </div>
            </Flex>
        </Container>
    </header>
   </>
  )
}
