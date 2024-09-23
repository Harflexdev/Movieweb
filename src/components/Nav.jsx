import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="flex justify-between items-center p-4 h-[60px] shadow-lg fixed w-full z-10">
      <Link to="/">
        <h1 className='text-white text-3xl font-bold transition-transform duration-300 hover:scale-105'>
          HD Movie
        </h1>
      </Link>
      <Link to="/signin">
        <button className="text-white text-[13px] h-[40px] w-[100px] bg-red-700 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-red-600">
          Sign In
        </button>
      </Link>
    </header>
  );
}

export default Nav;
