import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="bg-[#212121] h-screen w-full flex items-center justify-center">
            <div className="bg-white px-16 py-12 w-[600px] h-[430px]">
                <h1 className="text-2xl font-semibold text-center">Register</h1>
                <div className="bg-[#212121] w-8 h-1 mx-auto mt-1 rounded-lg"></div>
                <form className="mt-6">
                    <div>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="username"
                            className="w-full p-3 bg-[#eee] rounded"
                        />
                    </div>
                    <div className="mt-3">
                        <input 
                            type="email" 
                            name="email"
                            placeholder="email"
                            className="w-full p-3 bg-[#eee] rounded"
                        />
                    </div>
                    <div className="mt-3">
                        <input 
                            type="password" 
                            name="password"
                            placeholder="password"
                            className="w-full p-3 bg-[#eee] rounded"
                        />
                    </div>
                    <div className="text-center mt-6">
                        <input 
                            type="submit" 
                            value="Register"
                            className='w-full px-6 py-2.5 text-white bg-[#212121] font-medium rounded'
                        />
                    </div>
                </form>
                <div className="flex items-center gap-1 justify-center mt-5">
                    <p className="text-gray-400">Already have an account?</p> <Link className="text-[#212121] font-medium" to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;