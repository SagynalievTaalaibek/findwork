interface Navbars {
  id: string;
  nav_name: string;
  nav_link: string;
  allowed: string[];
}

export const NAVBAR_HEADERS: Navbars = [
  {
    id: 'nav_1',
    nav_name: 'Главная',
    nav_link: '',
    allowed: [''],
  },
  {
    id: 'nav_2',
    nav_name: 'О нас',
    nav_link: '',
    allowed: [],
  },
  {
    id: 'nav_3',
    nav_name: 'Вакансии',
    nav_link: '',
    allowed: [],
  },
  {
    id: 'nav_4',
    nav_name: 'Для работодателей',
    nav_link: '',
    allowed: [],
  },
];
