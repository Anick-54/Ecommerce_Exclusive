import { Container } from "./Container"
import { Flex } from "./Flex"
import { SlArrowDown } from "react-icons/sl";




export const Header = () => {
  return (
   <>
    <header className="bg-black py-3">
        <Container>
            <Flex className="flex justify-between">   
                <div className="text-white text-center w-full lg:w-[90%] text-sm">
                     <h5 className="text-white">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<a href="#" className="font-bold underline">ShopNow</a></h5>
                </div>
                <div className="text-white">
                    <button className="flex gap-2 items-center text-sm">
                        English <SlArrowDown/>
                    </button>
                    

                    
                 </div>
            </Flex>
        </Container>
    </header>



   </>
  )
}
