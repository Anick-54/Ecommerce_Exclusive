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





export const NavBar = () => {

  
  const[show, setShow] = useState(false)
  const handleClick =()=>{
    setShow(!show)
  }



  return (
    <> 
    <nav className="pt-4 lg:pt-10 pb-4 border-b-1 border-[#b3b3b3] relative">
      <Container>
        <Flex className="flex-wrap lg:justify-between items-center">
          <div className="px-2 w-[25%]">
            <img src={Logo} alt="#"/>
          </div>
          <div className={`${show ? "block" : "hidden"} lg:flex items-center justify-between lg:w-[75%] absolute top-15 bg-black text-white w-full px-2`}>
            <div>
              <List className=" flex-wrap lg:flex lg:gap-12">
                <ListItem>Home</ListItem>
                <ListItem>Contact</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Sign Up</ListItem>
              </List>
            </div>
            <div className="flex-wrap lg:flex gap-6 items-center">
              <div className="relative">
                <input type="text" className="bg-[#F5F5F5] py-2.5 pl-5 pr-3 text-sm w-[243px]" placeholder="What are you looking for?"/>
                <IoSearch  className="absolute top-2 right-2.5 text-2xl"/>
              </div>
              
              <div className="flex items-center gap-4 text-3xl">
                <IoMdHeartEmpty / >
                <IoCartOutline />
              </div>
            </div>
          </div>
        </Flex>
        <FaBarsStaggered onClick={handleClick} className="lg:hidden text-2xl absolute right-2 top-3" ></FaBarsStaggered>
      </Container>
    </nav>
    
    
    </>
  )
}
