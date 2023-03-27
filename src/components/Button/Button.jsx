import React from 'react';

const Button = ({children}) => {
    return (
        <div className='text-center '>
          <button className="btn text-black font-bold mt-4 bg-[#D5B4B4] hover:bg-fuchsia-900 hover:text-white ">{children}</button>
        </div>
    );
};

export default Button;
