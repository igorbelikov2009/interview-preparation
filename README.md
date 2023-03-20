# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#=========================================================================================================================================

1. `npx create-react-app interview-preparation --template typescript`
2. `npm i react-router` `npm i react-router-dom`
3. `npm i -D typescript-plugin-css-modules` типизация стилей

4. Добавляем в `tsconfig.json`

"plugins": [
{
"name": "typescript-plugin-css-modules"
}
]

# Смотрим ролик о типизации стилей 3 минута 15 секунда, а именно: в палитре команд набираем Typescript select и выбираем "рабочую" версию Typescript. Без этой манипуляции автоматическая типизация модуля работать не будет.

5. Создаём файл `.vscode/settings.json` , в нем пишем
   {
   "typescript.tsdk": "node_modules\\typescript\\lib",
   "compile-hero.disable-compile-files-on-did-save-code": false
   }
6. `npm i scss-react` предпроцессор
7. `npm i -D sass`
8. `npm install framer-motion` анимация
9. `npm install react-bootstrap` bootstrap в файл index.html вставляем ссылку

 <link

rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
crossorigin="anonymous"
/>

10. в index.tsx подключаем файл `reset.css` (из стилей)
11. `npm install react-hook-form` https://react-hook-form.com/get-started
12. `Анимация переходов между страницами` https://www.youtube.com/watch?v=FdrEjwymzdY&t=47s
13. `npm install @reduxjs/toolkit`
    `npm install react-redux`
    `npm install @types/react-redux`
    устанавливаем react-redux, redux-toolkit и связываем всё с TypeScript
14. Cоздаём store.ts, hooks/redux.ts. В index.ts создаём: const store = setupStore(); import { Provider } from "react-redux"; оборачиваем всё в <Provider store={store}>zdddsfsdds<Provider>
15. `npm i axios` . Устанавливаем "axios": "^1.3.3", создаём store/reducers/ActionCreater.ts

16. `npm install -g json-server` скачаем json-server, с помощью которого мы сможем, буквально в два действия, поднять сервер, на котором уже будет, своего рода, база данных. Скачиваем отсюда (https://github.com/typicode/json-server). Создадим файл db.json, файл с некоторыми данными из страницы по ссылке: {
    "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
    ],
    "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
    ],
    "profile": { "name": "typicode" }
    }
17. `json-server --watch db.json` - этой командой подымаем сервер, по умолчанию сервер открывается на порту http://localhost:3000/posts/1 , но он у нас занят, поэтому в команде, дополнительно, указываем другой порт- 5000. `json-server --watch db.json --port 5000`
18. Если возникает проблема: "Невозможно загрузить файл, так как выполнение сценариев отключено в этой системе", то открываем терминал Windows - нажимаем `Win + X`. После этого выбираем Windows PowerShell (администратор), открывается Windows PowerShell. Далее, делаем по руководству
    https://www.youtube.com/watch?v=vObwhyh5h5I&t=97s
19. В окне "Windows PowerShell", в строке PS C:\Windows\system32> пишем команду

PS C:\Windows\system32> `Set-ExecutionPolicy Unrestricted -Scope CurrentUser`

20. Снова командуем `json-server --watch db.json --port 5000`
21. Сервер запустился, в нашем терминале видим
    http://localhost:5000/posts
    http://localhost:5000/comments
    http://localhost:5000/profile
    Для перехода, выбираем нужную ссылку мышкой и (ctrl + щелчок)
22. Для работы на 5000 порту открываем 2 вкладки в терминале. На одном открываем клиента, порт 3000 `npm start` , на другом подымаем сервер на 5000 порту командой `json-server --watch db.json --port 5000`
23. `Выбираем спинер (loader) здесь: ` https://atuin.ru/blog/loadery-i-spinnery-na-css/
