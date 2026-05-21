

export const Flex = ({ children, className}) => {
  return (
    <div className={`${className} flex`}>
      {children}
    </div>
  )
}
