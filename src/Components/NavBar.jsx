import { Container } from "./Container"
import { Flex } from "./Flex"
import Logo from "../assets/Exclusive.png"

export const NavBar = () => {
  return (
    <>
    <nav>
      <Container>
        <Flex>
          <div>
            <img src={Logo} alt="" />
          </div>
        </Flex>
      </Container>
    </nav>
    
    
    </>
  )
}
