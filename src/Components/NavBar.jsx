import { Container } from "./Container"
import { Flex } from "./Flex"
import Logo from "../assets/Exclusive.png"
import { List } from "./List"
import { ListItem } from "./ListItem"
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react"
import { Link } from "react-router-dom"



export const NavBar = () => {

  
  const[show, setShow] = useState(false)
  const handleClick =()=>{
    setShow(!show)
  }
  return (
    <> 
    <nav className="pt-4 lg:pt-10 pb-4 border-b-1 border-[#b3b3b3] relative">
      <Container>
        <Flex className="flex-wrap lg:justify-betwee items-center">
          <div className="px-2 w-[25%]">
            <Link to="/"><img src={Logo} alt="#"/></Link>
          </div>
          <div>
            <div className="lg:hidden block w-[50%]">
                <input type="text" className="bg-[#F5F5F5] text-black py-2 pl-5 pr-3 text-sm " placeholder=""/>
                <IoSearch  className="absolute top-5.5 right-20 text-black lg:right-2.5 text-2xl"/>
              </div>
          </div>
          <div className={`${show ? "block" : "hidden"} lg:flex items-center justify-between lg:w-[75%] absolute top-15 lg:static z-20 lg:bg-transparent bg-black text-white lg:text-black
           w-full px-2`}>
            <div>
              <List className=" flex-wrap lg:flex lg:gap-12 leading-10">
                <ListItem className="customize">
                  <Link to="/">Home</Link>
                </ListItem>
                <ListItem className="customize">
                  <Link to="/contact">Contact</Link>
                </ListItem>
                <ListItem className="customize">
                  <Link to="/about">About</Link>
                </ListItem>
                <ListItem className="customize">
                  <Link to="/shop">Shop</Link>
                </ListItem>
                <ListItem className="customize">
                  <Link to="/singup">SingUp</Link>
                </ListItem>
                
              </List>
            </div>
            <div className="flex-wrap lg:flex gap-6 items-center">
              <div className="relative hidden lg:block">
                <input type="text" className="bg-[#F5F5F5] text-black py-2.5 pl-5 pr-3 text-sm w-[243px]" placeholder="What are you looking for?"/>
                <IoSearch  className="absolute top-2 right-25 text-black lg:right-2.5 text-2xl"/>
              </div>
              
              <div className="flex items-center gap-4 text-3xl">
                <IoMdHeartEmpty / >
                <IoCartOutline />
              </div>
            </div>
          </div>
        </Flex>
        <FaBarsStaggered onClick={handleClick} className="lg:hidden text-2xl absolute right-2 top-5.5" ></FaBarsStaggered>
      </Container>
    </nav>
    </>
  )
}
