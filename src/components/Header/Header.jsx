import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className=' bg-zinc-800 '>
           <div className='lg:px-16 flex justify-between' >
             <img src={logo} alt="" />
             <div className='flex-col flex md:flex-row  gap-5 font-bold items-center text-white'>
                <a href="./Order">Order</a>
                <a href="./Order">Order Review</a>
                <a href="./Order">Manage Inventory</a>
                <a href="./Order">Login</a>
             </div>
           </div> 
        </div>
    );
};

export default Header;