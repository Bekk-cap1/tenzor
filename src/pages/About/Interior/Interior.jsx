import React from 'react'
import './Interior.scss'
import Interiorclun from '../../../assets/image/Aboutimg/Interior_topimg.png'
import { data } from '../../../lib/About/data'

function Interior() {
  return (
    <div className='Interior'>
        <div className="container">
            <div className="interior_inner">
                <div className="Interior_top">
                    <div className="interior_left">
                        <h4>КЛУБНЫЙ ДОМ</h4>
                        <h2>иНТЕРЬЕР</h2>
                        <p>Рыбатекст используется дизайнерами, проектировщиками, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста.</p>
                    </div>
                    <div className='interior_right'>
                        <img src={Interiorclun} alt="" />
                    </div>
                </div>
                <div className="interior_bottom">
                    <ul className='interior_list'>
                        {
                            data?.map((item,index)=>(
                                <li className='list_items' key={index}>
                                    <img src={item.img} alt="" />
                                    <h2>{item.title}</h2>
                                    <p>{item.describtion}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Interior