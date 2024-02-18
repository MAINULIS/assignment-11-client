import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyToyTable from "./MyToyTable";
import Swal from "sweetalert2";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [control, setControl] = useState(false);

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
    }, [url, control])

    // Delete an element
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${id}`,{
                    method:'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your Toy has been deleted.",
                          icon: "success"
                        });
                        
                        setControl(!control)
                    }
                })
            }
          });
    }

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
                    handleDelete = {handleDelete}
                ></MyToyTable>)
            }
            </tbody>
        </table>
    </div>
    );
};

export default MyToys;