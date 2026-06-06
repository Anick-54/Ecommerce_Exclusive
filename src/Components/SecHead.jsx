


export const SecHead = ({className, children}) => {
  return (
    <>
    <div className="flex justify-between items-center">
      <div>
        <h5 className={`${className} flex items-center text-primary border-l-20 rounded-sm pl-4 w-2.5 h-10`}>{children}</h5>
      </div>
    </div>
      
    </>
  )
}
