import React, { useState } from 'react'
import './Home.scss'
import logo from "../../assets/image/Home_images/logo.svg"
import head_logo from "../../assets/image/Home_images/head__logo.svg"
import search__logo from "../../assets/image/Home_images/search__logo.svg"
import { Link } from 'react-router-dom'
import { dataActivity, dataBoat, dataTenzor } from '../../assets/data/home/home'

function Home() {
  const [btnClick, setBtnClick] = useState(false)
  const [btnClick2, setBtnClick2] = useState(false)
  const [btnClick3, setBtnClick3] = useState(false)
  const [btnSearch, setBtnSearch] = useState(false)

  const tagB2 = document.getElementById('b2')
  const tagB = document.getElementById('b')
  const click = (e) => {
    if ('searchh' == e.target.parentNode.name) {
      setBtnSearch(true)
      setBtnClick3(false)
      setBtnClick(false)
      setBtnClick2(false)
      tagB.style.transform = 'rotate(0deg)'
      tagB.style.marginTop = '7px'
      tagB2.style.transform = 'rotate(0deg)'
      tagB2.style.marginTop = '3px'
    }
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
    else if ("academy" == e.target.name) {
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
    else if ("again" == e.target.name) {
      setBtnClick3(!btnClick3)
      setBtnClick(false)
      setBtnClick2(false)
      tagB.style.transform = 'rotate(0deg)'
      tagB.style.marginTop = '7px'
      tagB2.style.transform = 'rotate(0deg)'
      tagB2.style.marginTop = '3px'
    }

  }
  const search = (e) => {

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
                  <li><Link to="/about">О клубе</Link></li>
                  <button onClick={click} name="service">Услуги <b id='b'><i className="bi bi-chevron-compact-down"></i></b></button>
                  <ul className={btnClick == true ? "active__li" : 'nonactive__li'}>
                    <li><Link to="/regata">Регаты и Тимбилдинг</Link></li>
                    <li><Link to="/activity">ЧАСТНЫЕ МЕРОПРИЯТИЯ И ПРАЗДНИКИ</Link></li>
                    <li><Link to="/rent">Аренда яхт</Link></li>
                  </ul>
                  <button name='academy' className='academy' onClick={click}>Академия TSA <b id='b2'><i className="bi bi-chevron-compact-down"></i></b></button>
                  <ul className={btnClick2 == true ? "active__li active__academy" : 'nonactive__li'}>
                    <li><Link to="/children">Детская парусная академия</Link></li>
                    <li><Link to="/adults">Юный рулевой</Link></li>
                    <li><Link to="/schedule">ТРЕНИРОВКИ ДЛЯ ВЗРОСЛЫХ</Link></li>
                  </ul>
                  <li><Link to="/success_race">Success Race</Link></li>
                  <li><Link to="/">Tenzor international cup</Link></li>
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
                  <li><i className="bi bi-geo-alt"></i></li>
                  <li><i className="bi bi-person"></i></li>
                  <button onClick={click} name='searchh'><i name='searchh' className="bi bi-search"></i></button>
                  <ul className={btnSearch == true ? 'ulSearch' : 'nonactive__li'}>
                    <li>
                      <img src={search__logo} alt="" />
                      <b><button onClick={() => setBtnSearch(false)}><i className="bi bi-x-lg"></i></button></b>
                    </li>
                    <li>
                      <i className="bi bi-search"></i>
                      <input type="text" placeholder='ВВедите ключевое слово' />
                      <button onClick={search}>ПОИСК</button>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="head__logo">
                <div className="head__right">
                  <img src={head_logo} alt="" />
                  <p>Яхт-клуб международного уровня, предлагающий комплекс яхтенных услуг премиум  класса</p>
                </div>
                <ul>
                  <li><a href="http://" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a></li>
                  <li><a href="http://" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a></li>
                  <li><a href="http://" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a></li>
                  <li><a href="http://" target="_blank" rel="noopener noreferrer"><i className="bi bi-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="tenzor__sailin">
            <ul>
              {
                dataTenzor.map((e) => (
                  <li>
                    <h4>{e.name}</h4>
                    <h1>{e.title}</h1>
                    <p>{e.text}</p>
                    <h6>{e.subtitle}</h6>
                    <button>{e.btnTitle}</button>
                  </li>
                ))
              }
            </ul>
            <ul>
              {
                dataTenzor?.map((e) => (
                  e.img?.map((q) => (
                    <li>
                      <img src={q.image} alt="" />
                    </li>
                  ))
                ))
              }
            </ul>
          </div>

          <div className='boat'>
            {
              dataBoat?.map((e) => (
                <img src={e.img} alt="" />
              ))
            }
          </div>

          <div className="activity">
            <div className='activity__order'>
              <ul>
                {
                  dataActivity?.map((e) => (
                    <li>
                      <h4>{e.name}</h4>
                      <h1>{e.title}</h1>
                      <p>{e.text}</p>
                    </li>
                  ))
                }
              </ul>
              <ul>
                {
                  dataActivity?.map((e) => (
                    e.example?.map((q) => (
                      <li><i class="bi bi-check2"></i>  {q.title}</li>
                    ))
                  ))
                }
              </ul>
              <button>{dataActivity?.map((e) => e.btnText)}</button>
            </div>

            <div className="activity__example">
              <ul>
                {
                  dataActivity.map((e) => (

                    e.objActivity.map((q) => (
                      <li>
                        <img src={q.img} alt="" />
                        <div>
                          <h4>{q.title}</h4>
                          <p>{q.text}</p>
                          <h6><Link to="/">{q.linkText}</Link></h6>
                        </div>
                      </li>
                    ))
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home