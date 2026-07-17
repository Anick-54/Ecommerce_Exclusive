import { Link } from "react-router"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";





export const ProductDetails = () => {

  // const dispatch = useDispatch ();


  // const product = useSelector ((state) =>
  //   state.product.items.find((p)=> p.id === parseInt(id)));
 

  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <div className="flex">
        <Link to="/shop" className="mb-8 inline-block font-poppins font-bold">
          <div className="flex gap-2 items-center">
            <FaArrowAltCircleLeft />
            <h1>Back to The Products</h1>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="shadow-md p-4 rounded w-[600px]">
          <img src={""} alt="" />
        </div>
        <div className="pl-25">
          <div>
            <h1 className="text-3xl font-bold font-poppins mb-4">Product Title</h1>
            <p className="text-gray-600 font-poppins mb-6">Product Description</p>
          </div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold font-poppins">Product Price</h1>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold font-poppins mb-2">Category</h3>
            <span className="font-semibold font-poppins mb-2">Category</span>
          </div>
          <button className=" w-full md:w-50 bg-zinc-200 rounded-md flex items-center justify-center gap-2 hover:bg-black hover:text-white cursor-pointer duration-500 ease-linear"> <FiShoppingCart />
            Add to Cart
          </button>
        </div>
        
      </div>
      
    </div>
    </>
  )
}
