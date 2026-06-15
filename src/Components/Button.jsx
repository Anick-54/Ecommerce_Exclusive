

export const Button = ({children, className}) => {
  return (
    <div className={`${className} bg-black text-[16px] font-medium text-white w-[270px] h-[41px] text-center pt-2 rounded-b-sm`}>
        {children}
    </div>
  )
}
