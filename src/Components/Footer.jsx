import { Container } from "./Container"
import { GrSend } from "react-icons/gr";
import QR from "../assets/QR.png"
import A from "../assets/Ab.png"
import B from "../assets/Ap.png"
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";




export const Footer = () => {
  return (
    <>
        <section className="bg-black lg:h-[440px]">
            <Container>
                <div className="text-white pt-[80px] lg:flex justify-between pl-20">
                    <div>
                        <h5 className="text-2xl font-inter font-bold">Exclusive</h5>
                        <h6 className="mt-6 mb-6 text-[20px] font-medium font-poppins hover:text-primary cursor-pointer">Subscribe</h6>
                        <p className="text-[16px] font-poppins">Get 10% off your first order</p>
                        <div className="relative mt-4">
                            <input type="text" placeholder="Enter your email" className="border-2  w-[217px] h-[48px] pl-4 text-[16px] font-poppins" />
                            <GrSend  className="absolute top-3.5 left-44 text-2xl"/>
                        </div>
                    </div>
                    <div className="w-[175px] mt-10 lg:mt-0">
                        <h6 className="mb-6 text-[20px] font-medium font-poppins hover:text-primary cursor-pointer">Support</h6>
                        <p className=" mb-4 text-[16px] font-poppins">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className=" mb-4 text-[16px] font-poppins">exclusive@gmail.com</p>
                        <p className="text-[16px] font-poppins">+88015-88888-9999</p>
                        
                    </div>
                    <div className="w-[123px] mt-10 lg:mt-0">
                        <h6 className="mb-6 text-[20px] font-medium font-poppins hover:text-primary cursor-pointer">Account</h6>
                        <p className=" mb-4 text-[16px] font-poppins hover:text-primary cursor-pointer">My Account</p>
                        <p className=" mb-4 text-[16px] font-poppins hover:text-primary cursor-pointer">Login / Register</p>
                        <p className=" mb-4 text-[16px] font-poppins hover:text-primary cursor-pointer">Cart</p>
                        <p className=" mb-4 text-[16px] font-poppins hover:text-primary cursor-pointer">Wishlist</p>
                        <p className="text-[16px] font-poppins hover:text-primary cursor-pointer">Shop</p>
                        
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <h6 className="mb-6 text-[20px] font-medium font-poppins hover:text-primary cursor-pointer">Quick Link</h6>
                        <p className=" mb-4 text-[16px] font-poppins hover:text-primary cursor-pointer">Privacy Policy</p>
                        <p className=" mb-4 text-[16px] font-poppins hover:text-primary cursor-pointer">Terms Of Use</p>
                        <p className="mb-4 text-[16px] font-poppins hover:text-primary cursor-pointer">FAQ</p>
                        <p className="text-[16px] font-poppins hover:text-primary cursor-pointer">Contact</p>
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <h6 className="mb-6 text-[20px] font-medium font-poppins hover:text-primary cursor-pointer">Download App</h6>
                        <p className=" pb-2 text-[12px] font-medium font-poppins hover:text-primary cursor-pointer">Save $3 with App New User Only</p>
                        <div className="flex lg:justify-between gap-2">
                            <div>
                                <img src={QR} alt="" />
                            </div>
                            <div>
                                <div className="pb-2.5"><img src={A} alt="" /></div>
                                <div><img src={B} alt="" /></div>
                            </div>
                        </div>
                        <div className="flex lg:justify-between gap-8 pb-5 text-2xl mt-[26px]">
                            <div className="hover:text-primary cursor-pointer"><FaFacebookF /></div>
                            <div className="hover:text-primary cursor-pointer"><FaTwitter /></div>
                            <div className="hover:text-primary cursor-pointer"><FaInstagram /></div>
                            <div className="hover:text-primary cursor-pointer"><FaLinkedinIn /></div>
                        </div>
                    </div>                    
                </div>
            </Container>
            <div>
                <div className="border-b-1 border-secondary mt-15"/>
                <p className="text-secondary text-[16px] text-center pt-4">&copy;Copyright Anick 2026. All right reserved</p>  
            </div> 
           
            
            
            
        </section>
    </>
  )
}
