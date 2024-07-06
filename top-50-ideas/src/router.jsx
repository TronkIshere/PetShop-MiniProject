import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./Utils/Router";
import HomePage from './Pages/Users/homePage';
import ProfilePage from './Pages/Users/ProfilePage';
import MasterLayout from './Pages/Users/theme/masterLayout';


const renderUserRouter = () => {
     const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            Components: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            Components: <ProfilePage />
        },
     ];

     return (
        <MasterLayout>
           <Routes>
            {userRouters.map((item, key) => (
                <Route key={key} path={item.path} element={item.Components} />
            ))}
        </Routes> 
        </MasterLayout>
     );
};

const RouterCustom = () => {
    return renderUserRouter ();
};

export default RouterCustom;