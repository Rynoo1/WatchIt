import './App.css';
// import { Routes, Route } from 'react-router-dom';
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
import { MedusaProvider, CartProvider} from 'medusa-react';
import { QueryClient } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient();
const MEDUSA_BACKEND_URL = "http://localhost:9000";


function App() {
  const user = localStorage.getItem("token");
  const admin = localStorage.getItem("admin");
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl={MEDUSA_BACKEND_URL}
    >
      <CartProvider>
        <Router>
          <div className="App backgblue">
            <NavBar1 />
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
        </Router>
      </CartProvider>
    </MedusaProvider>
  );
}

export default App;
