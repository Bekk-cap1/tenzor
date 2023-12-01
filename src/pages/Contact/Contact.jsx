import React from 'react'
import "./Contact.scss"
import Logo from '../../assets/image/Home_images/logo.svg'
import Facebook from '../../assets/image/Home_images/fb.png'
import Vk from '../../assets/image/Home_images/vk.png'
import Whapp from '../../assets/image/Home_images/whapp.png'
import Insta from '../../assets/image/Home_images/insta.png'
import Youtube from '../../assets/image/Home_images/youtube.png'
import Address from '../../assets/image/Home_images/address.png'
import RightImg from '../../assets/image/Home_images/img-1.png'
import LeftImg from '../../assets/image/Home_images/img-2.png'
import Img from '../../assets/image/Home_images/img.png'
import Circle from '../../assets/image/Home_images/circle.png'
import CloseIcon from '../../assets/image/Home_images/close-icon.svg'
import { Link } from 'react-router-dom'

function Contact() {
  const handler = (e) => {
    e.preventDefault()
    let a = e.target.user.value
    let b = e.target.password.value
    if(a.length >= 6 && b.length >= 8) {
      console.log("tog'ri");
    }else {
      console.log("hato");
    }
    
    e.target.user.value = ""
    e.target.password.value = ""
  }

  return (
    <>
    <div className="zakas">
      <div className="container">
        <div className="zakas-inner">
            <button className='close-btn'><img src={CloseIcon} alt="" /></button>
            <h2 className='title'>Вход в аккаунт</h2>
            <p className='text'>Возможный текст о том, что войдя в кабинет  процедура оформления заказа будет быстрее и легче </p>
            <form onSubmit={handler} className='zakas-form'>
              <input name='user' className='user' type="text" />
              <input name='password' className='password' type="number" />
              <Link href="#" className='forgot'>Забыли пароль?</Link>
              <button className='form-btn'>Войти</button>
              <h3>У вас еще нет аккаунта?</h3>
              <Link href="#" className='login'>Зарегистрироваться</Link>
              <span>или</span>
              <button className='login-with'>Продолжить без регистрации</button>
            </form>
        </div>
      </div>
    </div>
    <section className='contact'>
      <header>
        <div className="header">
          <div className="container">
            <div className="header__inner">
              <div className="head">
                <ul className='list__right'>
                  <li><Link href="/"><img src={Logo} alt="" /></Link></li>
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
                  <h2>Контакты</h2>
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
      <div className="contact__main">
        <div className="container">
          <div className="contact__main-inner">
            <div className="right">
              <h3 className='sub-title'>Контактная информация</h3>
              <span className='title'>141052, Россия, Московская область, город Мытищи, д. Румянцево,
                ул. Пестовская</span>
              <p className='text'>(проезд до шлагбаума с указателем «яхт-клуб Tenzor Sailing Club»)</p>
              <a className='phone-number' href="tel8 (495) 121-3-777">8 (495) 121-3-777</a>
              <Link className='email' href="info@tanzor-sailing-club.com">info@tanzor-sailing-club.com</Link>
              <span className='gps'><b>GPS-координаты</b>: N 56.096555 E 37.629250</span>
              <button className='contact__main-btn'>у меня остались вопросы</button>
            </div>
            <div className="left">
              <img src={Address} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact__asaid">
        <div className="container">
          <div className="contact__asaid-inner">
          <div className="right">
          <img src={RightImg} alt="" />
        </div>
        <div className="center">
            <h2>Как добраться</h2>
            <div className="block">
              <div className="circle">
                <img src={Circle} alt="" />
              </div>
              <div className="info">
                <span>Как добраться</span>
                <p>На автомобиле
                  на автомобиле – 38-й километр Дмитровского шоссе; ориентир – за магазин «Мираторг» направо (поворот и указатель на Катуар, Марфино); далее через Марфино, Малое Ивановское, Николо-Прозорово, Румянцево; проезд до шлагбаума с указателем «яхт-клуб Tenzor Sailing Club»
                  по воде
                  на катере, 81 км судового хода, в районе деревни Румянцево, правый берег водохранилища.
                  Комплекс обустроен гостевыми причалами, позволяющими принимать яхты и обеспечивать комфортную встречу гостей, прибывших по воде.</p>
              </div>
            </div>
            <div className="block">
              <div className="circle">
                <img src={Circle} alt="" />
              </div>
              <div className="info">
                <span>по воде</span>
                <p>на катере, 81 км судового хода, в районе деревни Румянцево, правый берег водохранилища.</p>
                <div className="block-inner">
                  <div className="img">
                    <img src={Img} alt="" />
                  </div>
                  <div className="info">
                    <span>Комплекс обустроен гостевыми причалами, позволяющими принимать яхты и обеспечивать комфортную встречу гостей, прибывших по воде.</span>
                  </div>
                </div>
              </div>
            </div>

        </div>
        <div className="left">
          <img src={LeftImg} alt="" />
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
              <Link className='phone-number' href="tel8 (495) 121-3-777">8 (495) 121-3-777</Link>
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
    </>
  )
}

export default Contact