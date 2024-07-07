import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import HomePage from './Pages/Users/homePage/HomePage';
import RouterCustom from "./router.jsx";
import './Style/style.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <RouterCustom />
    </BrowserRouter>
);