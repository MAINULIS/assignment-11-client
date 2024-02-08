import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import animation from "../assets/animation/register.json"
import Lottie from "lottie-react";
import SocialLogin from "./SocialLogin";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!/(?=.*[!@#$%&*])/.test(password)) {
            setError('Use at least a special character(!,@,$,%,& or *) in your password.');
            return;
        }
        else if (password.length < 6) {
            setError('Password should be at least 6 character.');
            return;
        }

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                setSuccess(`${name}, Your Account has been successfully created.`);
                setError('');
                form.reset();

            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
                setSuccess('');
            })

    }
    return (
        <div className="hero min-h-screen mt-12 mb-7">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">
                    <Lottie className="" animationData={animation} loop={true}></Lottie>
                </div>
                <div className="card shrink-0 w-full  max-w-sm shadow-2xl ">
                    <form onSubmit={handleRegister} className="card-body text-white">
                        <h1 className="text-4xl text-center text-cyan-900 font-semibold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input  input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Photo Url</span>
                            </label>
                            <input type="url" placeholder="Your Photo Url" name='url' className="input input-bordered" required />
                        </div>
                        <div>
                            <p className='text-success '>{success}</p>
                            <p className='text-error'>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn text-white gradient-btn" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div>
                        <h5 className='text-center text-xl font-semibold'>Or Sign In with</h5>
                        <SocialLogin></SocialLogin>
                    </div>
                    <p className='my-6 text-center'>Already Have An Account? Please <Link to="/login" className="text-cyan-800 font-semibold underline">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;