import { Container } from "./Container"
import { SecHead } from "./SecHead"
import N1 from "../assets/N1.png"
import N2 from "../assets/N2.png"
import N3 from "../assets/N3.png"
import N4 from "../assets/N4.png"

export const New = () => {
  return (
    <>
        <Container>
            <div className="pl-2.5">
                <SecHead
                title="Featured"
                heading="New Arrival"
                />
            </div>
            <div className="mt-10 mb-[140px] lg:flex justify-between">
                <div>
                    <div className=" bg-cover bg-center w-[570px] h-[600px]" style={{backgroundImage: `url(${N1})`}}>
                        <div className="pt-[446px] pl-[32px]">
                            <h5 className="text-2xl font-semibold font-inter text-white">PlayStation 5</h5>
                            <p className="text-[14px] pt-4 pb-4 leading-5.5 font-poppins text-white w-[242px]">Black and White version of the PS5 coming out on sale.</p>
                            <p className="text-white text-[16px] font-medium  font-poppins underline">Shop Now</p>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="bg-cover bg-center w-[570px] h-[284px] mt-8 lg:mt-0" style={{backgroundImage : `url(${N2})`}}>
                        <div className="pt-[138px] pl-6">
                            <h5 className="text-2xl font-semibold font-inter text-white">Women’s Collections</h5>
                            <p className="text-[14px] pt-4 pb-4 leading-5.5 font-poppins text-white w-[255px]">Featured woman collections that give you another vibe.</p>
                            <p className="text-white text-[16px] font-medium  font-poppins underline">Shop Now</p>

                        </div>
                    </div>
                    <div className="mt-8 flex justify-between">
                        <div className="bg-cover bg-center w-[270px] h-[284px]" style={{backgroundImage : `url(${N3})`}}>
                            <div className="pt-[175px] pl-6">
                                <h5 className="text-2xl font-semibold font-inter text-white">Speakers</h5>
                                <p className="text-[14px] text-white pt-2 pb-2">Amazon wireless speakers</p>
                                <p className="text-white text-[16px] font-medium  font-poppins underline">Shop Now</p>
                            </div>
                        </div>
                        <div className="bg-cover bg-center w-[270px] h-[284px]" style={{backgroundImage : `url(${N4})`}}>
                        </div>
                    </div>
                </div>
            </div>
        </Container>






    </>
  )
}
