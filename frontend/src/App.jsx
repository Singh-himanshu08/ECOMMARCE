
import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Orders from './pages/Orders';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Cart from './pages/Cart';
import About from './pages/About';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify';

const ProductWrapper = () => {
  const { productId } = useParams();
  return <Product key={productId} />; // Force remount
};

const App = () => {
  return (
    <div className='px-4 sm:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<ProductWrapper />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/login' element={<Login />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/verify' element={<Verify/>} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;



// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home'
// import Collection from './pages/Collection'
// import Contact from "./pages/Contact"
// import Product from './pages/Product'
// import Orders from "./pages/Orders";
// import Login from "./pages/Login";
// import PlaceOrder from "./pages/PlaceOrder";
// import Cart from './pages/Cart'
// import About from './pages/About'
// import Footer from './components/Footer';
// import SearchBar from './components/SearchBar';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => {
//   return (
//     <div className='px-4 sm:px-[7vw] lg:px-[9vw]'>
//       <ToastContainer  />
//       <Navbar />
//       <SearchBar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/collection' element={<Collection/>} />
//         <Route path='/contact' element={<Contact/>} />
//         <Route path='/product/:productId' element={<Product/>} />
//         <Route path='/orders' element={<Orders/>} />
//         <Route path='/login' element={<Login/>} />
//         <Route path='/placeorder' element={<PlaceOrder/>} />
//         <Route path='/cart' element={<Cart/>} />
//         <Route path='/about' element={<About/>}/>
//       </Routes>
//       <Footer />
      
//     </div>
//   )
// }

// export default App;

