


export const ListItem = ({children, className}) => {
  return (
    <div>
        <li className={`${className} capitalize`}>
            {children}
        </li>
    </div>
  )
}
