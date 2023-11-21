import React from 'react'
import './Home.scss'
import logo from "../../assets/image/Home_images/logo.svg"

function Home() {
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
                  <select name="" id="">
                    <option value="">Услуги</option>
                    <option value="">Регаты и Тимбилдинг</option>
                    <option value="">ЧАСТНЫЕ МЕРОПРИЯТИЯ И ПРАЗДНИКИ</option>
                    <option value="">Аренда яхт</option>
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
                <ul>
                  <li>+998 (94) 469-25-09</li>
                  <li><i class="bi bi-geo-alt"></i></li>
                  <li><i class="bi bi-person"></i></li>
                  <li><i class="bi bi-search"></i></li>
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