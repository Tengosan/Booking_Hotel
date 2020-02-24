import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { ReactComponent as Logo } from '../App/assets/logo/SVG/Logo.svg';
import { ReactComponent as Toxin } from '../App/assets/logo/SVG/TOXIN.svg';


const Header = () =>{
return(
    <header className="header">
        <div className="logo__container">
        <div className="svg-logo__box">
            <Logo/>
        </div>
            <Toxin/>            
        </div>
        <nav class="navmenu">
        <ul class="topmenu">
        <li><a href="#">О нас</a></li>
        <li><a href="#">Услуги
        <i class="material-icons">keyboard_arrow_down</i>
        </a>
            <ul className="submenu">
            <li><a href="">Трансферы</a></li>
            <li><a href="">Путевки</a></li>
            </ul>
        </li>
        <li><a href="#">Вакансии</a></li>
        <li><a href="#">Новости</a></li>
        <li><a href="#">Соглашения
        <i class="material-icons">keyboard_arrow_down</i>
        </a>
            <ul className="submenu">
            <li><a href="">Компании</a></li>
            <li><a href="">Партнеры</a></li>
            </ul>
        </li>
        </ul>
        </nav>
        <button className="top-button-1">
        <a href="#">Войти</a>
        </button>
        <button className="top-button-2">
        <a href="#">Зарегистрироваться</a>
        </button>
    </header>
    )
}

export default Header;