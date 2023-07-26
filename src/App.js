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


function App() {
  return (
    <div className="App backgblue">
      <NavBar1></NavBar1>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/prod' element={<IndividProd/>} />
        <Route path='/allprod' element={<Products/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/orders' element={<OrderProcess/>}/>
      </Routes>
    </div>
  );
}

export default App;
