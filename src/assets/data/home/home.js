import house__boat1 from '../../image/Home_images/house__boat.png'
import house__boat2 from '../../image/Home_images/house__boat2.png'
import house__boat3 from '../../image/Home_images/house__boat3.png'
import house__boat4 from '../../image/Home_images/house__boat4.png'
import boats from '../../image/Home_images/boat.png'
import boats__first from '../../image/Home_images/boat__1.png'
import boats__second from '../../image/Home_images/boat__2.png'
import boats__third from '../../image/Home_images/boat__3.png'


export const dataTenzor = [
    {
        id: 1,
        name: 'Tenzor Sailing Club',
        title: 'Клубный дом',
        text: 'Tenzor Sailing Club (TSC) расположен на дебаркадере класса «люкс». с ультрасовременной инфраструктурой, материально-технической базой и собственным флотом из двух десятков спортивных яхт mX700 и J/70. Килевые яхты этих классов — легкие, маневренные и простые в управлении — пользуются огромной популярностью и подходят как для профессионалов, так и для новичков-любителей.',
        subtitle: 'Оснащение Tenzor Sailing Club (TSC) не имеет аналогов в России, что выделяет яхт-клуб в сегмент премиум-класса.',
        btnTitle: 'Членство в клубе',
        img: [
            {
                imgId:1,
                image: house__boat1
            },
            {
                imgId:2,
                image: house__boat2
            },
            {
                imgId:3,
                image: house__boat4
            },
            {
                imgId:4,
                image: house__boat3
            },
        ]
    }
] 

export const dataBoat = [
    {
        id:1,
        img: boats
    }
]

export const dataActivity = [
    {
        id: 1,
        name: 'Корпоративные и частные',
        title: "Мероприятия",
        text: "Tenzor Sailing Club организует корпоративные регаты, частные и деловые мероприятия любой сложности на собственной площадке, а также на площадках в партнеров в России и за рубежом.",
        example: [
            {
                userId:1,
                title: "Организация одноэтапной или многоэтапной регаты под брендом вашей компании"
            },
            {
                userId:2,
                title: "Тимбилдинг"
            },
            {
                userId:3,
                title: "Выставки, презентации, конференции, семинары"
            },
            {
                userId:4,
                title: "Деловые переговоры и встречи"
            },
            {
                userId:5,
                title: "День рождения, юбилей, романтическое свидание"
            },
            
            {
                userId:6,
                title: "Выпускной и др."
            },
        ],
        btnText: 'Заказать мероприятие',
        objActivity: [
            {
                actId:1,
                title: "наш Опыт",
                text: "С 2017 года мы ведем проекты в яхтенной сфере. Наши проекты востребованы среди сильнейших яхтсменов России, ближнего зарубежья и Европы и входят в число лучших по организации и освещению.",
                linkText: "Поучаствовать в регате",
                img: boats__first
            },
            {
                actId:2,
                title: "наш Флот",
                text: "Собственный флот из  спортивных яхт классов MX700, а также швертботов классов «Оптимист» для детских соревнований.’’ Собственные катера поддержки (судейство, установка дистанции, обеспечение).",
                img: boats__second
            },
            {
                actId:1,
                title: "наша команда",
                text: "Профессионалы своего дела с владением иностранных языков и опытом работы в яхтинге. Спортивные менеджеры, шкиперы, привлеченные специалисты в области судейства и секретариата, а также логисты, пиарщики и служба по event-программам.",
                img: boats__third
            }
        ]
    }
]