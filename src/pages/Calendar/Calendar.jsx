import React from 'react'
import "./Calendar.scss"
import Logo from '../../assets/image/Home_images/logo.svg'
import Facebook from '../../assets/image/Home_images/fb.png'
import Vk from '../../assets/image/Home_images/vk.png'
import Whapp from '../../assets/image/Home_images/whapp.png'
import Insta from '../../assets/image/Home_images/insta.png'
import Youtube from '../../assets/image/Home_images/youtube.png'
import Location from '../../assets/image/SmiAbout_images/location.png'
import SailIcon from '../../assets/image/SmiAbout_images/sail-icon.svg'
import TgIcon from '../../assets/image/SmiAbout_images/tg-icon.svg'
import WhIcon from '../../assets/image/SmiAbout_images/wh-icon.svg'
import Icon from '../../assets/image/SmiAbout_images/icon.svg'
import CheckIcon from '../../assets/image/SmiAbout_images/check.svg'
import { Link } from 'react-router-dom'

function Calendar() {
  return (
    <section className='calendar'>
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
                    <Link href="/">Главная</Link>
                    <span>/</span>
                    <Link href="/smi_about">Сми</Link>
                  </div>
                  <h2>Tenzor spring Cup – ЭТАП 1</h2>
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
      <div className="calendar__main">
        <div className="container">
          <div className="calendar__main-inner">
            <span>Tenzor spring Cup – ЭТАП 1</span>
            <h2>Общая информация</h2>
            <div className="calendar__all">
              <div className="calendar__all-inner">
                <button className='top-btn'>Стартует через 8 дней</button>
                <div className="data">
                  <span>03.04</span>
                  <div className="liner"></div>
                  <span>15.04</span>
                </div>
                <div className="materk">
                  <div className="boxs">
                    <div className="box">
                      <div className="img">
                        <img src={Location} alt="" />
                      </div>
                      <div className="info">
                        <span>Место провдения</span>
                        <h3>PORT OF BAKU</h3>
                        <p>Проспект Нефтяников 62 Баку, Азербайджан</p>
                        <Link href="#">На карте Google</Link>
                      </div>
                    </div>
                    <div className="box">
                      <div className="img">
                        <img src={SailIcon} alt="" />
                      </div>
                      <div className="info">
                        <span>Организатор</span>
                        <h3>Tenzor Sailing club</h3>
                        <div className="contact">
                          <Link href="#"><img src={TgIcon} alt="" /></Link>
                          <Link href="#"><img src={WhIcon} alt="" /></Link>
                          <Link href="tel+7 929 951 37 77">+7 929 951 37 77</Link>
                        </div>
                      </div>
                    </div>
                    <div className="box">
                      <div className="img">
                        <img src={Icon} alt="" />
                      </div>
                      <div className="info">
                        <span>Категория мероприятия</span>
                        <h3>Tenzor Spring Cup, Регата выходного дня</h3>
                      </div>
                    </div>
                  </div>
                  <div className="liner"></div>
                  <div className="goals">
                    <h2>Цели соревнования</h2>
                    <div className="goals-inner">
                      <div>
                        <div className="block">
                          <img src={CheckIcon} alt="" />
                          <span>популяризация и развитие парусного спорта в Российской Федерации и Азербайджанской Республики</span>
                        </div>
                        <div className="block">
                          <img src={CheckIcon} alt="" />
                          <span>пропаганда активного и здорового образа жизни</span>
                        </div>
                      </div>
                      <div>
                        <div className="block">
                          <img src={CheckIcon} alt="" />
                          <span>укрепление международных связей с яхт-клубами Европы и мира</span>
                        </div>
                        <div className="block">
                          <img src={CheckIcon} alt="" />
                          <span>выявление сильнейших команд по итогам Соревнования.</span>
                        </div>
                      </div>
                    </div>
                    <button className='bottom-btn'>Узнать больше</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="calendar-asaid">
        <div className="container">
          <h2>Участвовать в соревнованиях</h2>
          <button>Быстрая запись</button>
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

export default Calendar