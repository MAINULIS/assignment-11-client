import { FaBookOpen } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { FaBullseye } from "react-icons/fa6";
import { Link } from "react-router-dom";
const NeedHelp = () => {
    return (
        <div className="m-5 md:my-24">
            <div className="text-center font-serif ">
                <h3 className=" font-semibold text-3xl text-cyan-700">Need Help?</h3>
                <p className="text-neutral-600">We do our best to help customers get a great user experience!</p>
            </div>
            <div className="grid mt-10 md:flex gap-4">
                <div className="card md:w-96 shadow-sm bg-white border border-dashed text-neutral-content">
                    <div className="card-body items-center text-center ">
                        <Link to="/blogs"><p ><FaBookOpen className="w-8 h-8 text-indigo-900 hover:text-neutral"  /></p></Link>
                        <Link to= "/blogs"> <h2 className="card-title  text-cyan-700">Documentation</h2></Link>
                        <p className="text-neutral-600">It covers most of the questions you might face and might be really helpful!</p>
                    </div>
                </div>
                <div className="card md:w-96 shadow-sm bg-white border border-dashed text-neutral-content">
                    <div className="card-body items-center text-center ">
                        <Link><p><FaBullseye className="w-8 h-8 text-indigo-900 hover:text-neutral" /></p></Link>
                        <h2 className="card-title text-cyan-700">6 Month Support</h2>
                        <p className="text-neutral-600">6 months support from customers included – you can always rely on our assistance!</p>
                    </div>
                </div>
                <div className="card md:w-96 shadow-sm bg-white border border-dashed text-neutral-content">
                    <div className="card-body items-center text-center ">
                    <Link><p><FaRegMessage className="w-8 h-8 text-indigo-900 hover:text-neutral" /></p></Link>
                        <h2 className="card-title text-cyan-700">Ask A Question</h2>
                        <p className="text-neutral-600">Feel free to ask any presale questions, we’ll be happy to answer them!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeedHelp;