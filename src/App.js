import './App.css';
import Header from './Compoments/Header/header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BurgerBuilder from './page/BurgerBuilder';
import Login from './page/Login';
import Regsiter from './page/regsiter';
import Checkout from './page/Checkout';
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
        </Routes>
        {/* <Footer/> */}
    </BrowserRouter>
      
  );
}

export default App;
