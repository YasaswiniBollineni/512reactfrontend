import React from 'react';

// import Logo
import Logo from '../assets/img/logo.png';

//import icons
import {FaYoutube, FaInstagram, FaGithub} from 'react-icons/fa';

function Footer(){
  return(
<footer className='pb-[70px]'>
<div className="container mx-auto">
<div className='flex flex-col justify-between items-center lg:flex-row gap-y-5'>
{/* Logo */}
<a href="#">
  <img src={Logo} alt="" />
</a>
{/* copyright text */}
<p> &copy; 2024. All rights reserved.</p>
{/* social icons */}
<div className='flex gap-x-4 text-orange text-lg'>
<div className='w-[50px] h-[50px] bg-pin-200 rounded-full flex 
justify-center items-center shadow-primary hover:text-paragraph transition'>
<FaYoutube />
</div>
<div className='w-[50px] h-[50px] bg-pin-200 rounded-full flex 
justify-center items-center shadow-primary hover:text-paragraph transition'>
<FaInstagram />
</div>
<div className='w-[50px] h-[50px] bg-pin-200 rounded-full flex 
justify-center items-center shadow-primary hover:text-paragraph transition'>
<FaGithub />
</div>
</div>

</div>
</div>

</footer>
  );
};


export default Footer;

