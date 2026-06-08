import { Card } from "./Card"
import {Container} from "./Container"
import { Counter } from "./Counter"
import { SecHead } from "./SecHead"
import Gamepad from "../assets/F1.png"
import KeyBoard from "../assets/F2.png"
import Monitor from "../assets/F3.png"
import Chair from "../assets/F4.png"



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
    <div className="mt-10 lg:flex justify-between">
      <div>
        <Card
          img={Gamepad}
          heading='HAVIT HV-G92 Gamepad'
          price='$120'
          rating='(88)'
        />
      </div>
      <div>
        <Card
          img={KeyBoard}
          heading='AK-900 Wired Keyboard'
          price='$960'
          rating='(75)'
        />
      </div>
      <div>
        <Card
          img={Monitor}
          heading='IPS LCD Gaming Monitor'
          price='$370'
          rating='(99)'
        />
      </div>
      <div>
        <Card
          img={Chair}
          heading='S-Series Comfort Chair '
          price='$375'
          rating='(99)'
        />
      </div>
    </div>

   </Container>
   </>
  )
}
