import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";

const AddAToy = () => {
const {user} = useContext(AuthContext);
    const handleAddAToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sellerEmail = user?.email;
        const sellerName = form.seller.value;
        const date = form.date.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.quantity.value;
        const detailDescription = form.dDescription.value;
        const shortDescription = form.sDescription.value;
        const pictureURL = form.url.value;
        const AddAToy = {name, sellerName, sellerEmail, date, subCategory, price, rating, availableQuantity, detailDescription, shortDescription, pictureURL};
        console.log(AddAToy)
        // now send data to server(post)
        fetch('http://localhost:5000/toys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddAToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    color: "#716add",
                    text: 'The Toy Is Successfully Added To DB',
                    icon: 'success',
                    confirmButtonText: 'Keep Rocking'
                  })
                form.reset();
            }
        })


    }
    return (
        <div className="m-5 mx-auto">
            <h3 className="text-3xl font-bold text-center text-blue-900">Add A New Toy</h3>
            <form onSubmit={handleAddAToy} className='p-4 mt-12 rounded-md  bg-white'>
                <div className='md:flex justify-center gap-5 pb-4'>
                    <div >
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Toy Name</span> <br />
                            <input className='px-4 rounded-sm input input-bordered bg-white w-full md:w-96 py-1' type="text" name="name" placeholder=' Enter Toy Name' required />
                        </label>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Seller Name</span> <br /></label>
                        <input className='px-4 input input-bordered  rounded-sm w-full md:w-96 bg-white py-1' type="text" name="seller" placeholder='Enter Seller Name' required />
                    </div>
                </div>
                <div className='md:flex justify-center gap-5 pb-4'>
                    <div >
                        <label htmlFor="=text"> <span className='text-xl font-semibold text-black'>Seller Email</span> <br />
                            <input className='px-4 rounded-sm input input-bordered bg-white w-full md:w-96 py-1' type="email" name="email" defaultValue={user?.email} placeholder=' Enter Seller Email' required />
                        </label>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <label htmlFor="date"> <span className='text-xl font-semibold text-black'>Date</span> <br /></label>
                        <input className='px-4 input input-bordered  rounded-sm w-full md:w-96 bg-white py-1' type="date" name="date" required />
                    </div>
                </div>
                <div className='md:flex justify-center gap-4 pb-4'>

                    <div >
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Sub-Category</span> <br /></label>
                        <input className='px-4 input input-bordered  rounded-sm w-full md:w-96 bg-white py-1' type="text" name="subCategory" placeholder='Enter Sub Category' required />
                    </div>
                    <div className="mt-4 md:mt-0">
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Price</span> <br /></label>
                        <input className='px-4 input input-bordered  rounded-sm w-full md:w-96 bg-white py-1' type="text" name="price" placeholder='Enter Price' required />
                    </div>
                </div>
                <div className='md:flex justify-center gap-4 pb-4'>

                    <div className="mt-4 md:mt-0">
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Ratings</span> <br /></label>
                        <input className='px-4 input input-bordered  rounded-sm w-full md:w-96 bg-white py-1' type="text" name="rating" placeholder='Enter Rating' required />
                    </div>
                    <div className="mt-4 md:mt-0">
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Available Quantity</span> <br /></label>
                        <input className='px-4 input input-bordered  rounded-sm w-full md:w-96 bg-white py-1' type="number" name="quantity" placeholder='Enter Quantity Number' required />
                    </div>
                </div>
                <div className='md:flex justify-center gap-4 pb-4'>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Description In Details</span> <br />
                        </label>
                        <textarea className="px-4 input input-bordered  rounded-sm w-full md:w-96 bg-white" name="dDescription" id="" placeholder="Description In Details" cols="30" rows="10"></textarea>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Description In Short</span> 
                        <br />
                        </label>
                        <textarea className="px-4 input input-bordered  rounded-sm w-full md:w-96 bg-white" name="sDescription" id="" placeholder="Description Short" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className='pb-4'>
                    <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Banner</span> <br /></label>
                    <input className='px-4 input input-bordered  w-full rounded-sm bg-white py-1' type="url" name="url" id="url" placeholder='Enter image url' required />
                </div>
                <button type="submit" className="btn px-8 bg-stone-700">Submit</button>
            </form>
        </div>
    );
};

export default AddAToy;