import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";
import CartProvider from "./context/CartContext";
import ProductProvider from "./context/ProductContext";
import SidebarProvider from "./context/SidebarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <AuthProvider>
        <CartProvider>
          <ProductProvider>
            <Router>
              <App />
            </Router>
          </ProductProvider>
        </CartProvider>
      </AuthProvider>
    </SidebarProvider>
  </React.StrictMode>
);
