import React from "react";
import Page from "../components/general/Page/Page";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo, IObjectHeadingAnswers } from "../models/types";

const CSS = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://getbootstrap.com/",
      title: "Bootstrap",
    },
    {
      href: "https://mdbootstrap.com/docs/standard/",
      title: "Material Design for Bootstrap",
    },
    {
      href: "https://materializecss.com/",
      title: "Materialize",
    },
    {
      href: "https://bulma.io/",
      title: "Bulma",
    },
    {
      href: "https://purecss.io/",
      title: "Pure",
    },
    {
      href: " ",
      title: " ",
    },
  ];

  const ArrayHeadingAnswers: IObjectHeadingAnswers[] = [
    {
      heading: "CSS, фреймворки CSS.",
      answer: [
        "Каскадная таблица стилей (CSS) формально является набором команд и инструментов для работы с внешним видом веб-страницы. Она делает интерфейс более восприимчивым и приятным – огромное количество сайтов работает на основе связки HTML и CSS. Как и в случае с языками программирования, существует множество готовых библиотек CSS, созданных профессионалами для удобства работы со стилями.",
        "CSS-фреймворк — фреймворк, созданный для упрощения работы верстальщика, быстроты разработки и исключения максимально возможного числа ошибок вёрстки (проблемы совместимости различных версий браузеров и т. д.). Готовые к использованию классы являются их основными строительными блоками. Они позволяют применять к элементам HTML заранее определенные правила, а также включают в себя готовые компоненты (меню, кнопки, карточки). Данные фреймворки подразумевают использование различных подходов для корректного отображения сайтов на устройствах любого размера. Многие разработчики предпочитают использование CSS-фреймворков, вместо прописывания всех стилей вручную. Это обусловлено следующими причинами:",
        " - Более быстрая разработка ",
        " - Поддержка кроссбраузерности",
        " - Поддержка различных устройств и размеров экранов",
        " - Единообразие кода при работе в команде позволяет снизить число разногласий при разработке. ",
        " - Как и библиотеки скриптовых языков программирования, CSS-библиотеки, обычно имеющие вид внешнего CSS-файла, добавляются в заголовок веб-страницы.",
      ],
      isParagraph: true,
    },
    {
      heading: "Рассмотрим самые популярные CSS-фреймворки.",
      answer: ["Bootstrap", "Materialize", "Bulma", "Pure", " ", " ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
    {
      heading: " ",
      answer: [" ", " "],
      isParagraph: true,
    },
  ];

  return (
    <div>
      <PageLink links={links} title="CSS ссылки" />
      <Page title="Вопросы по CSS" ArrayHeadingAnswers={ArrayHeadingAnswers} />
    </div>
  );
};

export default CSS;
