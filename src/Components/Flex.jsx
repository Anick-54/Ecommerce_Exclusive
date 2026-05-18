

export const Flex = ({ children, className}) => {
  return (
    <div className={`${className} flex justify-between items-center`}>
      {children}
    </div>
  )
}
