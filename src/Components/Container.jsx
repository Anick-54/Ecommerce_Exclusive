

export const Container = ({ children, className }) => {
  return (
    <div className={`${className} w-[1170px] mx-auto lg:px-0 px-2`}>
      {children}
    </div>
  )
}
