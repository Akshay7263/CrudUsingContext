import "./App.css";
import ProductList from "./components/ProductList";
import ProductCreate from "./components/ProductCreate";
import ProductEdit from "./components/ProductEdit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
export const VarContext = createContext();
function App() {
  const [responses,setRespones] = useState([]);
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/`)
    .then(res=>res.json())
    .then(data=>setRespones(data));
 },[])
 
  return (
    <div className="App">
      <h1>ReactJs Crud </h1>
      <VarContext.Provider value={responses}>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/create" element={<ProductCreate />} />
          <Route path="/product/edit/:pid" element={<ProductEdit />} />
        </Routes>
      </BrowserRouter>
      </VarContext.Provider> 
    </div>
  );
}

export default App;
