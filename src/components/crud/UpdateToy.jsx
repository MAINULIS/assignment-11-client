import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const toy = useLoaderData();
    // update a toy information
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const availableQuantity = form.quantity.value;
        const detailDescription = form.dDescription.value;
        const pictureURL = form.url.value;
        const updatedDoc = {
            price,
            availableQuantity,
            detailDescription,
            pictureURL,
        }
        fetch(`http://localhost:5000/toys/${toy._id}`, {
            method: "PATCH",
          headers: {'content-type': 'application/json'},
          body:JSON.stringify(updatedDoc)
        })
        .then(res => res.json())
        .then(data => {
        //   console.log(data)
          if(data.acknowledged === true) {
            Swal.fire({
                title: 'Success!',
                color: "#716add",
                text: 'The Toy Is Successfully Updated',
                icon: 'success',
                confirmButtonText: 'Keep Rocking'
              })
            form.reset();
          }
        })
        
    }
    return (
        <div className="m-5 md:mx-10 mx-auto">
            <h3 className="text-3xl font-bold text-center text-blue-900">Update The Toy</h3>
            <form onSubmit={handleUpdate} className='p-4 mt-12 rounded-md  bg-white'>

                <div className='md:flex justify-center gap-4 pb-4'>
                    <div className="mt-4 md:mt-0">
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Price</span> <br /></label>
                        <input className='px-4 input input-bordered  rounded-sm w-full md:w-96 bg-white py-1' type="text" name="price" defaultValue={toy.price} required />
                    </div>
                    <div className="mt-4 md:mt-0">
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Available Quantity</span> <br /></label>
                        <input className='px-4 input input-bordered  rounded-sm w-full md:w-96 bg-white py-1' type="number" name="quantity" defaultValue={toy.availableQuantity} required />
                    </div>
                </div>
                
                <div className='md:flex justify-center gap-4 pb-4'>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Description In Details</span> <br />
                        </label>
                        <textarea className="px-4 input input-bordered  rounded-sm w-full md:w-96 bg-white" name="dDescription" id="" defaultValue={toy.detailDescription} cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className='pb-4'>
                    <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Picture</span> <br /></label>
                    <input className='px-4 input input-bordered  w-full rounded-sm bg-white py-1' type="url" name="url" id="url" defaultValue={toy.pictureURL} required />
                </div>
                <button type="submit" className="btn px-8 bg-stone-700">Update</button>
            </form>
        </div>
    );
};

export default UpdateToy;