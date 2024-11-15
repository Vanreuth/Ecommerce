import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink , Link} from "react-router-dom";
import { ShopContaxt } from "../context/ShopContext";
const Navbar = () => {
  const [visible, setvisible] = useState(false);
  const {setShowSearch, getCartCount,navigate} = useContext(ShopContaxt);
  const handleSearchClick = () => {
    setShowSearch(true);
    navigate('/collection');
  };
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
      <img src={assets.logo} alt="logo" className="w-36" /> 
      </Link>
      <ul className="hidden sm:flex gap-5 text-gray-700 uppercase">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-1/2 border-none h-[1.8px] bg-gray-500 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-1/2 border-none h-[1.8px] bg-gray-500 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1 ">
          <p>About</p>
          <hr className="w-1/2 border-none h-[1.8px] bg-gray-500 hidden " />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1 ">
          <p>Contact</p>
          <hr className="w-1/2 border-none h-[1.8px] bg-gray-500 hidden" />
        </NavLink>
      </ul>

      <div className=" flex items-center gap-6">
        <img onClick={handleSearchClick} src={assets.search_icon} alt="" className=" w-5 cursor-pointer" />

        <div className="group relative">
          <Link to='/login'>
          <img
            src={assets.profile_icon}
            alt=""
            className=" w-5 cursor-pointer "
          />
          </Link>
          <div className=" group-hover:block absolute hidden dropdown-menu right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500">
              <p className=" cursor-pointer hover:text-black">My Profile</p>
              <p className=" cursor-pointer hover:text-black">Orders</p>
              <p className=" cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>

        </div>
        <Link to="/cart" className=" relative">
         <img src={assets.cart_icon} className= "w-5 min-w-5 " alt="" />
         <p className="absolute right-[-5px] w-4 bottom-[-5px] text-center leading-4 bg-black text-white rounded-full aspect-square text-[8px]">{getCartCount()}</p>
        </Link>
        <img src={assets.menu_icon}  onClick={() => setvisible(true)} alt=""  className=" w-5 cursor-pointer sm:hidden"/>
      </div>
       {/* sidebar meun small screen */}
       <div className={` absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'} `}>
           <div className=" flex flex-col text-gray-500">
               <div onClick={() => setvisible(false)}  className=" flex items-center gap-4 p-3">
                <img className=" h-4 rotate-180 " src={assets.dropdown_icon} alt="" />
                 <p>Back</p>
               </div>
               <NavLink onClick={() => setvisible(false)} className=' py-2 pl-6 border' to='/'>Home</NavLink>
               <NavLink onClick={() => setvisible(false)}  className=' py-2 pl-6 border' to='/collection'>Collection</NavLink>
               <NavLink onClick={() => setvisible(false)} className=' py-2 pl-6 border' to='/about'>About</NavLink>
               <NavLink onClick={() => setvisible(false)} className=' py-2 pl-6 border' to='/contact'>Contact</NavLink>

           </div>
       </div>
    </div>
  );
};

export default Navbar;
