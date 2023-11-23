import React from 'react'
import './Members.scss'
import Members1 from '../../../assets/image/Aboutimg/members_img1.svg'
import Members2 from '../../../assets/image/Aboutimg/members_img2.svg'
import Members3 from '../../../assets/image/Aboutimg/members_img3.svg'
import Members4 from '../../../assets/image/Aboutimg/members_img4.svg'
function Members() {
    return (
        <div className='Members'>
            <div className="container">
                <div className="members_inner">
                    <div className="members_hero">
                        <div className="members_left">
                            <h4 className='members_title'>tENZOR sAILING CLUB</h4>
                            <h2 className='members_titlef'>Членство в клубе</h2>
                            <p className='members_describtion'>Система членства в яхт-клубе Tenzor Sailing Club (TSC) направлена на объединение активных, успешных и многогранных людей в сообщество паруса. Здесь можно делиться опытом, ценностями и получать новые знания, расширять круг интересов и общения.</p>
                            <p>Для членов клуба будет обеспечена атмосфера экслюзивности за счет ряда привилегий, услуг и сервисов.</p>
                            <p className='members_span'>В нашем яхт-клубе всегда царит атмосфера свободы, состязательности, позитивных эмоций, а также самый высокий уровень комфорта и обслуживания!</p>
                        </div>
                        <div className="members_right">
                            <span className='top'>
                                <img src={Members1} alt="" />
                                <img src={Members2} alt="" />
                            </span>
                            <span className='bottom'>
                                <img src={Members3} alt="" />
                                <img src={Members4} alt="" />
                            </span>
                        </div>
                    </div>
                    <div className='members_div'>
                        <button>Оформить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Members