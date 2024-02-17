import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const notify = () => toast('You have to log in first to view details');

const AllToysTable = ({ toys }) => {
    const { user } = useContext(AuthContext);
    const { _id, sellerName, subCategory, availableQuantity, name, price } = toys;

    return (
        <tr>
            <td className="py-4 justify-center">{sellerName}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <Link onClick={!user && notify}
                to={`/details/${_id}`}><span className=" badge badge-info text-white  mt-3">View Details</span>
            </Link>
        </tr>
    );
};

export default AllToysTable;