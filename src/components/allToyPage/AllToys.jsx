import { useEffect, useState } from "react";
import AllToysTable from "./AllToysTable";

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead className=" text-black text-xl">
                    <tr>
                        <th>Serial</th>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-neutral-600 font-bold">
                            {
                                allToys.slice(0, 20).map((toys, i )=> <AllToysTable
                                    key={toys._id}
                                    toys={toys}
                                    i={i}
                                ></AllToysTable>)
                            }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;