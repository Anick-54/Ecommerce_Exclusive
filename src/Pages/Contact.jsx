import { BredCrumb } from "../Components/BredCrumb"
import { Container } from "../Components/Container"
import { IoCall } from "react-icons/io5";
import { IoMailUnread } from "react-icons/io5";



export const Contact = () => {
  return (
    <>
    <Container className='mt-10'>
      <BredCrumb/>
      <div className="mt-20 mb-[140px] lg:flex gap-[30px]">
        <div className="w-[340px] pl-12 lg:pl-0">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-primary relative">
              <IoCall className="absolute top-3 left-3 text-white"/>
            </div>
            <div>
              <h4 className="text-[16px] font-medium">Call To Us</h4>
            </div>
          </div>
          <div>
            <h5 className="mt-6 mb-4 text-[14px]">We are available 24/7, 7 days a week.</h5>
            <p className="text-[14px]">Phone: +8801611112222</p>
            <div className="w-[270px] border-b bg-secondary mb-8 mt-8"></div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-primary relative">
              <IoMailUnread className="absolute top-3 left-3 text-white"/>
            </div>
            <div>
              <h4 className="text-[16px] font-medium">Write To Us</h4>
            </div>
          </div>
          <h4 className="w-[250px] mt-6 text-[14px]">Fill out our form and we will contact you within 24 hours.</h4>
          <h4 className="mt-4 text-[14px]">Emails: customer@exclusive.com</h4>
          <h4 className="text-14px">Emails: support@exclusive.com</h4>
        </div>
        <div className="w-[737px]">
          <div className="lg:flex gap-4 text-center mt-5 pl-12 lg:pl-0">
            <div className="w-[235px] h-[50px] bg-gray-100 pt-2.5">
              <input type="text" placeholder="Your Name *" className="focus outline-none" />
            </div>
            <div className="w-[235px] h-[50px] bg-gray-100 pt-2.5">
              <input type="email" placeholder="Your Email *" className="focus outline-none"/>
            </div>
            <div className="w-[235px] h-[50px] bg-gray-100 pt-2.5">
              <input type="Phone" placeholder="Your Phone *" className="focus outline-none"/>
            </div>
          </div>
          <div className="w-[737px] h-[207px] bg-gray-100 mt-8 pt-2.5 pl-5 mb-8 ">
            <input type="text" placeholder="Your Message" className="focus outline-none"/>
          </div>
          <button className="ml-130  bg-primary text-white text-[16px] w-[215px] h-[56px] rounded-md font-medium hover:bg-red-700 cursor-pointer">Send Message</button>
        </div>
      </div>

    </Container>
    </>
  )
}
