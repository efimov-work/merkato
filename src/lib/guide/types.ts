function commonsCredit(file: string, author: string, license: 'by-sa/4.0' | 'by/2.0') {
  return {
    label: `${author}, Wikimedia Commons`,
    url: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`,
    license: {
      label: license === 'by-sa/4.0' ? 'CC BY-SA 4.0' : 'CC BY 2.0',
      url: `https://creativecommons.org/licenses/${license}/`
    }
  };
}

export const sources = {
  developer: { label: 'Карточка Mercato у «Альпика Групп»', url: 'https://alpika-group.ru/proekty/zhk-mercato' },
  registry: { label: 'Сведения об объекте в Росреестре', url: 'https://lk.rosreestr.ru/eservices/real-estate-objects-online' },
  tax: { label: 'ФНС России о сдаче и продаже недвижимости', url: 'https://www.nalog.gov.ru/rn77/fl/pay_taxes/income/realty_sell/' },
  park: { label: 'ФГБУ «Сочинский национальный парк» о Дендрарии', url: 'https://npsochi.ru/mesta/turisticheskie-obekty-natsparka/park-dendrariy/' },
  map: { label: 'Адрес ЖК Mercato на Яндекс Картах', url: 'https://yandex.ru/maps/?text=Сочи%2C+улица+Яна+Фабрициуса%2C+2%2F23М' },
  plans: { label: 'Демонстрационные планировки Mercato', url: '/#plans' },
  catalog: { label: 'Фото из каталога ТЕХНОНИКОЛЬ, раздел «Меркато»', url: 'https://tn.spb.ru/upload/iblock/229/okit794h7prbs9kvte751sqwz81v38qi.pdf#page=40' },
  mapei: { label: 'Фото компании «Паллада» из каталога МАПЕИ', url: 'https://aomapei.ru/objects/zhilye-zdaniya/zhiloy-kompleks-merkato/' },
  commonsMarch: commonsCredit('Вид_со_смотровой_площадки_на_Дендрологический_парк_"Дендрарий"_в_середине_марта.jpg', 'Aleda12', 'by-sa/4.0'),
  commonsEntrance: commonsCredit('Главный_вход_в_Сочинский_дендрарий.jpg', 'Nastyakvin2001', 'by-sa/4.0'),
  commonsCoast: commonsCredit('Sea_view_in_Sochi.jpg', 'Dmitry Karyshev', 'by/2.0')
} as const;

export type GuideImage = {
  path: string;
  alt: string;
  credit: keyof typeof sources;
  mode?: 'plan';
  originalPath?: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  image?: GuideImage;
  sections: { title: string; text: string; points?: string[] }[];
  related: string[];
  sources: (keyof typeof sources)[];
};
