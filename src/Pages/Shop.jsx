import { useEffect, useState } from "react";
import { BredCrumb } from "../Components/BredCrumb"
import { Card4 } from "../Components/Card4";
import { Container } from "../Components/Container"
import { List } from "../Components/List"
import { ListItem } from "../Components/ListItem"
import { IoIosArrowForward } from "react-icons/io";




export const Shop = () => {
    const [loading, setLoading] = useState (true)

   const [products, setProducts] = useState ([])

    useEffect ( () => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then( (data) => setProducts(data.products) );
        setLoading (false)

   
    }, [])



  return (
    <>
        <Container className="mt-10 mb-10">
            <BredCrumb/>
            <div className="lg:flex lg:gap-10">
                <div className="w-[233px]! pl-12 lg:pl-0 h-50">
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
                <div className="lg:flex lg:flex-wrap gap-10 mt-10 pl-12 lg:pl-0 ">
                    {   
                        loading ?
                        <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
                            <div className="flex animate-pulse space-x-4">
                                <div className="size-10 rounded-full bg-gray-200" />
                                <div className="flex-1 space-y-6 py-1">
                                <div className="h-4 rounded bg-gray-200" />
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                    <div className="col-span-2 h-4 rounded bg-gray-200" />
                                    <div className="col-span-1 h-4 rounded bg-gray-200" />
                                    </div>
                                    <div className="h-2 rounded bg-gray-200" />
                                </div>
                                </div>
                            </div>
                        </div>
                        :
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
