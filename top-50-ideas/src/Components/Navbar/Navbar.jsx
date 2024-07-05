import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container main-nav1'>
        <h2 className='logo'>PetShop</h2>
        <ul>
            <li className='current-menu-item'>
                <a>TRANG CHỦ</a>
            </li>
            <li>
                <a>THÚ CƯNG</a>
            </li>
            <li>
                <a>PHỤ KIỆN</a>
            </li>
            <li>
                <a>DỊCH VỤ</a>
            </li>
            <li>
                <a>GIỚI THIỆU</a>
            </li>
            <li>
                <a>LIÊN HỆ</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar