import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './Components/Product/Product';
import Cotigor from './Components/Cotigor/Cotigor';
import Cart from './Components/Cart/Cart';
import SingelCat from './Components/SingelCat/SingelCat';

function App() {
  const [produc, setProduc] = useState([])
  const [production,setProduction] = useState([])
  const [cotigorios , setCotigorios] = useState ([])
  const [ cart, setCart] = useState ([])
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/Main' element={<Main cotigorios = {cotigorios} setCotigorios ={setCotigorios} produc ={produc} setProduc = {setProduc} cart={cart} setCart={setCart} />}/>
        <Route path='/Product/:id' element={<Product production={production} setProduction = {setProduction}  />}/>
        <Route path='/Cotigor' element={(<Cotigor cotigorios = {cotigorios} setCotigorios ={setCotigorios}/>)} />
        <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/SingelCat/:name' element={<SingelCat cotigorios={cotigorios} setCotigorios ={setCotigorios} />}/>
        <Route>
          <Route/>
        </Route>
      </Routes>
      </BrowserRouter>
      <div className="container">
        <div className="birBlock">
        <h1>Кош келиниздер <br /> Расул маркетине</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
