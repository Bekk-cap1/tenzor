import React, { useState } from 'react'
import './Home.scss'
import logo from "../../assets/image/Home_images/logo.svg"
import head_logo from "../../assets/image/Home_images/head__logo.svg"
import { Link } from 'react-router-dom'

function Home() {
  const [btnClick, setBtnClick] = useState(false)
  const [btnClick2, setBtnClick2] = useState(false)
  const [btnClick3, setBtnClick3] = useState(false)

  const click = (e) => {
    const tagB2 = document.getElementById('b2')
    const tagB = document.getElementById('b')

    if ("service" == e.target.name) {
      setBtnClick(!btnClick)
      setBtnClick2(false)
      setBtnClick3(false)
      if (btnClick !== true) {
        tagB.style.transform = 'rotate(180deg)'
        tagB.style.marginTop = '-2px'
        tagB2.style.transform = 'rotate(0deg)'
        tagB2.style.marginTop = '3px'
      }
      else {
        tagB.style.transform = 'rotate(0deg)'
        tagB.style.marginTop = '7px'
      }
    }
    if ("academy" == e.target.name) {
      setBtnClick2(!btnClick2)
      setBtnClick(false)
      setBtnClick3(false)
      if (btnClick2 !== true) {
        tagB2.style.transform = 'rotate(180deg)'
        tagB2.style.marginTop = '-2px'
        tagB.style.transform = 'rotate(0deg)'
        tagB.style.marginTop = '7px'
      }
      else {
        tagB2.style.transform = 'rotate(0deg)'
        tagB2.style.marginTop = '3px'
      }
    }
    if ("again" == e.target.name) {
      setBtnClick3(!btnClick3)
      setBtnClick(false)
      setBtnClick2(false)
      console.log(btnClick3);
      tagB.style.transform = 'rotate(0deg)'
      tagB.style.marginTop = '7px'
      tagB2.style.transform = 'rotate(0deg)'
      tagB2.style.marginTop = '3px'
    }
  }

  return (
    <div>
      <header>
        <div className="header">
          <div className="header__container">
            <div className="header__container__inner">
              <div className="head">
                <ul>
                  <li><img src={logo} alt="" /></li>
                  <li>О клубе</li>
                  <button onClick={click} name="service">Услуги <b id='b'><i class="bi bi-chevron-compact-down"></i></b></button>
                  <ul className={btnClick == true ? "active__li" : 'nonactive__li'}>
                    <li>Регаты и Тимбилдинг</li>
                    <li>ЧАСТНЫЕ МЕРОПРИЯТИЯ И ПРАЗДНИКИ</li>
                    <li>Аренда яхт</li>
                  </ul>
                  <button name='academy' className='academy' onClick={click}>Академия TSA <b id='b2'><i class="bi bi-chevron-compact-down"></i></b></button>
                  <ul className={btnClick2 == true ? "active__li active__academy" : 'nonactive__li'}>
                    <li>Детская парусная академия</li>
                    <li>Юный рулевой</li>
                    <li>ТРЕНИРОВКИ ДЛЯ ВЗРОСЛЫХ</li>
                  </ul>
                  <li>Success Race</li>
                  <li>Tenzor international cup</li>
                  <button onClick={click} name="again">Ещё...</button>
                  <ul className={btnClick3 == true ? "active__again" : 'nonactive__li'}>
                    <li>
                      <ul className='again__first'>
                        <li><Link to={`/about`}><b>О клубе</b></Link></li>
                        <li><b>Услуги</b></li>
                        <li><Link to={`/`}>Корпоративные регаты и тимбилдинг</Link></li>
                        <li><Link to={`/activity`}>Частные мероприятия</Link></li>
                        <li><Link to={`/rent`}>Аренда яхт</Link></li>
                        <li><Link to={`/`}>Страхование участников</Link></li>
                      </ul>
                    </li>
                    <li>
                      <ul className='again__second'>
                        <li>Академия TSA</li>
                        <li><Link to={`/children`}>Детская парусная академия</Link></li>
                        <li><Link to={`/adults`}>Тренировки для взрослых</Link></li>
                        <li><Link to={`/one_course`}>Расписание и стоимость занятий</Link></li>
                        <li><Link to={`/`}>Записаться на занятие</Link></li>
                        <li><Link to={`/`}>SUCCESS RACE</Link></li>
                        <li><Link to={`/`}>TENZOR INTERNATIONAL CUP</Link></li>
                      </ul>
                    </li>
                    <li>
                      <ul className='again__third'>
                        <li><Link to={`/`}>События клуба</Link></li>
                        <li><Link to={`/`}>Магазин</Link></li>
                        <li><Link to={`/`}>Сми о нас</Link></li>
                        <li><Link to={`/`}>Контакты</Link></li>
                      </ul>
                    </li>
                  </ul>
                </ul>
                <ul>
                  <li>+998 (94) 469-25-09</li>
                  <li><i class="bi bi-geo-alt"></i></li>
                  <li><i class="bi bi-person"></i></li>
                  <li><i class="bi bi-search"></i></li>
                </ul>
              </div>
              <div className="head__logo">
                <div className="head__right">
                  <img src={head_logo} alt="" />
                  <p>Яхт-клуб международного уровня, предлагающий комплекс яхтенных услуг премиум  класса</p>
                </div>
                <ul>
                  <li><a href="http://" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a></li>
                  <li><a href="http://" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a></li>
                  <li><a href="http://" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a></li>
                  <li><a href="http://" target="_blank" rel="noopener noreferrer"><i class="bi bi-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Home