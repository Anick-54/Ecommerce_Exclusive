import { Container } from "./Container"
import { Flex } from "./Flex"
import { List } from "./List"
import { ListItem } from "./ListItem"
import Slider from "react-slick";



export const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


  return (
    <>
    <Container>
        <Flex>
            <div>
                <List>
                    <ListItem>Woman’s Fashion</ListItem>
                    <ListItem>Men’s Fashion</ListItem>
                    <ListItem>Electronics</ListItem>
                    <ListItem>Home & Lifestyle</ListItem>
                    <ListItem>Medicine</ListItem>
                    <ListItem>Sports & Outdoor</ListItem>
                    <ListItem>Baby’s & Toys</ListItem>
                    <ListItem>Groceries &  </ListItem>
                    <ListItem>Health & Beauty </ListItem>
              </List>
            </div>
            <div>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>

            </div>
        </Flex>
    </Container>



    </>
  )
}
