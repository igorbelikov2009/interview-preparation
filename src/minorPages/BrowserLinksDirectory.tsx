import React from "react";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo } from "../models/types";

const BrowserLinksDirectory = () => {
  const links: ILinkInfo[] = [
    {
      href: "https://jsonplaceholder.typicode.com/",
      title: "JSONPlaceholder",
    },
    {
      href: "https://metanit.com/",
      title: "METANIT.COM Сайт о программировании",
    },
    {
      href: "http://www.lingoes.net/en/translator/langcode.htm",
      title: "Таблица кодов языков ISO - Locale. ru	Russian. ru-RU	Russian (Russia)",
    },
    {
      href: "https://symbl.cc/ru/html-entities/",
      title:
        "Таблица HTML-мнемоники. Символы валют. Различные символы. Знаки препинания. Кавычки. Дроби. Математические символы. Греческие буквы. Латинские буквы. Стрелки ",
    },
    {
      href: "https://www.wm-school.ru/tags/symbols.html",
      title:
        "Специальные символы HTML.  Кавычки, пунктуация, математические знаки. Звездочки, снежинки, номера, карандаши. Стрелки. Карточные масти. Знаки валют. Знаки зодиака. Греческий алфавит.  ",
    },
    {
      href: "https://www.wm-school.ru/html/default.html",
      title: "Учебник HTML.",
    },
    {
      href: "https://www.wm-school.ru/html/html_color_table.html",
      title: "HTML Таблица цветов.",
    },
    {
      href: "https://www.wm-school.ru/tags/ref_lang-codes.html",
      title: "Коды языков.",
    },
    {
      href: "https://www.wm-school.ru/tags/ref_attributes.html",
      title: "Все атрибуты HTML по алфавиту",
    },
    {
      href: "https://www.wm-school.ru/tags/ref_standardattributes.html",
      title: "HTML Глобальные атрибуты",
    },
    {
      href: "https://www.wm-school.ru/tags/default.html",
      title: "Теги HTML в алфавитном порядке",
    },
    {
      href: "https://www.wm-school.ru/tags/ref_eventattributes.html",
      title: "HTML события. HTML Атрибуты событий",
    },
    {
      href: "https://www.wm-school.ru/tags/mime-types.html",
      title: "Список MIME-типов",
    },
    {
      href: "https://www.wm-school.ru/html/html_ascii_codes.html",
      title: "Печатаемые символы ASCII. В таблице ниже представлены все 128 символов ASCII и их аналоги в HTML. ",
    },
    {
      href: "https://fakestoreapi.com/docs",
      title: " fakestoreapi - фэйковый интернет магазин",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "",
    },
    {
      href: "",
      title: "==================",
    },
    {
      href: "https://thecode.media/spa/",
      title: "Single Page Application: как работает сайт-приложение",
    },
    {
      href: "https://doka.guide/js/",
      title: "JavaScript",
    },
    {
      href: "https://www.webune.com/forums/ionic-react-error-eslint.html",
      title: "Чтобы игнорировать, добавьте // Eslint-disable-next-line в строку перед",
    },
  ];

  return (
    <div>
      <PageLink links={links} title="Ссылки на справочники, директории" />
    </div>
  );
};

export default BrowserLinksDirectory;
