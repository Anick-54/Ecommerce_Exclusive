

export const Container = ({ children, className }) => {
  return (
    <div className={`${className} w-[1170px] mx-auto`}>
      {children}
    </div>
  )
}
