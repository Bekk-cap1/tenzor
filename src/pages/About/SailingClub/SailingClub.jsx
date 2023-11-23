import React from 'react'
import './SailingClub.scss'
import Sailingpng from '../../../assets/image/Aboutimg/sailing_png.svg'
import Sailingright from '../../../assets/image/Aboutimg/sailing_right.svg'
function SailingClub() {
  return (
    <div className='SailingClub'>
        <div className="container">
            <div className="sailing_inner">
                <div className="sailing_top">
                    <div className='sailing_left'>
                        <img src={Sailingpng} alt="" />
                        <p className='left_p1'>Tenzor Sailing Club (TSC) расположен на дебаркадере класса «люкс». Спроектированный финскими архитекторами в современном «эко-тек» стиле, он располагает приятными и комфортными интерьерами клубного дома. Натуральное тиковое дерево в сочетании с дизайнерскими элементами из стекла и металла идеально дополняют общий архитектурный ансамбль здания и яхтенной пристани. </p>
                        <p className='left_p2'>Оснащение Tenzor Sailing Club не имеет аналогов в России, что выделяет яхт-клуб в сегмент премиум-класса.</p>
                    </div>
                    <div className="sailing_right">
                        <img src={Sailingright} alt="" />
                    </div>
                </div>
                <div className="sailing_bottom">
                    <div className='sailing_mp3'>
                      <i class="bi bi-play-circle"></i>
                    </div>
                    <button className='sailing_btn'>Членство в клубе</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SailingClub