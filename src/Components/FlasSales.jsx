import {Container} from "./Container"
import { Counter } from "./Counter"
import { Flex } from "./Flex"
import { SecHead } from "./SecHead"

export const FlasSales = () => {
  return (
   <>
   <Container className="lg:mt-[163px] mt-15 pl-2.5">
     
     <div className="lg:flex lg:gap-[120px]">
      <SecHead 
        title="Today's"
        heading="Flash Sales"
      />
      <Counter/>
     </div>

   </Container>
   </>
  )
}
