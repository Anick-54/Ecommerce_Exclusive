
import { BredCrumb } from "../Components/BredCrumb"
import { Container } from "../Components/Container"
import Abou from "../assets/About.png"
import { BsShop } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import { FaShopify } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { Card5 } from "../Components/Card5";
import tom from "../assets/Tom.png"
import emma from "../assets/Emma.png"
import will from "../assets/Wil.png"
import { Free } from "../Components/Free";





export const About = () => {
  return (
    <>
    <Container className='mt-10 mb-[140px]'>
      <BredCrumb/>
      <div className="lg:flex gap-[75px] mt-10">
        <div className="lg:w-[525px] lg:h-[336px] mt-[50px] pl-1">
          <h5 className="text-[54px] font-semibold mb-10 font-inter pl-13 lg:pl-0  ">Our Story</h5>
          <p className="font-inter">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p className="mt-6 font-inter">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div>
          <img src={Abou} alt="About Image" />
        </div>
      </div>
      <div className="mt-[140px]  lg:flex justify-between pl-12 ">
        <div className="w-[270px] h-[230px]  border-1 border-secondary rounded-[4px] pt-7.5 pl-[94.5px] hover:bg-primary hover:text-white cursor-pointer ease-out duration-1000">
          <div className="w-20 h-20 rounded-full bg-secondary relative ">
            <div className="w-15 h-15 rounded-full bg-black absolute top-2.5 left-2.5 relative">
            <BsShop size={40} className="absolute top-2.5 left-2.5 text-white"/>

              
            </div>
            <h5 className="text-[32px] font-bold font-inter text-center mt-6">10.5K</h5>
            {/* <p className="w-[170px] font-inter mt-3">Sallers active our site</p> */}
          </div>
        </div>
        <div className="w-[270px] h-[230px]  border-1 border-secondary rounded-[4px] pt-7.5 pl-[94.5px] hover:bg-primary hover:text-white cursor-pointer ease-out duration-1000">
          <div className="w-20 h-20 rounded-full bg-secondary relative ">
            <div className="w-15 h-15 rounded-full bg-black absolute top-2.5 left-2.5 relative">
              
              <CiDollar size={40} className="absolute top-2.5 left-2.5 text-white"/>
            </div>
            <h5 className="text-[32px] font-bold font-inter text-center mt-6">33K</h5>
            {/* <p className="w-[170px] font-inter mt-3">Sallers active our site</p> */}
          </div>
        </div>
        <div className="w-[270px] h-[230px]  border-1 border-secondary rounded-[4px] pt-7.5 pl-[94.5px] hover:bg-primary hover:text-white cursor-pointer ease-out duration-1000">
          <div className="w-20 h-20 rounded-full bg-secondary relative ">
            <div className="w-15 h-15 rounded-full bg-black absolute top-2.5 left-2.5 relative">
              
              <FaShopify  size={40} className="absolute top-2.5 left-2.5 text-white"/>

            </div>
            <h5 className="text-[32px] font-bold font-inter text-center mt-6">45.5K</h5>
            {/* <p className="w-[170px] font-inter mt-3">Sallers active our site</p> */}
          </div>
        </div>
        <div className="w-[270px] h-[230px]  border-1 border-secondary rounded-[4px] pt-7.5 pl-[94.5px] hover:bg-primary hover:text-white cursor-pointer ease-out duration-1000  ">
          <div className="w-20 h-20 rounded-full bg-secondary relative ">
            <div className="w-15 h-15 rounded-full bg-black absolute top-2.5 left-2.5 relative">
              <FaSackDollar size={40} className="absolute top-2.5 left-2.5 text-white"/>

            </div>
            <h5 className="text-[32px] font-bold font-inter text-center mt-6">25K</h5>
            {/* <p className="w-[170px] font-inter mt-3">Sallers active our site</p> */}
          </div>
        </div>
        
        
      </div>
      <div className=" lg:flex gap-7.5 mb-[140px] pl-6">
        <Card5  
        image={tom}
        tittle='Tom Cruise'
        des='Founder & Chairman'
        />
        <Card5  
        image={emma}
        tittle='Tom Cruise'
        des='Founder & Chairman'
        />
        <Card5  
        image={will}
        tittle='Tom Cruise'
        des='Founder & Chairman'
        />
      </div>
      <Free/>
     
    </Container>
    </>
  )
}
