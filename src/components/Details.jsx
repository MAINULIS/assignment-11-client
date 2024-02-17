import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Details = () => {
    const toyInfo = useLoaderData();
    const {subCategory, pictureURL, name, sellerName, price, rating, availableQuantity, detailDescription} = toyInfo;
    return (
        <div className="md:flex justify-center md:mx-36 gap-8 p-5 ">
            <div className="items-center ">
            <img className="h-full w-96"  src={pictureURL} alt="" />
            </div>
            <div className="mt-7 md:mt-0 text-gray-500">
                <h2 className="text-3xl font-bold text-black">{name}</h2>
                <p className="my-3 w-28"><Rating className='h-10' value={rating} readOnly /></p>

                <p><span className=" font-medium text-black">Quantity: </span><span className="text-green-700 font-medium">{availableQuantity}</span></p>
                <p><span className=" font-medium text-black">Category: </span> {subCategory}</p>
                <p> <span className=" font-medium text-black">SellerName: </span>{sellerName}</p>
                <p className="my-3 "><span className="text-2xl font-bold text-indigo-800">${price}</span> <sub>${parseInt(price)+ 3}</sub></p>
                <p>{detailDescription}</p>
            </div>
        </div>
    );
};

export default Details;