import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
const Gallery = () => {
    const [toys, setToys] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => setToys(data))
    },[])
    return (
      <div  className="md:mx-4">
        <h2 className="text-center font-bold text-4xl mt-20 text-indigo-900 ">Cars Gallery</h2>
        <div className="grid my-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {
            toys.map(toy => <GalleryCard
            key= {toy._id}
            toy= {toy}
            ></GalleryCard>)
        }
      </div>
      </div>
    );
};

export default Gallery;