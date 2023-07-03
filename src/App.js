import Login from './login';
import Navbar from './navbar';
import Products from './products'
import ProductDetailsPage from './productdetails';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  return (
    <div >
      <Navbar/>
<BrowserRouter>
<Routes>
  <Route path='/login' element ={<Login/>}></Route>
  <Route path='productdetails' element={<ProductDetailsPage/>}/>
  <Route path='/product/:productId' element ={<ProductDetailsPage/>}/>
  <Route path='/products' element ={<Products/>}/>
  <Route path='*' element={<Navigate to='/'/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}
export default App;






