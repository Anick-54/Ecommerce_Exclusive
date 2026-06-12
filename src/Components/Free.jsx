import { Container } from "./Container"
import { Flex } from "./Flex"
import S1 from "../assets/S1.png"
import S2 from "../assets/S2.png"
import S3 from "../assets/S3.png"
import { FaLongArrowAltUp } from "react-icons/fa";



export const Free = () => {
  return (
   <>   
    <Container>
        <Flex className=" lg:flex justify-center lg:gap-[88px] mt-10">
            
            <div className="w-[262px] text-center">
                <div className="flex justify-center items-center">
                    <img src={S1} alt="" />
                </div>
                <div>
                    <h5 className="text-[20px] font-semibold font-poppins pt-6 pb-2 ">FREE AND FAST DELIVERY</h5>
                    <p className="text-[14px] font-poppins">Free delivery for all orders over $140</p>
                </div>

            </div>
        
            <div className="w-[262px] text-center">
                <div className="flex justify-center items-center">
                    <img src={S2} alt="" />
                </div>
                <div>
                    <h5 className="text-[20px] font-semibold font-poppins pt-6 pb-2 ">24/7 CUSTOMER SERVICE</h5>
                    <p className="text-[14px] font-poppins">24/7 CUSTOMER SERVICE</p>
                </div>

            </div>
            <div className="w-[262px] text-center">
                <div className="flex justify-center items-center">
                    <img src={S3} alt="" className="items-center" />
                </div>
                <h5 className="text-[20px] font-semibold font-poppins pt-6 pb-2 ">MONEY BACK GUARANTEE</h5>
                <p className="text-[14px] font-poppins">We reurn money within 30 days</p>
                

            </div>
            
        </Flex>
        <div className="w-[46px] h-[46px] rounded-full bg-secondary ml-290 mb-8 mt-15.5 relative hover:bg-primary hover:text-white cursor-pointer">
            <FaLongArrowAltUp className="absolute top-2.5 left-3 text-2xl"/>
        </div>
    </Container>




   </>
  )
}
