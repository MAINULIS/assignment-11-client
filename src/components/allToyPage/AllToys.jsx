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
        <div>
            {
                allToys.map(toys => <AllToysTable
                    key={toys._id}
                    toys={toys}
                ></AllToysTable>)
            }

        </div>
    );
};

export default AllToys;