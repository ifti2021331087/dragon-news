import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/authProvider';

const Login = () => {
    const {userLogin,setUser}=useContext(AuthContext);
    const [error, setError]=useState({});
    const location=useLocation();
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        userLogin(email,password)
        .then((res)=>{
            const user=res.user;
            setUser(user);
            navigate(location?.state?location.state : "/");
        })
        .catch((err)=>{
            setError({...error,login:err.code});
        });
    };
    return (
        <div className='hero bg-base-200 min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered w-full" required />
                        {
                            error.login && (
                            <label className="label text-sm text-red-600">
                                {error.login}
                            </label>
                        )}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral w-full">Login</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>Dont Have An Account ? <Link to="/auth/register" className='text-red-500'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;