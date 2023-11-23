import React from 'react'
import './And.scss'
import Img1 from '../../../assets/image/Aboutimg/and_topimg1.svg'
import Img2 from '../../../assets/image/Aboutimg/and_topimg2.svg'
import Img3 from '../../../assets/image/Aboutimg/and_bottom2.svg'
import Img4 from '../../../assets/image/Aboutimg/and_imgbottom2.svg'
import Img5 from '../../../assets/image/Aboutimg/and_imgbottom3.png'
function And() {
  return (
    <div className='And'>
        <div className="container">
            <div className="and_inner">
                <h3 className='and_title'>А так же</h3>
                <div className='and_top'>
                    <img src={Img1} alt="" />
                    <div className='and_block1'>
                        <h3>Территория</h3>
                        <p>Зеленая территория яхт-клуба позволяет возводить дополнительные конструкции для проведения спортивных, корпоративных мероприятий и MICE-проектов.</p>
                    </div>
                </div>
                <div className='and_button'>
                    <div className='and_block2'>
                        <h3>Оборудование</h3>
                        <p>Световое и звуковое оборудование Мультимедийные экраны на первой и второй палубах</p>
                    </div>
                    <img src={Img2} alt="" />
                </div>
                <div className="and_equipmentplaces">
                    <div>
                        <img src={Img3} alt="" />
                        <p>Оборудованный гостевой причал</p>
                    </div>
                    <div>
                        <img src={Img4} alt="" />
                        <p>Раздельные зоны раздевалок для мужчин и женщин с индивидуальными шкафчиками, душевые и санузлы</p>
                    </div>
                    <div>
                        <img src={Img5} alt="" />
                        <p>Парковка</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default And