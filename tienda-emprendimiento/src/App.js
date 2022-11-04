import React from 'react';
import {NavAdmin, NavClients, ListProducts, CarProducts, NavRol, ListProductsAdmin, Sale, ModifyProduct} from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavRol />}>
          <Route path="admin-rol" element={<NavAdmin />} >
            <Route path="products" element={<ListProductsAdmin />}/>
            <Route path="sales" element={<Sale />}/>
            <Route path="edit-product" element={<ModifyProduct />}/>
          </Route>
          <Route path="client-rol" element={<NavClients />} >
            <Route path="products" element={<ListProducts />}/>
            <Route path="car" element={<CarProducts />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}