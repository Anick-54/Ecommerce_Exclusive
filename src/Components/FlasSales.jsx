import {Container} from "./Container"
import { Counter } from "./Counter"
import { Flex } from "./Flex"
import { SecHead } from "./SecHead"

export const FlasSales = () => {
  return (
   <>
   <Container className="lg:mt-[163px] mt-15 pl-2.5">
     
      <SecHead>Todays</SecHead>
      <div className="lg:flex gap-10 mt-6 gap-x-[120px]">
        <div className="text-[36px] font-semibold font-inter">
          <h1>Flash Sales</h1>
        </div>
        <Counter/>
        
      </div>
      
     

   </Container>
   </>
  )
}
