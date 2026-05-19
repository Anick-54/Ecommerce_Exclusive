



export const List = ({children, className}) => {
  return (
    <div>
        <ul className={`${className}`}>
            {children}
        </ul>

    </div>
  )
}
