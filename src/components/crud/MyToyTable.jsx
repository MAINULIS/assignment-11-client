import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const MyToyTable = ({toys, handleDelete}) => {
    const {_id, pictureURL,subCategory, rating, name, price} = toys;
    return (
        <tr className="py-4"> 
            <td><img className="w-32" src={pictureURL} alt="" /></td>
            <td className="">{name}</td>
            <td>{subCategory}</td>
            <td><p className="my-3 w-24"><Rating className='h-10' value={rating} readOnly /></p></td>
            <td>$ {price}</td>
            <td><Link  className="badge badge-accent py-3 px-3 text-white">Update</Link></td>
            <td><Link onClick={() => handleDelete(_id)} className="badge badge-error py-3 px-3 text-white ">Delete</Link></td>
        </tr>
    );
};

export default MyToyTable;