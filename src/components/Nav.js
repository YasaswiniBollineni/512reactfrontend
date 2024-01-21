// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { Routes, Route } from 'react-router-dom';
// // // import { navigation } from '../data';
// // // import Home from '../Home';
// // // import About from '../About';

// // //  const Nav = () => {
// // //   return (
    
// // //     <>
// // //         <div class="navbar">
       
// // //         <nav>
// // //         <ul>
    
    
// // //         <li><Link to="/Home"><i class="fa-solid fa-house"></i>Home</Link></li>
// // //         <li><Link to="/About"><i class="fa-solid fa-house"></i>About</Link></li>
       
 
// // //     </ul>
    
    
// // //         </nav>
// // //     </div>
        
// // // <Routes>
// // //     <Route exact path='/Home' element={<Home/>}></Route>
// // //     <Route exact path='/About' element={<About/>}></Route>
    
// // // </Routes>

// // //         </>
// // //   );
// // //  }
// // // //     <nav className='ml-[70px]'>
// // // //       <ul className='flex gap-x-[42px]'>
// // // //         {navigation.map((item, index) => (
// // // //           <li key={index}>
// // // //             <Link to={item.href}>{item.name}</Link>
// // // //           </li>
// // // //         ))}
// // // //         <li>
// // // //           <Link to="/Home">
// // // //             <i className="fa-solid fa-house"></i>Home
// // // //           </Link>
// // // //         </li>
// // // //       </ul>
// // // //       <Routes>
// // // //         <Route path='/Home' element={<Home />} />
// // // //         {/* Add routes for other components if needed */}
// // // //       </Routes>
// // // //     </nav>
// // // //   );
// // // // };
// // // export default Nav;
// // // Nav.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import { navigation } from '../data';
// import One from './One';
// import About from './About';
// import Three from './Three';
// import './Nav.css'; // Import the stylesheet for styling

// const Nav = () => {
//   return (
//     <>
//       <div className="navbar">
//         <nav>
//           <ul>
//       <One />
//       <About />
//       <Three />
//           </ul>
//         </nav>
//       </div>

//         </>
//    );
//  };

// export default Nav;
