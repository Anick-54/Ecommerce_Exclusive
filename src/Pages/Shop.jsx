import { useEffect } from "react";
import { BredCrumb } from "../Components/BredCrumb"
import { Card4 } from "../Components/Card4";
import { Container } from "../Components/Container"
import { List } from "../Components/List"
import { ListItem } from "../Components/ListItem"
import { IoIosArrowForward } from "react-icons/io";




export const Shop = () => {

    useEffect ( () => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(console.log);
    }, [])







  return (
    <>
        <Container className="mt-10">
            <BredCrumb/>
            <div className="flex justify-between">
                <div className="w-[233px]">
                    <List className="lg:mt-10 text-[16px] mt-4 lg:leading-[38px]">
                        <ListItem className="flex justify-between items-center">Woman's Fashion <IoIosArrowForward className="text-2xl" /></ListItem>
                        <ListItem className="flex justify-between items-center">Men's Fashion <IoIosArrowForward className="text-2xl" /></ListItem>
                        <ListItem>Electronics</ListItem>
                        <ListItem>Home & Lifestyle</ListItem>
                        <ListItem>Medicine</ListItem>
                        <ListItem>Sports & Outdoor</ListItem>
                        <ListItem>Baby's & Toys</ListItem>
                        <ListItem>Groceries &</ListItem>
                        <ListItem>Health & Beauty</ListItem>
                    </List>
                </div>
                <div>
                    <Card4
                        img=''
                        heading='aahsiahdusdm '
                        price='$50'
                        prices='$75'
                        rating='4.5'
                    />
                </div>
            </div>
        </Container>
    </>
  )
}
