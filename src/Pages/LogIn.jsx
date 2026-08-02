import { BredCrumb } from "../Components/BredCrumb"
import { Container } from "../Components/Container"
import S from "../assets/SU.png"
import Goole from "../assets/Google.png"
import { Link } from "react-router"


export const LogIn = () => {
  return (
    <>
      <Container className="mt-10 ">
        <BredCrumb/>
        <div className="mt-10 mb-[140px] lg:flex gap-35">
          <div>
            <div className="lg:w-[805px] lg:h-[781px]">
              <img src={S} alt="SU" />
            </div>
          </div>

          <div className="mt-[125px] pl-1">
            <div className="">
              <h2 className="text-4xl font-medium font-inter mb-6">Log in to Exclusive</h2>
              <p className="text-[16px] mb-12">Enter your details below</p>
            </div>
            {/* <div>
              <input type="text" placeholder="Enter Your Name" className="w-[370px] h-8 border-b" />

            </div> */}
            <div className="mt-10 mb-10">
              <input type="email" placeholder="Email Or Phone Number" className="w-[370px] h-8 border-b focus:outline-none" />

            </div>
            <div>
              <input type="password" placeholder="Password" className="w-[370px] h-8 border-b focus:outline-none" />

            </div>
            <div className="flex justify-between mt-10 ">
              <button className="bg-primary text-white w-[143px] h-14 rounded-md hover:bg-red-700 cursor-pointer">Log In</button>
              <button className="border-1 border-secondary  rounded-md w-[143px] h-14 hover:bg-secondary cursor-pointer">Forget Password</button>
            </div>
            
          </div>
        </div>
      </Container>


    </>
  )
}
