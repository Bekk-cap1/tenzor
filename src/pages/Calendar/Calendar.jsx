import React from 'react'
import "./Calendar.scss"
import Location from '../../assets/image/SmiAbout_images/location.png'
import SailIcon from '../../assets/image/SmiAbout_images/sail-icon.svg'
import TgIcon from '../../assets/image/SmiAbout_images/tg-icon.svg'
import WhIcon from '../../assets/image/SmiAbout_images/wh-icon.svg'
import Icon from '../../assets/image/SmiAbout_images/icon.svg'
import CheckIcon from '../../assets/image/SmiAbout_images/check.svg'

function Calendar() {
  return (
    <section className='calendar'>
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
                        <a href="#">На карте Google</a>
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
                          <a href="#"><img src={TgIcon} alt="" /></a>
                          <a href="#"><img src={WhIcon} alt="" /></a>
                          <a href="tel+7 929 951 37 77">+7 929 951 37 77</a>
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
    </section>
  )
}

export default Calendar