import React from 'react';
import {CarProducts, ListProducts} from '../index';
import { NavClients } from './nav-client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const NavClientRoute = () => {
    return (
    <BrowserRouter>
      <Routes>
          <Route path="client-rol" element={<NavClients />}>
            <Route path="products" element={<ListProducts />} />
            <Route path="car" element={<CarProducts />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}