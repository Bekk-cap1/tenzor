import React from 'react'
import "./SMI_About.scss"
import Logo from '../../assets/image/Home_images/logo.svg'
import Facebook from '../../assets/image/Home_images/fb.png'
import Vk from '../../assets/image/Home_images/vk.png'
import Whapp from '../../assets/image/Home_images/whapp.png'
import Insta from '../../assets/image/Home_images/insta.png'
import Youtube from '../../assets/image/Home_images/youtube.png'
import Sim1 from '../../assets/image/SmiAbout_images/smi-1.png'
import Sim2 from '../../assets/image/SmiAbout_images/smi-2.png'
import Sim3 from '../../assets/image/SmiAbout_images/smi-3.png'
import Sim4 from '../../assets/image/SmiAbout_images/smi-4.png'
import Sim5 from '../../assets/image/SmiAbout_images/smi-5.png'
import Sim6 from '../../assets/image/SmiAbout_images/smi-6.png'
import Sim7 from '../../assets/image/SmiAbout_images/smi-7.png'
import Sim8 from '../../assets/image/SmiAbout_images/smi-8.png'
import Sim9 from '../../assets/image/SmiAbout_images/smi-9.png'
import Sim10 from '../../assets/image/SmiAbout_images/smi-10.png'
import Sim11 from '../../assets/image/SmiAbout_images/smi-11.png'
import { Link } from 'react-router-dom'

