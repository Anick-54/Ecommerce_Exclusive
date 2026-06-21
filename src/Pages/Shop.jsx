import { useEffect, useState } from "react";
import { BredCrumb } from "../Components/BredCrumb"
import { Card4 } from "../Components/Card4";
import { Container } from "../Components/Container"
import { List } from "../Components/List"
import { ListItem } from "../Components/ListItem"
import { IoIosArrowForward } from "react-icons/io";




export const Shop = () => {

   const [products, setProducts] = useState ([])

    useEffect ( () => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then( (data) => setProducts(data.products) );
    }, [])







  return (
    <>
        <Container className="mt-10 mb-10">
            <BredCrumb/>
            <div className="flex gap-10">
                <div className="w-[233px]! h-50">
                    <List className="lg:mt-10 text-[16px] mt-4 lg:leading-[38px] w-[233px]!">
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
                <div className="flex flex-wrap gap-10">
                    {
                        products.map((item) => (
                            <Card4 key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </Container>
    </>
  )
}
