import { countDownDateAndTime } from 'countdown-date-time';                           
import { Flex } from './Flex';
import { Images } from './Images';
import Dot from "../assets/Dot.png"
import { useEffect, useState } from 'react';

export const Counter = ({className}) => {


    const conduct_date = '2026-06-30 16:54:00';

    const [count, setCount] = useState({});

    useEffect(() => {
        const updateCount = () => {
            setCount(countDownDateAndTime(conduct_date));
        };

        updateCount(); 
        const intervalId = setInterval(updateCount, 1000);

        return () => clearInterval(intervalId);
    }, []);       
  return (
    <>
    <Flex className={`${className} lg:gap-[38px] gap-5 items-center text-center lg:mt-20 mt-3`}>
        <div>
            <h1 className='text-[12px] font-medium font-inter'>Day's</h1>
            <h2 className='text-[32px] font-bold font-poppins'>{count.days}</h2>
        </div>
        <Images src={Dot}/>
        <div>
            <h1 className='text-[12px] font-medium font-inter'>Hours</h1>
            <h2 className='text-[32px] font-bold font-poppins'>{count.hours}</h2>
        </div>
        <Images src={Dot}/>
        <div>
            <h1 className='text-[12px] font-medium font-inter'>Minutes</h1>
            <h2 className='text-[32px] font-bold font-poppins'>{count.minutes}</h2>
        </div>
        <Images src={Dot}/>
        <div>
            <h1 className='text-[12px] font-medium font-inter'>Seconds</h1>
            <h2 className='text-[32px] font-bold font-poppins'>{count.seconds}</h2>
        </div>     
    </Flex>
    </>
  )
}
