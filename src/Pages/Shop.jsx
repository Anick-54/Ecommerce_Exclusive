import { useEffect, useState } from "react";
import { BredCrumb } from "../Components/BredCrumb"
import { Container } from "../Components/Container"
import { List } from "../Components/List"
import { ListItem } from "../Components/ListItem"
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { Pagination } from "../Components/Pagination";
import { Skeleton } from "../Components/Skeleton";
import { useDispatch } from 'react-redux'
import { ProductReducer} from "../Slices/ProductSlice";


export const Shop = () => {

  const [optionShow, setOptionShow] = useState(12);
  const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);
  
    const dispatch = useDispatch ();

  async function getAllProducts() {
    try {
      const { data } = await axios.get('https://dummyjson.com/products');

    //   setProducts(data.products);
      dispatch(ProductReducer(data.products));
    } catch (err) {
      console.error('Failed to fetch products:', err);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Container className="mt-10 mb-10">
        <BredCrumb/>
        <div className="lg:flex">
          <div className="w-[25%]! pl-12 lg:pl-0 h-50">
            <List className="lg:mt-10 text-[16px] mt-4 lg:leading-9.5 w-58.25!">
              <ListItem className='text-[20px] font-poppins font-bold'>Shop By Catagory</ListItem>
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
          <div className="w-[75%]">
            <div className="flex justify-end gap-2 pt-10 lg:pt-0 ">
              <h5 className="mt-1.5 font-bold font-poppins">Show :</h5>
              <select
                onChange={(e) => setOptionShow(Number(e.target.value))}
                id="#"
                className="py-1 px-2 border border-1 mb-5 cursor-pointer"
              >
                <option value={3}>3</option>
                <option value={6}>6</option>
                <option value={9}>9</option>
                <option value={12}>12</option>
              </select>
            </div>

            {loading ? (
              <div className="lg:flex lg:flex-wrap pl-12 lg:pl-0 lg:justify-between">
                {Array.from({ length: optionShow }).map((_, index) => (
                  <Skeleton key={index} />
                ))}
              </div>
            ) : (
              <Pagination itemsPerPage={optionShow}/>
            )}
          </div>
        </div>
      </Container>
    </>
  )
}