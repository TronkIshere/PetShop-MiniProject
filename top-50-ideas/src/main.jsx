import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import HomePage from './Pages/Users/homePage';
import RouterCustom from "./router.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <RouterCustom />
    </BrowserRouter>
);