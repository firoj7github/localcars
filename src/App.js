
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home/Home';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './common/header/Header';
import Header2 from './common/header/Header2';
import Footer from './common/footer/Footer';
import Auto from './component/autos/Auto';
import SingleProduct from './component/singleProduct/SingleProduct';

function App() {
  return (

  

  
    <div>
      
      <Router>
        <Header></Header>
      <Header2></Header2>
      <Routes>
        <Route path="/" element={ <Home></Home>}/>
        <Route path="/autos" element={ <Auto
     
        ></Auto>}/>
       <Route path="/auto" element={<SingleProduct></SingleProduct>}></Route>
      </Routes>
       <Footer></Footer>
      </Router>
     
     
      
    </div>
  );
}

export default App;
