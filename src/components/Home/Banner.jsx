import img1 from "../../assets/images/policeCar2.png"
import img2 from "../../assets/images/sportsCar1.png"
import img3 from "../../assets/images/truck2.png"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-5/6 md:pl-52 rounded-xl" />
                <div className="absolute rounded-xl flex items-center bg-gradient-to-r from-[#151515ef] to-[rgba(21, 21, 21, 0.00)] top-0 bottom-0">
                    <div className='space-y-6 pl-24 md:w-1/3'>
                        <h2 className='text-5xl md:text-6xl font-semibold text-white'>Police Car With Remote Control System</h2>
                        <p>Join the chase with our toy police car! Lights flash, sirens wail - fun for aspiring officers everywhere.</p>
                        <div className='flex gap-5'>
                            <button className="btn gradient-btn hover:outline ">Discover Now</button>
                            <button className="btn btn2 hover:outline ">See Latest Toy</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1/2">
                    <a href="#slide3" className="btn btn-circle btn-outline text-white bg-cyan-800 mr-5 ">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-outline text-white bg-cyan-800 ">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-5/6 md:pl-52 rounded-xl" />
                <div className="absolute flex rounded-xl items-center bg-gradient-to-r from-[#151515ef] to-[rgba(21, 21, 21, 0.00)] top-0 bottom-0">
                    <div className='space-y-6 pl-24 md:w-1/3'>
                        <h2 className='text-5xl md:text-6xl font-semibold text-white'>Latest Fancy Car With Available Colors</h2>
                        <p>Rev up imagination with our toy cars! From sleek racers to off-road adventures, endless fun awaits.</p>
                        <div className='flex gap-5'>
                            <button className="btn gradient-btn hover:outline ">Discover Now</button>
                            <button className="btn  hover:outline btn2">See Latest Toy</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1/2">
                    <a href="#slide1" className="btn btn-circle btn-outline text-white bg-cyan-800 mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle text-white btn-outline bg-cyan-800">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-5/6 md:pl-52 rounded-xl" />
                <div className="absolute rounded-xl flex items-center bg-gradient-to-r from-[#151515ef] to-[rgba(21, 21, 21, 0.00)] top-0 bottom-0">
                    <div className='space-y-6 pl-24 md:w-1/3'>
                        <h2 className='text-5xl md:text-6xl font-semibold text-white'>Conquer the Road with Our Mighty Trucks</h2>
                        <p>Haul, load, and explore with our toy trucks! Perfect for little hands, big dreams, and endless adventures.</p>
                        <div className='flex gap-5'>
                            <button className="btn gradient-btn hover:outline ">Discover Now</button>
                            <button className="btn hover:outline btn2">See Latest Toy</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1/2">
                    <a href="#slide2" className="btn btn-circle text-white bg-cyan-800 btn-outline mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle text-white btn-outline bg-cyan-800">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;