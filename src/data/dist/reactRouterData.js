"use strict";
exports.__esModule = true;
exports.arrayReactRouter = exports.linksReactRouter = void 0;
exports.linksReactRouter = [
    {
        href: "https://reactrouter.com/en/main ",
        title: "React Router официальная страница."
    },
    {
        href: "https://www.youtube.com/playlist?list=PLiZoB8JBsdznY1XwBcBhHL9L7S_shPGVE",
        title: "React Router v6. Михаил Непомнящий. 10 видео "
    },
    {
        href: "https://reactdev.ru/libs/react-router/#_3",
        title: "React Router DOM, примеры"
    },
    {
        href: "https://habr.com/ru/company/kts/blog/598835/",
        title: "Что нового в react-router v6"
    },
    {
        href: "https://www.npmjs.com/package/@types/react-router-dom",
        title: "npm install --save @types/react-router-dom "
    },
    {
        href: " ",
        title: " "
    },
    {
        href: " ",
        title: " "
    },
    {
        href: " ",
        title: " "
    },
    {
        href: " ",
        title: " "
    },
    {
        href: " ",
        title: " "
    },
    {
        href: " ",
        title: " "
    },
    {
        href: " ",
        title: " "
    },
    {
        href: " ",
        title: " "
    },
];
exports.arrayReactRouter = [
    {
        heading: "Установка react-router react-router-dom",
        answer: ["`npm i react-router` `npm i react-router-dom` `npm install --save @types/react-router-dom` ", " "],
        isParagraph: true
    },
    {
        heading: "Оборачиваем в BrowserRouter всё наше приложение. ",
        answer: [
            "В React Router есть BrowserRouter, HashRouter, StaticRouter, NativeRouter и MemoryRouter.",
            "Для веб-приложений обычно используется компонент BrowserRouter. Приложение должно иметь один <BrowserRouter>, который обертывает один или несколько <Routes>. ",
            "Пример главной страницы index.tsx: ",
            "-----------------------------------",
            "import React from 'react'; ",
            "import ReactDOM from 'react-dom/client'; ",
            "import App from './App'; ",
            "import { BrowserRouter } from 'react-router-dom'; ",
            "-- ",
            "const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); ",
            "root.render( ",
            " - <BrowserRouter>",
            " - - <React.StrictMode>",
            " - - - <App />",
            " - - </React.StrictMode>",
            " - </BrowserRouter>",
            "); ",
            "-----------------------------------",
            "Для того, чтобы роутинг был доступен, надо начать с обеспечения всего нашего приложения неким провайдером (проводником). ",
            "Для этого импортируем в точку входа нашего приложения компонент BrowserRouter и оборачиваем в него всё наше приложение. BrowserRouter является родительским относительно всего нашего приложения. Это позволяет сделать роутинг внутри <App />.",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "Создаём компонент <AppRouter /> ",
        answer: [
            "import React, { FC } from 'react'; ",
            "import { Routes, Route } from 'react-router-dom'; ",
            "import Layout from './Layout/Layout'; ",
            "import GitHubPage from '../minorPages/GitHub'; ",
            "import HTMLPage from '../mainPages/HTML'; ",
            "import HTTPPage from '../mainPages/HTTP'; ",
            "import NotfoundPage from '../minorPages/NotfoundPage'; ",
            "-- ",
            "const AppRouter: FC = () => { ",
            " - return (",
            " - - <Routes>",
            " - - - <Route path='/' element={<Layout />}>",
            " - - - - <Route path='github' element={<GitHubPage />} />",
            " - - - - <Route path='html' element={<HTMLPage />} />",
            " - - - - <Route path='http' element={<HTTPPage />} />",
            " - - - - <Route path='*' element={<NotfoundPage />} />",
            " - - - </Route>",
            " - - </Routes>",
            " - );",
            "}; ",
            "-- ",
            "export default AppRouter; ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "Определяем компонент <AppRouter /> в корневой компонент <App /> ",
        answer: [
            "import React from 'react'; ",
            "import AppRouter from './components/AppRouter'; ",
            "-- ",
            "- return ( ",
            " - - <div>",
            " - - - <AppRouter />",
            " - - </div>",
            " - );",
            " }",
            "-- ",
            "export default App; ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "Компонент Layout - главная страница компонента AppRouter. ",
        answer: [
            "import React, { FC } from 'react'; ",
            "import { Outlet } from 'react-router-dom'; ",
            "import TopMenu from '../topMenu/TopMenu/TopMenu'; ",
            "import Footer from '../Footer/Footer'; ",
            "-- ",
            "const Layout: FC = () => { ",
            " - return (",
            " - - <>",
            " - - - <main className={styles['layuot']}> // Здесь можно задать общие стили для <main></main>.",
            " - - - - <Outlet />",
            " - - - </main>",
            "-- ",
            " - - - <TopMenu />",
            " - - - <Footer />",
            " - - </>",
            " - );",
            "}; ",
            "-- ",
            "export default Layout; ",
            " ",
            " ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "Создаём компонент - активную ссылку MenuLink, с учётом изменения цвета бэкграунда TopMenu.",
        answer: [
            "import React, { FC } from 'react'; ",
            "import { Link, useMatch } from 'react-router-dom'; ",
            "import styles from './MenuLink.module.scss'; ",
            "-- ",
            "interface ITopMenuLinks { ",
            "children: string; ",
            "to: string; ",
            "isBackgroundWhite?: boolean; ",
            "}",
            "-- ",
            "const MenuLink: FC<ITopMenuLinks> = ({ children, to, isBackgroundWhite, ...props }) => { ",
            " - //параметром useMatch будет объект настройки ",
            " - const match = useMatch({ ",
            " - - path: to,",
            " - - - // полностью ссылка включена или нет.",
            " - - - // Если это главная страничка, то мы берём полный путь. Если не главная, то неполный путь.",
            " - - - // to - это наша ссылка, если это главная страница, то to имеет длину единичку.",
            " - - end: to.length === 1,",
            " - });",
            " - //   console.log(match);",
            "-- ",
            " - if (isBackgroundWhite) {",
            " - - return (",
            " - - - <Link to={to} className={match ? styles['link-dark_active'] : styles['link-dark']} {...props}>",
            " - - - - {children}",
            " - - - </Link>",
            " - - );",
            " - }",
            "-- ",
            " - return (",
            " - - <Link to={to} className={match ? styles['link-light_active'] : styles['link-light']} {...props}>",
            " - - - {children}",
            " - - </Link>",
            " - );",
            "}; ",
            "-- ",
            "export default MenuLink; ",
            " ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "Создаём компонент - активную ссылку FooterLink, с учётом того, что цвет бэкграунда Footer неизменен.",
        answer: [
            "import React, { FC } from 'react'; ",
            "import { Link, useMatch } from 'react-router-dom'; ",
            "import styles from './FooterLink.module.scss'; ",
            "-- ",
            "interface IFooterLinks { ",
            "children: string; ",
            "to: string; ",
            "} ",
            "-- ",
            "const FooterLink: FC<IFooterLinks> = ({ children, to, ...props }) => { ",
            " - const match = useMatch({",
            " - - path: to,",
            " - - end: to.length === 1,",
            " - });",
            "-- ",
            "return ( ",
            " - <div>",
            " - - <Link to={to} className={match ? styles['ink-active'] : styles['link']}>",
            " - - - {children}",
            " - - </Link>",
            " - </div>",
            "); ",
            "}; ",
            "-- ",
            "export default FooterLink; ",
        ],
        isParagraph: true
    },
    {
        heading: "Использование в TopMenu активной ссылки MenuLink.",
        answer: [
            "import React, { useState, useEffect, FC, useContext } from 'react'; ",
            "import { useLocation } from 'react-router-dom'; ",
            "import { ITopMenuLinks } from /../../../models/types'; ",
            "import MenuLink from '../../ui/links/MenuLink/MenuLink'; ",
            "-- ",
            "const TopMenu: FC = () => { ",
            " - const [ isBackgroundWhite, setBackgroundWhite ] = useState(false) ",
            " - const pathname = useLocation().pathname; ",
            "--",
            " - const TopMenuLinks: ITopMenuLinks[] = [ ",
            " - - { to: '/', children: 'Общие вопросы' },",
            " - - { to: '/css', children: 'CSS' },",
            " - - { to: '/javascript', children: 'JavaScript' },",
            " - ];",
            "-- ",
            " useEffect(() => {",
            " - if (",
            "- - pathname === '/' ||",
            " - - pathname === '/css' ||",
            " - - pathname === '/javascript' ||",
            " - - pathname === '*'",
            " - ) {",
            " - - setBackgroundWhite(false);",
            " - } else {",
            " - - setBackgroundWhite(true);",
            " - }",
            "}, [pathname, setBackgroundWhite]);",
            "-- ",
            " - return (",
            " - - <header>",
            " - - - <div>",
            " - - - - {TopMenuLinks.map((link) => (",
            " - - - - - <MenuLink key={link.to} to={link.to} isBackgroundWhite={isBackgroundWhite}>",
            " - - - - - - {link.children}",
            " - - - - - </MenuLink>",
            " - - - - ))}",
            " - - - </div>",
            " - - </header>",
            " - );",
            "}; ",
            "-- ",
            "export default TopMenu; ",
        ],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: "Что такое React Router? ",
        answer: [
            "Router — это компонент верхнего уровня с отслеживанием состояния, который заставляет работать все остальные компоненты навигации и хуки.",
            "React Router — это мощная библиотека маршрутизации, построенная поверх React, которая помогает добавлять в приложение новые экраны и потоки. ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "Что делает React Router лучшим по сравнению с другими библиотеками маршрутизации:",
        answer: [
            "1. Декларативное определение маршрута (с использованием JSX внутри компонентов React)",
            "2. Отраслевой стандарт",
            "3. React Router предоставляет возможность использования хуков и функциональных компонентов",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "Изменения React Router 6-ой версии относительно предыдущей.",
        answer: [
            "Компонент <Switch> был переименован в <Routes> ",
            "Хук useRoutes() заменяет react-router-config для определения маршрутов как простых объектов ",
            "Каждый дочерний компонент <Routes> должен быть <Route>, что может нарушить некоторые предыдущие методы организации и составления маршрутов. ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "<Routes> ",
        answer: [
            "<Routes> проверяет все свои дочерние элементы <Route>, чтобы найти наилучшее соответствие, и отображает эту часть пользовательского интерфейса. ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "<Route> ",
        answer: [
            "<Route> можно определить либо как объект, либо элемент Route.  ",
            "Если это объект, он имеет форму { path, element }. ",
            "Если это элемент Route, компонент имеет вид <Route path element>.  ",
            "Когда указанный путь path соответствует текущему URL-адресу, то отображается компонент, указанный в качестве элемента element. ",
            "Пример роута ",
            "  <Route path='react' element={<ReactPage />} />",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
    {
        heading: " ",
        answer: [" ", " ", " ", " ", " ", " "],
        isParagraph: true
    },
];
