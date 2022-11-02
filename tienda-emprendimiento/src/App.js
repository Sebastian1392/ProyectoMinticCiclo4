import React from 'react';
import {NavAdmin, NavClients, ListProducts, CarProducts } from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavClients />}>
          <Route path="products" element={<ListProducts />} />
          <Route path="car" element={<CarProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}