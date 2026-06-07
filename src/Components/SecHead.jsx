
export const SecHead = ({ className, title, heading }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className=" flex f items-center w-5 h-10 bg-primary rounded-[4px]">
          <h5 className={`${className}  text-primary pl-10 font-semibold font-poppins`}>
          {title}
        </h5>
        </div>
        <h5 className={`${className} text-[36px] font-semibold font-inter mt-6`}>
          {heading}
        </h5>
      </div>
    </div>
  );
};