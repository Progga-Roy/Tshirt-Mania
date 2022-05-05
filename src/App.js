
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GrandPa from './component/GrandPa/GrandPa';
import Header from './component/Header';
import Home from './component/Home/Home';
import OrderReview from './component/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/orderReview' element={<OrderReview></OrderReview>}></Route>
       <Route path='/grandpa' element={<GrandPa></GrandPa>}></Route>
     </Routes>
    
    </div>
  );
}

export default App;
