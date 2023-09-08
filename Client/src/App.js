import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar1 from './components/navbar';
import Landing from './pages/Landing';
import IndividProd from './pages/IndividProd';
import Products from './pages/Products';
import Inventory from './pages/Inventory';
import OrderProcess from './pages/OrderProcess';
import CheckOut from './pages/CheckOut';
import Footer from './components/footer';
import Login from './components/login';
import SignUp from './pages/SignUp';


function App() {
  const user = localStorage.getItem("token");
  const admin = localStorage.getItem("admin");
  return (
    <div className="App backgblue">
      <NavBar1></NavBar1>
      <Routes>
        <Route path='/signup' element = {<SignUp/>} />
        <Route path='/' element={<Landing/>} />
        <Route path='/prod' element={<IndividProd/>} />
        <Route path='/allprod' element={<Products/>}/>
        {user && <Route path='/checkout' element={<CheckOut/>}/>}
        {admin && <Route path='/inventory' element={<Inventory/>}/>}
        {admin && <Route path='/orders' element={<OrderProcess/>}/>}
      </Routes>
    </div>
  );
}

export default App;
