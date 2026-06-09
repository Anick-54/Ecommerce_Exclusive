

export const Card2 = ({img, devName}) => {
  return (
    <>
    <div className=" group w-[170px] h-[145px] text-black flex justify-center items-center border-1 border-secondary gap-[16px] hover:bg-primary hover:text-white duration-500 ease-linear cursor-pointer">
        <div>
            <img src={img} alt="" className="filter hover:brightness-0 hover:invert group-hover:brightness-0 group-hover:invert"/>
            <h5 className="pt-4">{devName}</h5> 
        </div>
    </div>
    </>
  )
}
