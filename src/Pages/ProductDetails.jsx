import { Link, useParams } from "react-router-dom"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { CartReducer } from "../Cart/CartSlice";





export const ProductDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const item = useSelector((state) =>
    state.allProducts?.value?.find((p) => p.id === parseInt(id))
  );

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-8 mb-60">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Product Not Found</h2>
          <Link to="/" className="underline ">
            Return To Home Page
          </Link>
        </div>
      </div>
    );
  }

  // const imageUrl = item.images?.[0] || item.thumbnail || "";
  // const price = Number(item.price) || 0;
  // const originalPrice = (price / (1 - (Number(item.discountPercentage) || 0) / 100)).toFixed(2);
  // const formattedPrice = price.toFixed(2);


  return (
    <div className="container mx-auto px-4 py-8 mb-50">
      <div className="flex">
        <Link to="/shop" className="mb-8 inline-block font-poppins font-bold">
          <div className="flex gap-2 items-center">
            <FaArrowAltCircleLeft />
            <h1>Back to The Products</h1>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="shadow-md p-4 rounded w-full max-w-[600px]">
          <img src={item.thumbnail} alt="ProductImage" />
        </div>
        <div className="pl-0 md:pl-6">
          <div>
            <h1 className="text-3xl font-bold font-poppins mb-4">{item.title}</h1>
            <p className="text-gray-600 font-poppins mb-6">{item.description}</p>
          </div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold font-poppins">${item.price}</h1>
            <h2 className="text-secondary font-bold py-2 font-poppins text-[16px] line-through"></h2>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold font-poppins mb-2">Category</h3>
            <span className="bg-zinc-200 rounded font-bold mb-2">{item.category}</span>
          </div>
          <button onClick={() => dispatch(CartReducer(item))} className="w-full md:w-50 bg-zinc-200 rounded-md flex items-center justify-center gap-2 hover:bg-black hover:text-white cursor-pointer duration-500 ease-linear">
            <FiShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
