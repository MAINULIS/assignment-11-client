import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
const ShopByTabs = () => {
    const [selectedTab, setSelectedTab] = useState('Sports Car');
    const [data, setData] = useState([]);

    useEffect(() => {
  //  fetch('http://localhost:5000/toys?subCategory=truck')
  // .then(res => res.json())
  // .then(data => setData(data))
        fetchData(selectedTab);
      }, [selectedTab]);
      const fetchData = async (subCategory) => {
        try {
          const response = await fetch(`http://localhost:5000/toys?subCategory=${subCategory}`);
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    const handleTabClick = (subCategory) => {
       
        setSelectedTab(subCategory);
    };
    return (
        <div className='text-center my-24'>
        {/* Tabs */}
        <div className='flex gap-7  justify-center text-2xl md:text-3xl font-bold text-neutral-700'>
        <button onClick={() => handleTabClick('Sports Car')}>Sports Car </button>
        <button onClick={() => handleTabClick('Police Car')}>Police Car</button>
        <button onClick={() => handleTabClick('Truck')}>Truck</button>
        </div>
  
        {/* Display data */}
        <div>
          <h2 className='text-green-500 '>{selectedTab}</h2>
          <ul className="grid my-14 md:grid-cols-2 gap-6 mx-4">
          {data.map((vehicle, index) => (
           <div key={index} >
            <Link to={`/details/${vehicle._id}`} >
           <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
               <img className="h-72" src={vehicle.pictureURL} alt="" />
               <div className='bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-slate-200 absolute inset-0 transition-opacity duration-200 flex flex-col'>
                       <p className="text-2xl font-semibold">{vehicle.subCategory}</p><br />
                       <p >{vehicle.shortDescription}</p>
                       <div className="mt-auto flex justify-between">
                         <p> ${ vehicle.price} </p>
                         <p className="font-semibold text-cyan-500">Click To See Details</p>
                       </div>
                   </div>
               
           </div>
           </Link>
           </div>
          ))}
          </ul>
        </div>
      </div>
    );
};

export default ShopByTabs;