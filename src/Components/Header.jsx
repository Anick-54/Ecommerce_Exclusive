import { Container } from "./Container"
import { Flex } from "./Flex"
import { SlArrowDown } from "react-icons/sl";




export const Header = () => {
  return (
   <>
    <header className="bg-black py-3 px-2 lg:px-0">
        <Container>
            <Flex className="justify-between items-center">   
                <div className="text-white text-center w-full lg:w-[90%] text-sm">
                     <h5>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className="font-bold underline">ShopNow</a></h5>
                </div>
                <div>
                    <button className="flex gap-[5px] text-white items-center text-sm ">
                        English <SlArrowDown/>
                    </button>
                </div>
            </Flex>
        </Container>
    </header>



   </>
  )
}
