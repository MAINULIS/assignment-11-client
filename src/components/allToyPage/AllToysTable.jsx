import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const notify = () => toast('You have to log in first to view details');

const AllToysTable = ({ toys,i }) => {
    const { user } = useContext(AuthContext);
    const { _id, sellerName, subCategory, availableQuantity, name, price } = toys;

    return (
        <tr> <td>{1+ i}</td>
            <td className="py-4 justify-center">{sellerName}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <Link onClick={!user && notify}
                to={`/details/${_id}`}><span className=" badge badge-info text-white hover:bg-cyan-600  mt-3">View Details</span>
            </Link>
        </tr>
    );
};
export default AllToysTable;