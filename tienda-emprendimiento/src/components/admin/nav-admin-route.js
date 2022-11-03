import React from 'react';
import {NavAdmin, ListProductsAdmin} from '../index';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const NavAdminRoute = () => {
    return (
    <BrowserRouter>
      <Routes>
          <Route path="admin-rol" element={<NavAdmin />}>
            <Route path="products" element={<ListProductsAdmin />} />
            {/*<Route path="edit-product" element={<CarProducts />} />
            //<Route path="sales" element={<CarProducts />} />
            */}
          </Route>
      </Routes>
    </BrowserRouter>
  );
}