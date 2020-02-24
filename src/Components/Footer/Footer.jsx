import React from 'react';
import { ReactComponent as Logo } from '../App/assets/logo/SVG/Logo.svg';
import { ReactComponent as Toxin } from '../App/assets/logo/SVG/TOXIN.svg';



const Footer = () =>{
return(
    <div className="footer">
        <div className="container">
            <div className="asd fix">
                <div className="bottom_logo__box">
                    <Logo/>
                </div>
                    <Toxin/>    
                <div className="logo_adv">
                    Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»              
                </div>
            </div>

            <div className="asd2 fix">
                <ul className="footer_navmenu">
                    <p>Навигация</p>
                    <li>О нас</li>
                    <li>Новости</li>
                    <li>Служба поддержки</li>
                    <li>Услуги</li>
                </ul>
            </div>

            <div className="asd3 fix">
                <ul className="footer_about">
                    <p>О нас</p>
                    <li>О сервисе</li>
                    <li>Наша команда</li>
                    <li>Вакансии</li>
                    <li>Инвесторы</li>
                </ul>
            </div>

            <div className="asd4 fix">
                <ul className="footer_support">
                    <p>Служба Поддержки</p>
                    <li>Соглашения</li>
                    <li>Сообщества</li>
                    <li>Связь с нами</li>
                </ul>
            </div>

            <div className="asd5 fix">
                <ul className="footer_support">
                    <p>Подписка</p>
                    <li>Получайте специальные предложения и новости сервиса</li>
                </ul>
                <div class="email_field">
                    <label for="email"></label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Email" required/>
                    <a id="sendmail" href="#">
                    <i class="material-icons" id="forward">arrow_forward</i>
                    </a>
                </div>
            </div>   
        </div>

        <div className="copyright_menu">
            <p>Copyright © 2018 Toxin отель. Все права зачищены</p>
            <div className="media">
                <a href="#">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                    <i class="fab fa-facebook-square"></i>
                </a>
                <a href="#">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Footer;