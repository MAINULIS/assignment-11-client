import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/animation/error.json"

const ErrorPage = () => {
    const {error, status} = useRouteError();

    return (
        <section className='flex items-center h-screen p-16 bg-gray-100'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <Lottie className="w-72" animationData={errorImg} loop={true}></Lottie>
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-5xl lg:text-9xl text-yellow-500'>
                        <span className='sr-only'>Error</span>
                        {status || 404}
                    </h2>
                    <p className="text-2xl font-semibold text-cyan-950 md:font-bold md:text-3xl">We Are Sorry, Page Not Found</p>
                    <p className='lg:text-2xl font-semibold text-red-800 mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='btn gradient-btn'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;