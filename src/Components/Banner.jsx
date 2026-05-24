import { Container } from "./Container"
import { Flex } from "./Flex"
import { List } from "./List"
import { ListItem } from "./ListItem"
import { Images } from "./Images"
import banner from "../assets/banner.jpg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export const Banner = () => {
  return (
    <>
      <Container>
        <Flex className="gap-10">

          {/* Sidebar */}
          <div className="w-[233px] border-r-1 border-[#b3b3b3]">
            <List className=" mt-10 text-[16px] leading-10">
              <ListItem>Woman's Fashion</ListItem>
              <ListItem>Men's Fashion</ListItem>
              <ListItem>Electronics</ListItem>
              <ListItem>Home & Lifestyle</ListItem>
              <ListItem>Medicine</ListItem>
              <ListItem>Sports & Outdoor</ListItem>
              <ListItem>Baby's & Toys</ListItem>
              <ListItem>Groceries &</ListItem>
              <ListItem>Health & Beauty</ListItem>
            </List>
          </div>
          <div className="flex-1 overflow-hidden mt-10">
            <Swiper
              modules={[ Pagination, Navigation]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              loop={!true}
              speed={600}
              className="w-full h-full [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet-active]:opacity-100 mb-10 [&_.swiper-button-next]:text-white [&_.swiper-button-prev]:text-white"
            >
              {[...Array(6)].map((_, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full">
                    <Images src={banner} className="w-full h-full object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </Flex>
      </Container>
    </>
  )
}