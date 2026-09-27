import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Fish & Seafood
  {
    id: 'm-kutum',
    name: {
      az: 'Kütüm Balığı Manqalda (Bütöv)',
      ru: 'Кутум на углях (целиком)',
      en: 'Grilled Whole Kutum',
    },
    description: {
      az: 'Xəzərin məşhur kütüm balığı, narşərab, qırmızı soğan və təzə göyərtilərlə köz üzərində bütöv bişirilir.',
      ru: 'Знаменитый каспийский кутум, запеченный на углях с наршарабом, луком и травами.',
      en: 'Famous Caspian Kutum grilled whole over charcoal, served with narsharab and fresh herbs.',
    },
    category: 'seafood',
    isPopular: true,
    isPlaceholder: true,
    priceNote: {
      az: 'Mövsümi / Çəki ilə',
      ru: 'Сезонная цена / По весу',
      en: 'Seasonal / By weight',
    },
    image: '/src/assets/images/grilled_kutum_dish_1790500129519.jpg',
  },
  {
    id: 'm-forel',
    name: {
      az: 'Qızılxallı Balıq (Forel) Manqalda',
      ru: 'Речная форель на мангале',
      en: 'Grilled River Trout',
    },
    description: {
      az: 'Şirəli və zərif çay foreli, kərə yağı, kəklikotu və təzə limon dilimləri ilə.',
      ru: 'Нежная форель с соком лимона, тимьяном и сливочным маслом на решетке.',
      en: 'Juicy river trout grilled with aromatic thyme butter and fresh lemon wedges.',
    },
    category: 'seafood',
    isPopular: true,
    isPlaceholder: true,
    priceNote: {
      az: 'Porsiya üzrə (Nümunə)',
      ru: 'За порцию (образец)',
      en: 'Per portion (sample)',
    },
    image: '/src/assets/images/grilled_trout_dish_1790500140894.jpg',
  },
  {
    id: 'm-beluga',
    name: {
      az: 'Nərə Balığı Kababı (Osetrina / Sturgeon)',
      ru: 'Шашлык из осетрины',
      en: 'Sturgeon Kebab',
    },
    description: {
      az: 'Zərif marinadlanmış nərə balığı tikələri şişdə, xüsusi sous və sumax ilə təqdim olunur.',
      ru: 'Маринованные кусочки осетрины на шампурах с гранатовым соусом.',
      en: 'Marinated Caspian sturgeon skewers grilled with sumac and sour pomegranate glaze.',
    },
    category: 'seafood',
    isPopular: false,
    isPlaceholder: true,
    priceNote: {
      az: '100 qr / Çəki ilə',
      ru: 'За 100 г / По весу',
      en: 'Per 100g / By weight',
    },
  },
  {
    id: 'm-sudak',
    name: {
      az: 'Suf (Sudak) Qızartması',
      ru: 'Судак жареный с золотистой корочкой',
      en: 'Pan-Seared Caspian Pike-Perch',
    },
    description: {
      az: 'Ağ ətli suf balığı fileti, xırçıltılı qızılı qabıq, sarımsaqlı göyərti sousu ilə.',
      ru: 'Филе судака с хрустящей корочкой и чесночным соусом с зеленью.',
      en: 'Crispy pan-seared pike-perch fillet with garlic-herb emulsion and greens.',
    },
    category: 'seafood',
    isPlaceholder: true,
    priceNote: {
      az: 'Porsiya üzrə (Nümunə)',
      ru: 'За порцию (образец)',
      en: 'Per portion (sample)',
    },
  },
  {
    id: 'm-seafood-mix',
    name: {
      az: 'Dəniz Məhsulları Assortisi',
      ru: 'Морское ассорти на гриле',
      en: 'Mixed Caspian Seafood Platter',
    },
    description: {
      az: 'Közdə bişirilmiş balıq çeşidləri, krevetlər və mövsümi dəniz sovqatları.',
      ru: 'Ассорти из разных сортов рыбы и креветок на углях.',
      en: 'Chef’s selection of grilled fish cuts, prawns, and seasonal seafood.',
    },
    category: 'seafood',
    isPopular: true,
    isPlaceholder: true,
    priceNote: {
      az: 'Böyük boşqab (Nümunə)',
      ru: 'Большое блюдо (образец)',
      en: 'Sharing platter (sample)',
    },
    image: '/src/assets/images/hero_caspian_seafood_1790500115605.jpg',
  },

  // Kebabs
  {
    id: 'm-shapalaq',
    name: {
      az: 'Ənənəvi Şapalaq Kababı',
      ru: 'Фирменный шашлык Шапалаг',
      en: 'Traditional Shapalaq Kabab',
    },
    description: {
      az: 'Döyülmüş yumşaq quzu əti, xüsusi marinad, közlənmiş pomidor və istiotla ləzzətli təqdimat.',
      ru: 'Отбивная нежная баранина на шампурах, прожаренная на углях с перцем и томатами.',
      en: 'Tender pounded lamb steak skewers seasoned with herbs and roasted over glowing coals.',
    },
    category: 'kebabs',
    isPopular: true,
    isPlaceholder: true,
    priceNote: {
      az: 'Porsiya (Nümunə)',
      ru: 'Порция (образец)',
      en: 'Portion (sample)',
    },
    image: '/src/assets/images/shapalaq_kabab_dish_1790500152537.jpg',
  },
  {
    id: 'm-lule',
    name: {
      az: 'Lülə Kabab (Quzu)',
      ru: 'Люля-кебаб из ягненка',
      en: 'Lamb Lyulya Kebab',
    },
    description: {
      az: 'Xırdalanmış quzu quyruq əti, soğan və zövq oxşayan ədviyyatlarla qızardılmış sulu kabab.',
      ru: 'Сочный люля из рубленого мяса ягненка с курдюком и тонким лавашем.',
      en: 'Minced lamb and aromatic herbs skewers grilled and served on hot thin lavash.',
    },
    category: 'kebabs',
    isPlaceholder: true,
    priceNote: {
      az: 'Şiş sayı üzrə',
      ru: 'За шампур',
      en: 'Per skewer',
    },
  },
  {
    id: 'm-tike',
    name: {
      az: 'Tikə Kabab',
      ru: 'Шашлык «Тике» из баранины',
      en: 'Tike Lamb Shish Kebab',
    },
    description: {
      az: 'Təzə quzu ətinin tikələri, manqalda nar kimi qızarmış, sumaxlı soğanla.',
      ru: 'Ароматные кусочки баранины на углях с луком и сумахом.',
      en: 'Succulent cubes of fresh lamb skewered and charcoal grilled with sumac onions.',
    },
    category: 'kebabs',
    isPlaceholder: true,
    priceNote: {
      az: 'Porsiya (Nümunə)',
      ru: 'Порция (образец)',
      en: 'Portion (sample)',
    },
  },
  {
    id: 'm-chicken-kebab',
    name: {
      az: 'Kənd Çolpası Manqalda',
      ru: 'Цыпленок на углях (Табака)',
      en: 'Charcoal-Grilled Spring Chicken',
    },
    description: {
      az: 'Təbii kənd cücəsi xüsusi kərə yağı və sarımsaqlı marinad ilə manqalda nar kimi qızardılır.',
      ru: 'Деревенский цыпленок, запеченный на углях со сливочным маринованным чесноком.',
      en: 'Free-range spring chicken flattened and roasted crispy over glowing coals.',
    },
    category: 'kebabs',
    isPlaceholder: true,
    priceNote: {
      az: 'Bütöv / Porsiya',
      ru: 'Целиком / Порция',
      en: 'Whole / Portion',
    },
  },

  // Salads & Sides
  {
    id: 'm-mangalsalad',
    name: {
      az: 'Manqal Salatı (Közləmə)',
      ru: 'Мангал-салат (из запеченных овощей)',
      en: 'Mangal Salad (Charred Vegetables)',
    },
    description: {
      az: 'Közdə bişirilmiş badımcan, bibər, pomidor, təzə sarımsaq, göyərti və zeytun yağı.',
      ru: 'Запеченные на углях баклажаны, томаты, перец с кинзой, чесноком и оливковым маслом.',
      en: 'Smoky grilled aubergines, bell peppers, vine tomatoes, chopped herbs, and virgin olive oil.',
    },
    category: 'sides',
    isPopular: true,
    isPlaceholder: true,
    priceNote: {
      az: 'Porsiya (Nümunə)',
      ru: 'Порция (образец)',
      en: 'Portion (sample)',
    },
  },
  {
    id: 'm-choban',
    name: {
      az: 'Çoban Salatı & Motal Pendiri',
      ru: 'Салат «Чобан» с сыром мотал',
      en: 'Choban Salad with Motal Cheese',
    },
    description: {
      az: 'Zirə pomidoru, xiyar, təzə keşniş, reyhan və dağ motal pendiri.',
      ru: 'Сладкие бакинские томаты, хрустящие огурцы, базилик и горный сыр мотал.',
      en: 'Baku heirloom tomatoes, crisp cucumbers, purple basil, and aged mountain motal cheese.',
    },
    category: 'sides',
    isPlaceholder: true,
    priceNote: {
      az: 'Porsiya (Nümunə)',
      ru: 'Порция (образец)',
      en: 'Portion (sample)',
    },
  },
  {
    id: 'm-pickles',
    name: {
      az: 'Ev Turşuları və Təzə Göyərti Boşqabı',
      ru: 'Домашние соленья и свежая бакинская зелень',
      en: 'House Pickles & Fresh Baku Herbs Platter',
    },
    description: {
      az: 'Göyəm, zoğal, qarpız və pomidor turşusu; tərxun, reyhan, vəzəri və nanə.',
      ru: 'Ассорти домашних солений и свежей бакинской зелени (тархун, базилик, мята).',
      en: 'Artisan pickled wild plums, cornelian cherries, green garlic, and fresh fragrant herb bouquet.',
    },
    category: 'sides',
    isPlaceholder: true,
    priceNote: {
      az: 'Boşqab (Nümunə)',
      ru: 'Блюдо (образец)',
      en: 'Plate (sample)',
    },
  },
  {
    id: 'm-potatoes',
    name: {
      az: 'Gədəbəy Kartofu Quyruqla (Közdə)',
      ru: 'Картофель из Гедабека на углях с курдюком',
      en: 'Charred Mountain Potatoes with Tail Fat',
    },
    description: {
      az: 'Közdə bişirilmiş məşhur Gədəbəy kartofu, qızardılmış quyruq və duzlu kəklikotu ilə.',
      ru: 'Знаменитый гедабекский картофель на углях со шкварками и чабрецом.',
      en: 'Locally grown mountain potatoes roasted in coal embers with crispy tallow and sea salt.',
    },
    category: 'sides',
    isPlaceholder: true,
    priceNote: {
      az: 'Porsiya (Nümunə)',
      ru: 'Порция (образец)',
      en: 'Portion (sample)',
    },
  },

  // Drinks
  {
    id: 'm-kompot',
    name: {
      az: 'Təbii Ev Kompotları (Zoğal, Feyxoa, Alça)',
      ru: 'Домашние компоты (фейхоа, кизил, алыча)',
      en: 'Traditional Homemade Compotes',
    },
    description: {
      az: 'Yerli meyvələrdən təbii üsulla hazırlanmış təravətləndirici soyuq içkilər.',
      ru: 'Освежающие холодные напитки из местных натуральных ягод и фруктов.',
      en: 'Refreshing chilled drinks made from local seasonal fruits: feijoa, cornelian cherry, plum.',
    },
    category: 'drinks',
    isPopular: true,
    isPlaceholder: true,
    priceNote: {
      az: '1 litr qrafin (Nümunə)',
      ru: 'Графин 1 л (образец)',
      en: '1 liter jug (sample)',
    },
  },
  {
    id: 'm-duzlu-ayran',
    name: {
      az: 'Nanəli Təbii Ayran',
      ru: 'Айран с мятой',
      en: 'Chilled Minted Ayran',
    },
    description: {
      az: 'Sərinləşdirici təbii qatıq və təzə nanə yarpaqları ilə hazırlanan ənənəvi ayran.',
      ru: 'Густой освежающий айран с дроблеными листьями горной мяты.',
      en: 'Velvety probiotic yogurt drink churned with garden mint and a pinch of salt.',
    },
    category: 'drinks',
    isPlaceholder: true,
    priceNote: {
      az: 'Qədəh / Qrafin',
      ru: 'Бокал / Графин',
      en: 'Glass / Jug',
    },
  },
  {
    id: 'm-mineral-water',
    name: {
      az: 'Badamlı & Sirab Mineral Suları',
      ru: 'Минеральные воды Бадамлы и Сираб',
      en: 'Azerbaijani Mountain Mineral Waters',
    },
    description: {
      az: 'Naxçıvan dağlarından təbii qazlı və qazsız bulaq suları.',
      ru: 'Натуральная родниковая газированная и негазированная вода.',
      en: 'Natural pristine sparkling and still mineral springs from Nakhchivan highlands.',
    },
    category: 'drinks',
    isPlaceholder: true,
    priceNote: {
      az: 'Şüşə (0.5L / 1L)',
      ru: 'Бутылка (0.5л / 1л)',
      en: 'Bottle (0.5L / 1L)',
    },
  },

  // Tea
  {
    id: 'm-samovar-tea',
    name: {
      az: 'Közdə Samovar Çayı Süfrəsi',
      ru: 'Чайная церемония на углях из самовара',
      en: 'Charcoal Samovar Tea Ceremony',
    },
    description: {
      az: 'Lənkəran qara çayı, dağ kəklikotu, mixək və armudu stəkanlarda buxarlanan xidmət.',
      ru: 'Ароматный ленкоранский чай с горным чабрецом в стаканах армуду.',
      en: 'Fragrant Lankaran black tea infused with mountain wild thyme, brewed over hot samovar coals.',
    },
    category: 'tea',
    isPopular: true,
    isPlaceholder: true,
    priceNote: {
      az: 'Çay dəstgahı (Nümunə)',
      ru: 'Чайный набор (образец)',
      en: 'Tea set (sample)',
    },
    image: '/src/assets/images/azerbaijani_tea_service_1790500165102.jpg',
  },
  {
    id: 'm-murebbe',
    name: {
      az: 'Milli Mürəbbə Çeşidləri (Qoz, Ağ Gilas, Zoğal)',
      ru: 'Национальное варенье (белая черешня, кизил, грецкий орех)',
      en: 'Traditional Preserves (Walnut, White Cherry, Cornel)',
    },
    description: {
      az: 'Qəbələ və Ordubad üsulu bütöv yaşıl qoz mürəbbəsi, ətirli ağ gilas və kənd zoğalı.',
      ru: 'Домашнее варенье из молодых зеленых орехов, белой черешни и кизила.',
      en: 'Traditional fruit conserves made of green walnuts, sweet white cherries, and cornelian cherries.',
    },
    category: 'tea',
    isPlaceholder: true,
    priceNote: {
      az: 'Kasa üzrə',
      ru: 'За пиалу',
      en: 'Per bowl',
    },
  },
  {
    id: 'm-baklava-shekerbura',
    name: {
      az: 'Bakı Paxlavası və Şəkərbura',
      ru: 'Бакинская пахлава и шекербура',
      en: 'Baku Pakhlava & Shekerbura',
    },
    description: {
      az: 'Zəfəranlı qat-qat xəmir, xırdalanmış qoz içi, hil və bal şərbəti ilə.',
      ru: 'Традиционная слоеная пахлава с грецким орехом, кардамоном и медом.',
      en: 'Layers of delicate saffron pastry stuffed with crushed walnuts, cardamom, and honey nectar.',
    },
    category: 'tea',
    isPlaceholder: true,
    priceNote: {
      az: 'Ədəd üzrə / Boşqab',
      ru: 'За штуку / Тарелка',
      en: 'Per piece / Plate',
    },
  },
];
