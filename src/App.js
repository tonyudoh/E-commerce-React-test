import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import ProductDetails from './pages/ProductDetails';
import Productlist from './pages/Productlist';
import Payment from "./pages/Payment";
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';



function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home /> }/>
    <Route path='/Productlist' element={<Productlist />} />
    <Route path='/ProductDetails' element={<ProductDetails /> } />
    <Route path='/Payment' element={<Payment />} />
    <Route path='/Cart' element={<Cart />} />
    </Routes>
    </>
  );
}

export default App;
