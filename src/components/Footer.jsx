import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="w-32 mb-5" alt="" />
          <p className=" w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores
            earum illum molestiae? Iure, tempore!In maiores earum illum
            molestiae? Iure, tempore!In maiores earum illum molestiae? Iure,
            tempore!
          </p>
        </div>
        <div>
          <p className=" text-xl font-medium mb-5">COMPANY</p>
          <ul className=" flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About-us</li>
            <li>Delivery</li>
            <li>Privicy policy</li>
          </ul>
        </div>
        <div>
          <p className=" text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className=" flex flex-col gap-1 text-gray-600">
            <li>0883386537</li>
            <li>hengvanreuth.17@gmail.com</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className=" text-center py-5 text-sm">Copyright2024 @ henvanreuth.edu.kh - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
