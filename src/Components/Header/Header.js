import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header>
        <nav className="header__nav">
            <ul className="header__nav_ul">
                <li className="header__nav_link"><Link to="/Main" className="header__a">Главная</Link></li>
                <li className="header__nav_link"><Link to="/Cotigor" className="header__a">Катигории</Link></li>
                <li className="header__nav_link"><Link to="/Cart" className="header__a">Корзина</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header