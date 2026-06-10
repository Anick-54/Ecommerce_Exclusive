import { Container } from "./Container";
import MS1 from "../assets/MS1.png";
import { Counter } from "./Counter";

export const Music = () => {
  return (
    <Container>
      <div
        className=" mt-[106px] mb-[106px] h-[500px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${MS1})` }}
      >
        <div className="lg:pl-[56px] pt-[70px] pl-3.5">
            <h5 className="text-[16px] font-semibold text-[#00FF66]">Categories</h5>
            <h2 className="text-white lg:text-5xl text-3xl font-semibold w-[443px] leading-15 font-poppins mt-8">Enhance Your Music Experience</h2>
            <Counter className="text-white mt-8!"/>
            <button className="w-[171px] h-[56px] rounded-[4px] bg-[#00FF66] mt-10 hover:bg-green-600 text-[16px] text-white font-semibold cursor-pointer">Buy Now!</button>
        </div>
      </div>
    </Container>
  );
};