import React from 'react'
import "./One_publication.scss"
import Logo from '../../../assets/image/Home_images/logo.svg'
import Facebook from '../../../assets/image/Home_images/fb.png'
import Vk from '../../../assets/image/Home_images/vk.png'
import Whapp from '../../../assets/image/Home_images/whapp.png'
import Insta from '../../../assets/image/Home_images/insta.png'
import Youtube from '../../../assets/image/Home_images/youtube.png'

function One_publication() {
  return (
    <section className='publication'>
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
                  <div className="link">
                  <a href="/">Главная</a>
                  <span>/</span>
                  <a href="/smi_about">Сми</a>
                  </div>
                  <h2>СМИ о нас</h2>
                </div>
                <div className="social-media">
                  <a href="#"><img src={Facebook} alt="" /></a>
                  <a href="#"><img src={Vk} alt="" /></a>
                  <a href="#"><img src={Whapp} alt="" /></a>
                  <a href="#"><img src={Insta} alt="" /></a>
                  <a href="#"><img src={Youtube} alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
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
              <a className='open' href="#">Открыть в Яндекс картах</a>
              <a className='phone-number' href="tel8 (495) 121-3-777">8 (495) 121-3-777</a>
              <a className='email' href="info@tenzor-sailing-club.com">info@tenzor-sailing-club.com</a>
              <div className="social-media">
                <a href="#"><img src={Facebook} alt="" /></a>
                <a href="#"><img src={Vk} alt="" /></a>
                <a href="#"><img src={Whapp} alt="" /></a>
                <a href="#"><img src={Insta} alt="" /></a>
                <a href="#"><img src={Youtube} alt="" /></a>
              </div>
            </li>
            <li className='footer-item'>
              <h3>уСЛУГИ</h3>
              <a href="#">Корпоративные регаты</a>
              <a href="#">Тимбилдинг</a>
              <a href="#">Частные мероприятия</a>
              <a href="#">Аренда яхт</a>
              <a href="#">Страхование участников</a>
              <span>SUCCESS RACE</span>
              <span>TENZOR INTERNATIONAL CUP</span>
            </li>
            <li className='footer-item'>
              <h3>Академия TSA</h3>
              <a href="#">Детская парусная академия</a>
              <a href="#">Тренировки для взрослых</a>
              <a href="#">Расписание и стоимость занятий</a>
              <a href="#">Записаться на занятие</a>
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

export default One_publication