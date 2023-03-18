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
        href: "https://tokmakov.msk.ru/blog/item/675",
        title: "React Router, версия 6. Часть 1 из 4. Подготовительный этап, страницы приложения, базовый роутинг, Link и NavLink, Outlet, ."
    },
    {
        href: "https://tokmakov.msk.ru/blog/item/676",
        title: "React Router, версия 6. Часть 2 из 4. Вложенные роуты, Custom Link, параметры /:id, хук useParams()."
    },
    {
        href: "https://tokmakov.msk.ru/blog/item/677",
        title: "React Router, версия 6. Часть 3 из 4. useNavigate(), компонент Navigate, защищенные маршруты (isAuth), "
    },
    {
        href: "https://tokmakov.msk.ru/blog/item/678",
        title: "React Router, версия 6. Часть 4 из 4. Наглядные примеры с подробным описанием."
    },
    {
        href: "https://tokmakov.msk.ru/blog/item/649",
        title: "React.js. Маршрутизация. Часть первая из трех."
    },
    {
        href: "https://tokmakov.msk.ru/blog/item/650",
        title: "React.js. Маршрутизация. Часть вторая из трех."
    },
    {
        href: "https://tokmakov.msk.ru/blog/item/651",
        title: "React.js. Маршрутизация. Часть третья из трех. "
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
        href: "https://reactrouter.com/en/main/components/nav-link",
        title: "Активные ссылки, NavLink "
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
        heading: "Зачем нам нужен маршрутизатор в React? ",
        answer: [
            "Маршрутизатор используется для определения нескольких маршрутов, и когда пользователь вводит определенный URL-адрес, если этот URL-адрес совпадает с путем любого «маршрута», определенного внутри маршрутизатора, пользователь перенаправляется на этот конкретный маршрут. Итак, в основном нам нужно добавить библиотеку Router в наше приложение, которая позволяет создавать несколько маршрутов, каждый из которых ведет к уникальному представлению. ",
            " ",
        ],
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
        heading: "Основные компоненты React Router",
        answer: [
            "В React Router существует 3 категории компонентов: ",
            " - роутеры (routers), например, <BrowserRouter> или <HashRouter>",
            " - маршруты (route matchers), например, <Route> или <Switch>",
            " - и навигация (navigation), например, <Link>, <NavLink> или <Redirect>",
            "Все компоненты, используемые в веб-приложении, должны быть импортированы из react-router-dom. ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "1. Роутеры: <BrowserRouter> и <HashRouter> ... ",
        answer: [
            "Любая маршрутизация начинается с роутера. В React Router есть BrowserRouter, HashRouter, StaticRouter, NativeRouter и MemoryRouter.",
            "Для веб-проектов react-router-dom предоставляет <BrowserRouter> и <HashRouter>. Основное отличие между ними состоит в способе хранения URL и взаимодействия с сервером.",
            "1. <BrowserRouter> использует обычные URL. В этом случае URL выглядят как обычно, но требуется определенная настройка сервера. В частности, сервер должен обслуживать все страницы, используемые на клиенте. Create React App поддерживает это из коробки в режиме разработки и содержит инструкции для правильной настройки сервера.",
            "2. <HashRouter> хранить текущую локацию в хэш-части URL (после символа '#'), поэтому URL выглядит примерно так: http://example.com/#/your/page. Поскольку хэш не отправляется серверу, его специальная настройка не требуется.",
            "Для использования роутера необходимо обернуть в него компонент верхнего уровня, в нашем случае оборачиваем <App /> : ",
            "import ReactDOM from 'react-dom/client'; ",
            "import App from './App'; ",
            "import { BrowserRouter } from 'react-router-dom'; ",
            "-- ",
            "const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); ",
            "root.render( ",
            "  <BrowserRouter>  ",
            " - - <App />",
            "  </BrowserRouter> ",
            "); ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "2. Маршруты: Switch(v5) → Routes(v6) и Route ",
        answer: [
            "Существует 2 вида компонентов для поиска совпадений с URL: Switch (в 6-ой версии это Routes) и Route. При рендеринге <Switch> определяет <Route>, соответствующий текущему URL. При обнаружении такого маршрута, он рендерится, остальные маршруты игнорируются. Это означает, что вы должны помещать более специфические маршруты перед менее специфическими. ",
            "Если совпадения не найдено, <Switch> (в 6-ой версии это Routes) ничего не рендерит (точнее, рендерит null). ",
            " - атрибут exact (используется до 6-ой версии): ",
            "Обратите внимание, что <Route path> ищет совпадение с началом, а не со всем URL. Поэтому <Route path='/'> всегда будет совпадать с URL. Поэтому в <Switch> мы, обычно, помещаем его последним. Другим возможным решением является использование атрибута exact: <Route exact path='/'>, который заставляет роутер искать полное совпадение. ",
            "<Switch> обходил роуты в строгом порядке сверху вниз и при первом совпадении пути рендерил заданный компонент. Поэтому важно было определить порядок: например, выносить вниз наиболее общий роут. ",
            "<Routes> проверяет все свои дочерние элементы <Route>, чтобы найти наилучшее соответствие, и отображает эту часть пользовательского интерфейса. ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "2.1 Switch(в 5-ой версии) → 2.2 Routes(в 6-ой версии) ",
        answer: [
            "Вместо компонента Switch теперь появился компонент Routes. Но это не просто переименование — Routes более функционален. Основное отличие в том, что Routes не требует жесткого порядка роутов внутри. ",
            "<Switch> обходил роуты в строгом порядке сверху вниз и при первом совпадении пути рендерил заданный компонент. Поэтому важно было определить порядок: например, выносить вниз наиболее общий роут. Рассмотрим пример: ",
            "<Routes> проверяет все свои дочерние элементы <Route>, чтобы найти наилучшее соответствие, и отображает эту часть пользовательского интерфейса. ",
            "------------------------------------------------------------------------------------- ",
            "const Main = () => ( ",
            " - <main>",
            " - - <Switch>",
            " - - - <Route path='/' component={Home}/> <- Switch всегда будет попадать в этот роут",
            " - - - <Route path='/students' component={Students}/>",
            " - - </Switch>",
            " - </main>",
            " )",
            "------------------------------------------------------------------------------------- ",
            "В таком случае по любом URL рендерился бы компонент Home. Чтобы этого избежать, пришлось бы поставить <Route path='/' component={Home}/> в конец Switch.",
            "В случае с Routes этого делать не нужно. Компонент «более умный» и сматчит наиболее подходящий роут: ",
            "------------------------------------------------------------------------------------- ",
            "<Routes> ",
            " - <Route path='/' element={<Home />}/>",
            " - <Route path='/students' element={<Students/>}/>",
            "</Routes> ",
            "------------------------------------------------------------------------------------- ",
            "Это срабатывает даже с более сложными кейсами, например с именованными параметрами. Пример из документации: ",
            "------------------------------------------------------------------------------------- ",
            "<Route path='teams/:teamId' element={<Team />} />",
            "<Route path='teams/new' element={<NewTeamForm />} /> ",
            "------------------------------------------------------------------------------------- ",
            "По урлу teams/new откроется не компонент Team, а NewTeamForm, хотя путь teams/:teamId тоже матчится с урлом teams/new. ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "2.3. <Route> ",
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
        heading: "3. Навигация <Link>, <NavLink>, <Redirect>",
        answer: [
            "Компонент <Link> для создания ссылок в приложении. При использовании <Link> в HTML рендерится <a> ",
            "<Link to='/'>Главная</Link>",
            "// <a href='/'>Главная</a> ",
            "-- ",
            "Компонент <NavLink> - это специальный тип <Link>, позволяющий определять стили для активного состояния ссылки. ",
            "-- ",
            "Компонент <Redirect> используется для принудительной навигации. При рендеринге <Redirect> выполняется перенаправление.",
            "<Redirect to='/login'>",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "Активные ссылки.",
        answer: [
            "Стилизовать активные элементы навигации, чтобы пользователь знал, где они находятся ( isActive) или куда они идут ( isPending) в приложении, можно легко с помощью <NavLink>. ",
            "Вы также можете useMatch использовать любую другую «активную» индикацию вне ссылок. ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "1. Активные ссылки, NavLink",
        answer: [
            "1.1.  Стилизовать активные элементы навигации, чтобы пользователь знал, где они находятся ( isActive) или куда они идут ( isPending) в приложении, можно легко с помощью <NavLink>. ",
            "import { NavLink } from 'react-router-dom'; ",
            "<NavLink to='/messages'  ",
            " - - - - className={({ isActive, isPending }) =>",
            " - - - - isPending ? 'pending' : isActive ? 'active' : '' ",
            "   }",
            " > Messages </NavLink>; ",
            "----------------------------------- ",
            "1.2. `active` - класс по умолчанию",
            "По умолчанию active класс добавляется к <NavLink> компоненту, когда он активен, поэтому вы можете использовать CSS для его стилизации. ",
            "<nav id='sidebar'>",
            " - <NavLink to='/messages' /> ",
            "</nav> ",
            "--",
            "#sidebar a.active { ",
            " - color: red;",
            "} ",
            "----------------------------------- ",
            "1.3. Свойство className работает как обычное имя класса, но вы также можете передать ему функцию для настройки имен классов, применяемых в зависимости от активного и ожидающего состояния ссылки.",
            "<NavLink ",
            " - to='/messages'",
            " - className={({ isActive, isPending }) =>",
            " - isPending ? 'pending' : isActive ? 'active' : '' ",
            " - }",
            " > Messages </NavLink>;",
            "----------------------------------- ",
            "1.4. Свойство style работает как обычное свойство стиля, но вы также можете передать ему функцию для настройки применяемых стилей на основе активного и ожидающего состояния ссылки. ",
            "1.5. Children. Вы можете передать реквизит рендеринга в качестве дочерних элементов, чтобы настроить содержимое <NavLink> на основе активного и ожидающего состояния, что полезно для изменения стилей внутренних элементов. ",
            "1.6. End. Свойство end изменяет логику сопоставления для состояний active и pending, чтобы соответствовать только «концу» пути NavLinks to. Если URL-адрес длиннее to, он больше не будет считаться активным. ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "2. Активные ссылки, useMatch",
        answer: [
            "useMatch. Возвращает данные соответствия о маршруте по заданному пути относительно текущего местоположения. ",
            "matchPathсопоставляет шаблон пути маршрута с именем пути URL и возвращает информацию о совпадении. Это полезно, когда вам нужно вручную запустить алгоритм сопоставления маршрутизатора, чтобы определить, совпадает ли путь маршрута или нет. Он возвращается null, если шаблон не соответствует заданному имени пути.",
            "Хук использует эту функцию useMatchдля внутреннего сопоставления пути маршрута относительно текущего местоположения. ",
        ],
        isParagraph: true
    },
    {
        heading: "Хуки React Router 5.",
        answer: [
            "React Router 5 предоставляет несколько хуков для доступа к состоянию роутера и навигации внутри компонентов. ",
            "1. useHistory ",
            "2. useLocation",
            "3. useParams",
            "4. useRouteMatch ",
            "Указанные хуки предоставляют доступ к следующим объектам: ",
            " - history",
            " - location",
            " - match",
            " - matchPath",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "1. useHistory ",
        answer: [
            "Хук useHistory позволяет нам получить доступ к объекту history. Затем мы можем вызывать такие методы объекта history, как goBack, push, replace и тому подобное.",
            "Метод goBack позволяет перенаправить пользователя к предыдущему маршруту в стеке истории. Например, если пользователь перейдет со страницы Home на страницу Shop, а затем нажмет кнопку для возврата назад (“Go Back”), он снова будет перенаправлен на страницу Home. ",
            "Используя метод push, мы можем перенаправить пользователей на другую страницу. Мы можем добавить новые записи в стек истории и заставить пользователя перейти на этот маршрут, используя метод push.",
            "Вот окончательный код, реализующий кнопки 'Go Back' и 'Profile' для страницы About. Не забудьте импортировать хук useHistory из react-router. ",
            "----------------------------------------------------------- ",
            "import React, { FC } from 'react'; ",
            "import { useHistory } from 'react-router'; // import { useHistory } from 'react-router-dom';",
            "// About Page ",
            "const About: FC = () => { ",
            "const history = useHistory(); ",
            "-- ",
            "return ( ",
            " - <div>",
            " - - <h1>About</h1>",
            " - - <button onClick={ () => history.goBack() }> Go Back </button>",
            " - - <button onClick={ () => history.push( `/profile/${ userName }` )> Profile </button>",
            " - <div/>",
            "); ",
            "-- ",
            "Export default About ",
            "----------------------------------------------------------- ",
            "Основное применение - роутинг, который задается явно с помощью push, replace и тому подобное. ",
            "1. Характеристики: ",
            " - длина: число, количество записей (вхождений) в стеке истории",
            " - action: текущая операция (PUSH, REPLACE или POP).",
            " - location: объект, представляющий текущее местоположение. Он может иметь следующие свойства:",
            " - - - pathname: строка, содержащая путь к URL",
            " - - - search (поиск): строка запроса URL",
            " - - - hash: строка, содержащая хеш-фрагмент URL.",
            " - - - state (состояние): объект, содержащий состояние, зависящее от местоположения, которое было предоставлено, например, push(path, state), когда это местоположение было помещено в стек. Доступно только в истории браузера и памяти.",
            "2. Методы: ",
            " - push(path, [state]): помещает новую запись в стек истории. Полезно для перенаправления пользователей на страницу",
            " - replace(path, [state]): заменяет текущую запись в стеке истории",
            " - go(n): перемещает указатель в стеке истории на n записей",
            " - goBack(): Эквивалентно go(-1).",
            " - goForward(): Эквивалентно go(1).",
            " - block(prompt): блокирует навигацию. Он принимает обратный вызов в качестве параметра и вызывает его после блокировки навигации. Наиболее полезно, когда вы хотите сначала подтвердить, действительно ли пользователь хочет покинуть страницу.",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "2. useParams ",
        answer: [
            "Хук useParams возвращает объект, который состоит из всех параметров в URL. ",
            "import {useParams} from 'react-router-dom'; ",
            "-- ",
            "const Profile = ( props ) => { ",
            " // useParams() возвращает объект параметров, который определяется в URL-адресе страницы.",
            " // Например, путь, указанный в компоненте Route, состоит из ",
            " // параметра 'userName' в таком виде: '/profile/:userName'",
            " const { userName } = useParams(); // достаём из параметров URL-адреса.",
            " ------------------------------------------",
            " // состоит из параметра 'id'",
            " // в таком виде: '/profile/:id'",
            " const { id } = useParams();  // достаём из параметров URL-адреса.",
        ],
        isParagraph: true
    },
    {
        heading: "3. useLocation ",
        answer: [
            "Хук useLocation возвращает объект location (объект текущего местоположения), представляющий текущий URL. Его можно рассматривать как useState, который возвращает новое местоположение при каждом изменении URL. Этот хук можно использовать, например, чтобы вызвать событие просмотра новой страницы для инструмента веб-аналитики.",
            "Основной вариант использования - получение параметров запроса из строки маршрута. ",
            "Вот модифицированный пример компонента About, который печатает имя path. Каждый раз, когда вы посещаете страницу About, path='/about' будет выводиться в консоль.",
            "----------------------------------------------------------- ",
            "import { useHistory, useLocation, useParams } from 'react-router-dom'; ",
            "// About Page ",
            "const About = () => { ",
            " const history = useHistory();",
            " const location = useLocation();",
            " console.log(location.pathname);",
            "return ( ",
            "  <div>",
            "  - <h1>About</h1>",
            "  - <button onClick={ () => history.goBack() }> Go Back </button>",
            "  - <button onClick={ () => history.push( `/profile/${ userName }` )> Profile </button>",
            "  <div/>",
            "); ",
            "Export default About ",
            "----------------------------------------------------------- ",
            "1. Объект локации (location) выглядит следующим образом:",
            "{ ",
            " key: 'ac3df4', // отсутствует в HashHistory",
            " pathname: '/somewhere",
            " search: '?some=search-string',",
            " hash: '#howdy',",
            " state: { [ userDefined ]: true }",
            "} ",
            "2. Объект локации доступен в:",
            " - Компоненте Route как this.props.location (props.location)",
            " - Пропе render компонента Route как ({ location }) => ()",
            " - Потомках (children) компонента Route как ({ location }) => ()",
            " - withRouter как this.props.location",
            "Он также доступен в history.location. ",
            "Объект локации, в отличие от объекта истории, никогда не мутирует, поэтому его можно использовать для определения того, выполнялась ли навигация, например, для получения данных и запуска анимации. ",
            "Вы можете использовать location для навигации вместо строк в: ",
            " - Link to для веба",
            " - Link to для React Native",
            " - Redirect to",
            " - history.push",
            " - history.replace",
            "Обычно, во всех перечисленных случаях мы используем строку, однако, когда необходимо добавить некоторое 'состояние локации', которое будет доступным при возвращении приложения в данную локацию, можно использовать объект локации. Это может пригодиться в случае, когда определенные части интерфейса зависят от истории навигации, а не от путей (например, модульные окна). ",
            "----------------------------------------------------------- ",
            "// обычно, это все, что нам нужно ",
            "<Link to='/somewhere'/> ",
            "// однако, вместо этого можно использовать location ",
            "const location = { ",
            " - pathname: '/somewhere', ",
            " - state: { fromDashboard: true }",
            "} ",
            "-- ",
            "<Link to={location}/> ",
            "<Redirect to={location}/> ",
            "history.push(location) ",
            "history.replace(location) ",
            "----------------------------------------------------------- ",
            "3. Наконец, location можно передавать в следующие компоненты:",
            " - Routes",
            " - Switch",
            " - Route",
        ],
        isParagraph: true
    },
    {
        heading: "4. useRouteMatch ",
        answer: [
            "useRouteMatch: возвращает объект соответствия, который содержит всю информацию, например, о том, как текущий URL-адрес соответствует пути маршрута.  ",
            "Характеристики: ",
            " - params: это объект, который содержит переменную часть URL-адреса.",
            " - isExact: это логическое значение, указывающее, соответствует ли весь URL заданному пути маршрутизатора.",
            " - path: строка, содержащая шаблон пути.",
            " - URL-адрес: строка, содержащая совпадающую часть URL-адреса. Его можно использовать для вложенных <Link /> и <Route />.",
            "1. Доступ к объекту совпадения можно получить в:",
            " - Route как this.props.match (props.match)",
            " - Пропе render компонента Route как ({ match }) => ()",
            " - Потомках Route как ({ match }) => ()",
            " - withRouter как this.props.match",
            " - matchPath в виде возвращаемого значения",
            " - useRouteMatch в виде возвращаемого значения",
            "Если Route не имеет пропа path и поэтому всегда совпадает, мы получаем его ближайшего предка. Тоже самое справделиво для withRouter. ",
            "2. Совпадение с null",
            "<Route>, имеющий проп children, вызывает функцию данного пропа даже при отсутствии совпадения с текущей локацией. В этой ситуации match будет иметь значение null. Может быть полезным иметь возможность рендерить контент <Route> при совпадении, но на этом пути существует несколько препятствий. ",
            "Обычный способ 'разрешения' URL заключается в объединении строки match.url и 'относительного' пути.",
            "const path = `${match.url}/relative-path`; ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            " ",
            "import { useRouteMatch } from 'react-router-dom'; ",
            "//.. ",
            "const match = useRouteMatch(); ",
            "хук useRouterMatch можно использовать для создания вложенных маршрутов и ссылок ",
            "Вы также можете использовать useRouteMatch для доступа к совпадению маршрута, без необходимости рендерить Route. Для этого передайте в хук аргумент текущего маршрута. ",
            " ",
        ],
        isParagraph: true
    },
    {
        heading: "5. Хук useNavigate() вместо useHistory() в 6-ой версии.",
        answer: [
            "Хук useHistory был удален из React Router 6, теперь вместо него useNavigate. В принципе, использование этих двух хуков мало чем отличается. Хук возвращает функцию, которая в качестве первого аргумента принимает строку URL или целое число. Целое число может быть положительным (движение вперед по истории браузера) или отрицательным (движение назад по истории браузера). В качестве второго аргумента можно передать объект {replace, state}. ",
            " - const navigate = useNavigate()",
            " - const goBack = () => navigate(-1)",
            " - const goHome = () => navigate('/home')",
            "Работа с историей браузера допускает две операции — push (добавить в историю) и replace (заместить в истории). По умолчанию при вызове navigate() происходит push, но при желании можно это изменить на replace. Допустим, страница на сайте по адресу /old-page устарела, вместо нее мы создали новую /new-page. Но в интернете остались ссылки на старую страницу, посетители продолжают на нее переходить. И нам надо всех перенаправлять на новую страницу. Но в истории эту старую страницу сохранять не нужно — иначе пользователь не сможет вернуться туда, откуда пришел на наш сайт. Каждый раз при нажатии кнопки «Назад» он будет попадать на /old-page, а оттуда — опять на /new-page. ",
            "Обратите внимание, что если установить replace в false, то попав на страницу New Page после клика на Old Page — уйти с этой страницы с помощью кнопки «Назад» браузера уже не получится. Переход назад по истории приводит на Old Page, а оттуда сразу на New Page.",
        ],
        isParagraph: true
    },
    {
        heading: "Компонент Navigate. ",
        answer: [
            "Компонент позволяет перенаправить пользователя на новую страницу. То, что мы делали с помощью useNavigate можно сделать гораздо проще с помощью Navigate. По сути, это обертка для useNavigate и принимает пропсы to, replace и state. ",
            " ",
            " ",
            " ",
            " ",
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
