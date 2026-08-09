
import { BredCrumb } from "../Components/BredCrumb"
import { Container } from "../Components/Container"
import Abou from "../assets/About.png"
import { AiTwotoneShop } from "react-icons/ai";


export const About = () => {
  return (
    <>
    <Container className='mt-10 mb-[140px]'>
      <BredCrumb/>
      <div className="flex gap-[75px] mt-10">
        <div className="w-[525px] h-[336px] mt-[50px]">
          <h5 className="text-[54px] font-semibold mb-10 font-inter">Our Story</h5>
          <p className="font-inter">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p className="mt-6 font-inter">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div>
          <img src={Abou} alt="About Image" />
        </div>
      </div>
      <div className="mt-[140px] flex justify-between ">
        <div className="w-[270px] h-[230px]  border-1 border-secondary pt-7.5 pl-[94.5px] hover:bg-primary hover:text-white cursor-pointer ease-out duration-1000">
          <div className="w-20 h-20 rounded-full bg-secondary relative ">
            <div className="w-15 h-15 rounded-full bg-black absolute top-2.5 left-2.5 relative">
              <AiTwotoneShop size={40} className="absolute top-2.5 left-2.5 text-white"/> 
            </div>
            <h5 className="text-[32px] font-bold font-inter text-center mt-6">10.5K</h5>
            {/* <p className="w-[170px] font-inter mt-3">Sallers active our site</p> */}
          </div>
        </div>
        <div className="w-[270px] h-[230px]  border-1 border-secondary pt-7.5 pl-[94.5px] hover:bg-primary hover:text-white cursor-pointer ease-out duration-1000">
          <div className="w-20 h-20 rounded-full bg-secondary relative ">
            <div className="w-15 h-15 rounded-full bg-black absolute top-2.5 left-2.5 relative">
              <AiTwotoneShop size={40} className="absolute top-2.5 left-2.5 text-white"/> 
            </div>
            <h5 className="text-[32px] font-bold font-inter text-center mt-6">33K</h5>
            {/* <p className="w-[170px] font-inter mt-3">Sallers active our site</p> */}
          </div>
        </div>
        <div className="w-[270px] h-[230px]  border-1 border-secondary pt-7.5 pl-[94.5px] hover:bg-primary hover:text-white cursor-pointer ease-out duration-1000">
          <div className="w-20 h-20 rounded-full bg-secondary relative ">
            <div className="w-15 h-15 rounded-full bg-black absolute top-2.5 left-2.5 relative">
              <AiTwotoneShop size={40} className="absolute top-2.5 left-2.5 text-white"/> 
            </div>
            <h5 className="text-[32px] font-bold font-inter text-center mt-6">45.5K</h5>
            {/* <p className="w-[170px] font-inter mt-3">Sallers active our site</p> */}
          </div>
        </div>
        <div className="w-[270px] h-[230px]  border-1 border-secondary pt-7.5 pl-[94.5px] hover:bg-primary hover:text-white cursor-pointer ease-out duration-1000  ">
          <div className="w-20 h-20 rounded-full bg-secondary relative ">
            <div className="w-15 h-15 rounded-full bg-black absolute top-2.5 left-2.5 relative">
              <AiTwotoneShop size={40} className="absolute top-2.5 left-2.5 text-white"/> 
            </div>
            <h5 className="text-[32px] font-bold font-inter text-center mt-6">25K</h5>
            {/* <p className="w-[170px] font-inter mt-3">Sallers active our site</p> */}
          </div>
        </div>
        
        
      </div>
    </Container>
    </>
  )
}
