import React from 'react';
import { memo, useState } from "react";
import "./style.scss";
import {    AiOutlineFacebook, 
            AiOutlineInstagram, 
            AiOutlineLinkedin, 
            AiOutlineGlobal, 
            AiOutlineUser, 
            AiOutlineMail, 
            AiOutlineShoppingCart 
        } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ROUTERS } from '../../../../Utils/Router';

const formatter = (value) => {
    return value.toLocaleString() + " VNĐ";
};



const Header = () => {

    const [menus, setMenus] = useState([
        {
            name: "TRANG CHỦ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "THÚ CƯNG",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name: "Chó Poodle",
                    path: "",
                },
                {
                    name: "Mèo",
                    path: "",
                },
                {
                    name: "Chó Pug",
                    path: "",
                },
            ],
            
        },
        {
            name: "PHỤ KIỆN",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "DỊCH VỤ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "GIỚI THIỆU",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "LIÊN HỆ",
            path: ROUTERS.USER.HOME,
        },
    ]);

    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header__top_left">
                            <ul>
                                <li>
                                    <AiOutlineMail />
                                    hello@gmail.com</li>
                                <li>Miễn phí ship đơn từ {formatter(200000)}</li>
                            </ul>
                        </div>
                        <div className="col-6 header__top_right">
                            <ul>
                                <li>
                                    <Link to={""}>
                                    <AiOutlineFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                    <AiOutlineInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>  
                                    <AiOutlineLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                    <AiOutlineGlobal />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                    <AiOutlineUser />
                                    </Link>
                                    <span>Đăng nhập</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="header__logo">
                            <h1>PetShop</h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                {
                                    menus?.map((menu, menuKey) => (
                                        <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                           <Link to={menu?.path}>{menu?.name}</Link> 
                                        </li>
                                    ))
                                }
                                {/* <li>
                                    <ul>
                                        <li>Chó Poodle</li>
                                    </ul>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3 ">
                        <div className="header__cart">
                        <div className="header__cart__price">
                            <span>{formatter(100120)}</span>
                        </div>
                            <ul className="">
                                <li>
                                    <Link to="#">
                                        <AiOutlineShoppingCart /> <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Header);