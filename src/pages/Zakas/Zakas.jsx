import React from 'react'
import { Link } from 'react-router-dom'
import Logoo from '../../assets/image/Public_images/logo-icon.svg'
import ShopIcon from '../../assets/image/Public_images/shop.svg'
import Logo from '../../assets/image/Home_images/logo.svg'
import Facebook from '../../assets/image/Home_images/fb.png'
import Vk from '../../assets/image/Home_images/vk.png'
import Whapp from '../../assets/image/Home_images/whapp.png'
import Insta from '../../assets/image/Home_images/insta.png'
import Youtube from '../../assets/image/Home_images/youtube.png'
import './Zakas.scss'

function Zakas() {
  return (
    <section className='zakaz'>
      <nav className='nav'>
        <div className="container">
          <div className="nav-inner">
            <ul className='nav-list'>
              <a href="/"><img src={Logoo} alt="" /></a>
              <li className='nav-item'>Женщинам</li>
              <li className='nav-item'>Мужчинам</li>
              <li className='nav-item'>Аксессуары</li>
              <li className='nav-item'>Еще</li>
            </ul>
            <ul className="nav-list">
              <button><i className="bi bi-search"></i></button>
              <button><i className="bi bi-person"></i></button>
              <div className="shop">
                <button><li className='nav-item'><img src={ShopIcon} alt="" /></li></button>
                <span>0 товаров</span>
              </div>
              <select className='leng'>
                <option value="ENG">ENG</option>
              </select>
            </ul>
          </div>
          <div className="links">
            <Link href='/'>Главная</Link>
            <span>/</span>
            <Link href='/'>Корзина</Link>
          </div>
        </div>
      </nav>
      <div className="zakas__hero">
        <div className="container">
          <div className="zakaz__hero-inner">
            <div className="checkout">
              <h2>Офрмить заказ</h2>
              <div className='data'>
                <h3>Контактные данные</h3>
                <input type="text" placeholder='Фамилия*' />
                <input type="text" placeholder='Имя*' />
                <input type="text" placeholder='Отчество*' />
                <input type="text" placeholder='Контактный телефон*' />
                <input type="text" placeholder='E-mail*' />
                <span>* поля обязательные к заполнению</span>
              </div>
              <div className='delivery'>
                <h3>Доставка</h3>
                <select>
                  <option value="Россия">Россия</option>
                </select>
                <select>
                  <option value="Россия">Москва</option>
                </select>
                <div className="block">
                  <div className="right">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <div>
                      <span>Самовывоз</span>
                      <p>Заберите посылку лично в офисе в Москве по адресу Лорем Ипсум 59, каждый день с 12:00 до 18:00</p>
                    </div>
                  </div>
                  <div className="left">
                    <span>+ 0 руб</span>
                  </div>
                </div>
                <div className="block">
                  <div className="right">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <div>
                      <span>СДЭК: Доставка в точки самовывоза</span>
                      <p>Доставка в пункты выдачи компании СДЭК</p>
                    </div>
                  </div>
                  <div className="left">
                    <span>от 770 руб</span>
                  </div>
                </div>
                <div className="block">
                  <div className="right">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <div>
                      <span>Курьером</span>
                      <p>Тариф “Посылка”, до 3х рабочих дней</p>
                    </div>
                  </div>
                  <div className="left">
                    <span>+ 910 руб</span>
                  </div>
                </div>
                <div className="address">
                  <textarea placeholder='Адрес*'></textarea>
                </div>
                <div className="comment">
                  <textarea placeholder='Комментарии к заказу'></textarea>
                </div>
                <div className="payments">
                  <h3>Оплата</h3>
                  <div className="payment-1">
                      <div>
                        <input type="checkbox" />
                      </div>
                      <div>
                        <span>Тинькофф оплата</span>
                        <p>Оплата всей суммы картами VISA, MasterCard, МИР</p>
                      </div>
                  </div>
                  <div className="payment-2">
                      <div>
                        <input type="checkbox" />
                      </div>
                      <div>
                        <span>Наложенный платеж</span>
                        <p>Оплата всей суммы при получении товара</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order">
                <h2>Ваш заказ</h2>
                <div>
                  <h4>итого</h4>
                  <span>32 400 руб</span>
                </div>
                <div>
                  <h4>скидка</h4>
                  <span>0 руб</span>
                </div>
                <div>
                  <h4>достака</h4>
                  <span>910 руб</span>
                </div>
                <div className="liner"></div>
                <div>
                  <h4>к оплате</h4>
                  <span>33 310 руб</span>
                </div>
                <button className='zakas-btn'>Подтвердить заказ</button>
                <div className="checking">
                  <input type="checkbox" />
                  <span>Я согласен на обработку <Link href="#">персональных данных</Link></span>
                </div>
              </div>
          </div>
        </div>
      </div>
      <footer className='zakas-footer'>
        <div className="container">
          <ul className="footer-list">
            <li className="footer-item">
              <Link href="/"><img src={Logo} alt="" /></Link>
              <div className="social-media">
                <Link href="#"><img src={Facebook} alt="" /></Link>
                <Link href="#"><img src={Vk} alt="" /></Link>
                <Link href="#"><img src={Whapp} alt="" /></Link>
                <Link href="#"><img src={Insta} alt="" /></Link>
                <Link href="#"><img src={Youtube} alt="" /></Link>
              </div>
              <div className="make">
                <span>© 2022 - Tenzor Sailing Club</span>
              </div>
              <p className='textt'>Политика конфиденциальности Обработка персональных данных</p>
            </li>
            <li className='footer-item'>
              <h3>Покупателям</h3>
              <Link href="#">Оплата</Link>
              <Link href="#">Доставка</Link>
              <Link href="#">Возврат</Link>
              <Link href="#">Подарочные сертификаты</Link>
            </li>
            <li className='footer-item'>
              <h3>Контакты</h3>
              <a className='phone-number' href="tel8 (495) 121-3-777">8 (495) 121-3-777</a>
              <Link href="info@tenzor-sailing-club.com">info@tenzor-sailing-club.com</Link>
              <p>141052, Россия, Московская область, г. Мытищи, д. Румянцево ул. Пестовская
                GPS-координаты: N 56.096555 E 37.629250</p>
              <Link href="#">Открыть в Яндекс картах</Link>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  )
}

export default Zakas