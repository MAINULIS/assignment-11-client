import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const notify = () => toast('You have to log in first to view details');

const GalleryCard = ({toy}) => {
    const {user} = useContext(AuthContext);
    const {_id, pictureURL, subCategory,shortDescription, price} = toy;
    return (
        <Link onClick={!user && notify}  to={`/details/${_id}`}>
        <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
            <img className="h-72" src={pictureURL} alt="" />
            <div className='bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-slate-200 absolute inset-0 transition-opacity duration-200 flex flex-col'>
                    <p className="text-2xl font-semibold">{subCategory}</p><br />
                    <p >{shortDescription}</p>
                    <div className="mt-auto flex justify-between">
                      <p>${ price} </p>
                      <p className="font-semibold text-cyan-500">Click To See Details</p>
                    </div>
                </div>
            
        </div>
        </Link>
    );
};

export default GalleryCard;