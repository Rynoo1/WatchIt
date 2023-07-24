import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar1 from './components/navbar';
import Landing from './Landing';
import IndividProd from './IndividProd';


function App() {
  return (
    <div className="App backgblue">
      <NavBar1></NavBar1>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/prod' element={<IndividProd/>} />
      </Routes>
    </div>
  );
}

export default App;
