import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar1 from './components/navbar';
import Landing from './pages/Landing';
import IndividProd from './pages/IndividProd';
import Products from './pages/Products';


function App() {
  return (
    <div className="App backgblue">
      <NavBar1></NavBar1>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/prod' element={<IndividProd/>} />
        <Route path='/allprod' element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
