


export const ListItem = ({children, className}) => {
  return (
    <div>
        <li className={`${className}`}>
            {children}
        </li>
    </div>
  )
}
