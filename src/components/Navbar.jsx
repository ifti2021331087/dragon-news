import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png'
import { AuthContext } from '../provider/authProvider';
const Navbar = () => {
    const {user:person}=useContext(AuthContext);
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{person.name}</div>
            <div className='nav space-x-5'>
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div>
                    <img src={user} alt="" />
                </div>
                <Link to="/auth/login" className='btn btn-neutral'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;