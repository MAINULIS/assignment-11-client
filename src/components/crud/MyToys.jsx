import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyToyTable from "./MyToyTable";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    const url = `http://localhost:5000/toys?sellerEmail=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers:{
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [url])


    return (
        <div className="overflow-x-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900">This is Your Toys Page</h2>
        <table className="table table-xs mt-12">
            <thead className=" text-black text-xl">
                <tr>
                    <th>Picture</th>
                    <th>Toy Name</th>
                    <th>Sub Category</th>
                    <th>Ratings</th>
                    <th>Price</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody className="text-neutral-600 font-bold">
            {
                myToys.map((toys) => <MyToyTable
                    key= {toys._id}
                    toys= {toys}
                ></MyToyTable>)
            }
            </tbody>
        </table>
    </div>
    );
};

export default MyToys;