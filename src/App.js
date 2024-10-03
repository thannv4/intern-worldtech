import './App.css';
import Header from './Compoments/Header/header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BurgerBuilder from './page/BurgerBuilder/BurgerBuilder';
import Login from './page/Login/Login';
import Regsiter from './page/Regsiter/regsiter';
import Checkout from './page/Checkout/Checkout';
import Order from './page/Order/order';

// import Footer from './Compoments/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<BurgerBuilder/>}/>
          <Route path="/burger" element={<BurgerBuilder/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Regsiter/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/order' element={<Order/>}/>
        </Routes>
        {/* <Footer/> */}
    </BrowserRouter>
      
  );
}

export default App;
