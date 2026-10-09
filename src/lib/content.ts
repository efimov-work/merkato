export const CONTACTS = {
  phone: '+7 862 296-91-29',
  phoneHref: 'tel:+78622969129'
};

export const COMPLEX = {
  name: 'Mercato',
  nameRu: 'Меркато',
  street: 'ул. Яна Фабрициуса, 2/23М',
  locality: 'Сочи',
  district: 'Хостинский район',
  region: 'Краснодарский край',
  country: 'RU',
  developer: 'ГК «Альпика»'
};

export const NAV = [
  { href: '#sochi', label: 'Рынок' },
  { href: '#object', label: 'Объект' },
  { href: '#plans', label: 'Планировки' },
  { href: '#calc', label: 'Доходность' },
  { href: '#location', label: 'Локация' }
];

export const HERO_FACTS = [
  { value: '3 × 18', text: 'корпусов и этажей' },
  { value: 'от 35,7 м²', text: 'площади квартир' },
  { value: '10 мин', text: 'до моря на автомобиле' }
];

export const FEATURES = [
  'Инфинити-бассейн с подогревом',
  'Подземный паркинг на 120 мест',
  'Потолки 3 м',
  'Панорамное остекление',
  'Закрытая территория'
];

export const FIGURES = [
  { label: 'Годовая доходность', before: 'от ', count: 32, after: '%', rub: false, note: 'аренда и рост стоимости*' },
  { label: 'Доход в месяц', before: '', count: 90, after: ' тыс.', rub: true, note: 'от, при посуточной аренде*' },
  { label: 'Квартир на этаже', before: '', count: 10, after: '', rub: false, note: 'в каждом из 3 корпусов' },
  { label: 'Опыт застройщика', before: '', count: 17, after: ' лет', rub: false, note: 'ГК «Альпика», 13 проектов в Сочи' }
];

export const MARKET = [
  {
    value: '4',
    title: 'курортных города под мораторием',
    text: 'Ограничения на строительство в Сочи, Геленджике, Новороссийске и Анапе. Новых объектов на первичном рынке меньше, чем покупателей.'
  },
  {
    value: '2,4 трлн ₽',
    title: 'на новые автодороги',
    text: '120 км трасс: обход Сочи и дорога от Кудепсты до трассы А-149 Адлер - Красная Поляна.'
  },
  {
    value: '1,5 млн',
    title: 'туристов в год на новом курорте',
    text: 'Горнолыжный курорт «Долина Васта»: 80 км трасс, круглогодичная работа.'
  }
];

export const SPECS = [
  ['Статус', 'Дом сдан'],
  ['Класс', 'Премиум'],
  ['Корпуса', '3 по 18 этажей'],
  ['Статус помещений', 'Квартира'],
  ['Высота потолков', '3 м'],
  ['Остекление', 'Панорамное'],
  ['Пентхаусы', '3, на 17 и 18 этажах'],
  ['Паркинг', 'Подземный на 120 мест и гостевой']
];

export const OBJECT_PHOTOS = {
  main: { img: '/assets/object-towers.webp', alt: 'Три корпуса ЖК Mercato в Сочи, бассейн и спортивные площадки на территории' },
  facade: { img: '/assets/object-facade.webp', alt: 'Фасад ЖК Mercato с панорамным остеклением' },
  sea: { img: '/assets/object-sea.webp', alt: 'Вид на Чёрное море от корпусов ЖК Mercato' }
};

export const INFRA = [
  { img: '/assets/infra-pool.webp', alt: 'Инфинити-бассейн с подогревом и шезлонгами в ЖК Mercato', title: 'Инфинити-бассейн с подогревом', note: 'вид на море', wide: true },
  { img: '/assets/infra-lounge.webp', alt: 'Лаунж-зона у бассейна в ЖК Mercato', title: 'Лаунж-зона у бассейна', note: '', wide: false },
  { img: '/assets/infra-workout.webp', alt: 'Воркаут-зона и спортивная площадка у корпусов ЖК Mercato', title: 'Воркаут и спортплощадка', note: '', wide: false },
  { img: '/assets/infra-kids.webp', alt: 'Детская площадка и зона отдыха на территории ЖК Mercato', title: 'Детские площадки', note: '', wide: false }
];

export const AMENITIES = ['Тренажёрный зал', 'Зона барбекю', 'Кафе и рестораны', 'Магазины', 'Консьерж-сервис'];

const WIDE = { ratio: '16/10', basis: 'min(78vw,760px)' };

export const GALLERY = [
  { img: '/assets/gallery-1.webp', caption: 'Корпус и бассейн', alt: 'Корпуса ЖК Mercato в окружении зелени, вид со стороны бассейна', ...WIDE },
  { img: '/assets/gallery-2.webp', caption: 'Фасад и спортплощадка', alt: 'Фасад ЖК Mercato и спортивные площадки, на горизонте море', ratio: '4/5', basis: 'min(60vw,480px)' },
  { img: '/assets/gallery-3.webp', caption: 'Бассейн', alt: 'Открытый бассейн на территории ЖК Mercato', ...WIDE },
  { img: '/assets/gallery-4.webp', caption: 'Аэросъёмка комплекса', alt: 'ЖК Mercato с высоты: три корпуса, спортивные площадки и горы', ...WIDE },
  { img: '/assets/gallery-5.webp', caption: 'Вид с моря', alt: 'ЖК Mercato на фоне Чёрного моря на закате', ...WIDE },
  { img: '/assets/gallery-6.webp', caption: 'Корпус и территория', alt: 'Корпус ЖК Mercato и благоустроенная территория с видом на море', ...WIDE }
];

export const PLANS = [
  { tab: '1 комната', area: '37,5 м²', img: '/assets/plan-1.webp', alt: 'Планировка квартиры 37,5 м² с одной спальней в ЖК Mercato', rent: 'Посуточная, пара' },
  { tab: '2 комнаты', area: '50 м²', img: '/assets/plan-2.webp', alt: 'Планировка квартиры 50 м² в ЖК Mercato', rent: 'Посуточная, семья' },
  { tab: '3 комнаты', area: '65 м²', img: '/assets/plan-3.webp', alt: 'Планировка квартиры 65 м² с двумя спальнями в ЖК Mercato', rent: 'Посуточная или долгосрочная' }
];

export const STEPS = [
  { n: '01', title: 'Расчёт', text: 'Подбор квартиры и модель доходности под ваш бюджет.', dark: false },
  { n: '02', title: 'Сделка', text: 'Покупка напрямую, ипотека или рассрочка. Онлайн-показ.', dark: false },
  { n: '03', title: 'Подготовка', text: 'Дизайнерский ремонт и меблировка для аренды.', dark: false },
  { n: '04', title: 'Доход', text: 'Сдача в аренду и ежемесячные выплаты собственнику.', dark: true }
];

export const DISTANCES = [
  { count: 10, text: 'до моря' },
  { count: 15, text: 'до вокзала Сочи' },
  { count: 30, text: 'до аэропорта' },
  { count: 40, text: 'до Красной Поляны' }
];