function SMI_About() {
  return (
    <section className='smi__about'>
      <header>
        <div className="header">
          <div className="container">
            <div className="header__inner">
              <div className="head">
                <ul className='list__right'>
                  <li><a href="/"><img src={Logo} alt="" /></a></li>
                  <li>О клубе</li>
                  <select name="" id="">
                    <option value="">Услуги</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                  <select name="" id="">
                    <option value="">Академия TSA</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                  <li>Success Race</li>
                  <li>Tenzor international cup</li>
                  <li>Еще...</li>
                </ul>
                <ul className='list__left'>
                  <li>+998 (94) 469-25-09</li>
                  <li><i className="bi bi-geo-alt"></i></li>
                  <button><li><i className="bi bi-person"></i></li></button>
                  <li><i className="bi bi-search"></i></li>
                </ul>
              </div>
              <div className="hero">
                <div className="hero__inner">
                  <Link href="/">Главная</Link>
                  <h2>СМИ о нас</h2>
                </div>
                <div className="social-media">
                  <Link href="#"><img src={Facebook} alt="" /></Link>
                  <Link href="#"><img src={Vk} alt="" /></Link>
                  <Link href="#"><img src={Whapp} alt="" /></Link>
                  <Link href="#"><img src={Insta} alt="" /></Link>
                  <Link href="#"><img src={Youtube} alt="" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="smi__about-main">
          <div className="blog">
            <img src={Sim1} alt="" />
            <div className="box">
              <h3>«Лето в Подмосковье» стартовало регатой и открытием нового яхт-клуба</h3>
              <div className="date">
                <span>19.05.2022</span>
                <Link href='/one_publication'>Подробнее</Link>
              </div>
            </div>
          </div>
          <div className="blog">
            <img src={Sim2} alt="" />
            <div className="box">
              <h3>ОТКРЫТИЕ TENZOR SAILING CLUB. В ПОДМОСКОВЬЕ ПОЯВИЛСЯ НОВЫЙ КЛАССНЫЙ ЯХТ-КЛУБ</h3>
              <div className="date">
                <span>16.05.2022</span>
                <Link href='/one_publication'>Подробнее</Link>
              </div>
            </div>
          </div>
          <div className="blog">
            <img src={Sim3} alt="" />
            <div className="box">
              <h3>Сюжет телеканала 360 об открытии яхт-клуба TSC</h3>
              <div className="date">
                <span>16.05.2022</span>
                <Link href='/one_publication'>Подробнее</Link>
              </div>
            </div>
          </div>
          <div className="blog">
            <img src={Sim4} alt="" />
            <div className="box">
              <h3>Поднять паруса: в Подмосковье начался первый этап серии регат «Кубок Пестово»</h3>
              <div className="date">
                <span>16.05.2022</span>
                <Link href='/one_publication'>Подробнее</Link>
              </div>
            </div>
          </div>
          <div className="blog">
            <img src={Sim5} alt="" />
            <div className="box">
              <h3>Поднять паруса: как прошло открытие яхтенного сезона в Пестово</h3>
              <div className="date">
                <span>16.05.2022</span>
                <Link href='/one_publication'>Подробнее</Link>
              </div>
            </div>
          </div>
          <div className="blog">
            <img src={Sim6} alt="" />
            <div className="box">
              <h3>Сюжет МАТЧ ТВ про открытие клуба</h3>
              <div className="date">
                <span>16.05.2022</span>
                <Link href='/one_publication'>Подробнее</Link>
              </div>
            </div>
          </div>
          <div className="blog">
            <img src={Sim7} alt="" />
            <div className="box">
              <h3>Академия парусного спорта в Пестово</h3>
              <div className="date">
                <span>13.05.2022</span>
                <Link href='/one_publication'>Подробнее</Link>
              </div>
            </div>
          </div>
          <div className="blog">
            <img src={Sim8} alt="" />
            <div className="box">
              <h3>Академия парусного спорта откроется в Подмосковье 14 мая</h3>
              <div className="date">
                <span>19.05.2022</span>
                <Link href='/one_publication'>Подробнее</Link>
              </div>
            </div>
          </div>
          <div className="blog">
            <img src={Sim9} alt="" />
            <div className="box">
              <h3>В Подмосковье 14 мая откроется Академия парусного спорта</h3>
              <div className="date">
                <span>10.05.2022</span>
                <Link href='/one_publication'>Подробнее</Link>
              </div>
            </div>
          </div>
          <div className="blog">
            <img src={Sim10} alt="" />
            <div className="box">
              <h3>Андрей Пушкин: «Мы делаем масштабный яхтенный проект высокого уровня!»</h3>
              <div className="date">
                <span>26.04.2022</span>
                <Link href='/one_publication'>Подробнее</Link>
              </div>
            </div>
          </div>
          <div className="blog">
            <img src={Sim11} alt="" />
            <div className="box">
              <h3>Радио Зенит. В гостях: Лина Арнаутова, организатор яхтенных турниров в Петербурге – 31.03.22</h3>
              <div className="date">
                <span>10.04.2022</span>
                <Link href='/one_publication'>Подробнее</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className="container">
          <ul className="footer-list">
            <li className="footer-item">
              <img src={Logo} alt="" />
            </li>
            <li className="footer-item">
              <h3 className='title'>Контакты</h3>
              <span className='text'>141052, Россия, Московская область, г. Мытищи, д. Румянцево ул. Пестовская
                GPS-координаты: N 56.096555 E 37.629250</span>
              <Link className='open' href="#">Открыть в Яндекс картах</Link>
              <a className='phone-number' href="tel8 (495) 121-3-777">8 (495) 121-3-777</a>
              <Link className='email' href="info@tenzor-sailing-club.com">info@tenzor-sailing-club.com</Link>
              <div className="social-media">
                <Link href="#"><img src={Facebook} alt="" /></Link>
                <Link href="#"><img src={Vk} alt="" /></Link>
                <Link href="#"><img src={Whapp} alt="" /></Link>
                <Link href="#"><img src={Insta} alt="" /></Link>
                <Link href="#"><img src={Youtube} alt="" /></Link>
              </div>
            </li>
            <li className='footer-item'>
              <h3>уСЛУГИ</h3>
              <Link href="#">Корпоративные регаты</Link>
              <Link href="#">Тимбилдинг</Link>
              <Link href="#">Частные мероприятия</Link>
              <Link href="#">Аренда яхт</Link>
              <Link href="#">Страхование участников</Link>
              <span>SUCCESS RACE</span>
              <span>TENZOR INTERNATIONAL CUP</span>
            </li>
            <li className='footer-item'>
              <h3>Академия TSA</h3>
              <Link href="#">Детская парусная академия</Link>
              <Link href="#">Тренировки для взрослых</Link>
              <Link href="#">Расписание и стоимость занятий</Link>
              <Link href="#">Записаться на занятие</Link>
              <span>Магазин</span>
              <span>СМИ о нас</span>
              <span>Ближайшие события</span>
            </li>
          </ul>
        </div>
        <div className="footer-inner">
          <div className="container">
            <div className="block">
              <div className="right">
                <h4>Политика конфиденциальности</h4>
                <span></span>
                <h4>Обработка персональных данных</h4>
              </div>
              <div className="left">
                <span>© 2022 - Tenzor Sailing Club</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default SMI_About