import React from "react";
import Concat from "../components/forArrayMethods/Concat";
import ForEach from "../components/forArrayMethods/ForEach";
import IndexOf from "../components/forArrayMethods/IndexOf";
import LastIndexOf from "../components/forArrayMethods/LastIndexOf";
import Pop from "../components/forArrayMethods/Pop";
import Push from "../components/forArrayMethods/Push";
import Shift from "../components/forArrayMethods/Shift";
import Slice from "../components/forArrayMethods/Slice";
import Splice from "../components/forArrayMethods/Splice";
import Unshift from "../components/forArrayMethods/Unshift";
import PageLink from "../components/general/PageLink/PageLink";
import { ILinkInfo } from "../models/types";
import "../styles/arrayMethods.scss";

const ArrayMethodsPage = () => {
  const linksArrayMethods: ILinkInfo[] = [
    {
      href: "https://learn.javascript.ru/array",
      title: "Массивы",
    },
    {
      href: "https://learn.javascript.ru/array-methods",
      title: "Методы массивов",
    },
    {
      href: "https://habr.com/ru/company/plarium/blog/483958/",
      title: "15 методов работы с массивами в JavaScript, которые необходимо знать в 2020 году",
    },
    {
      href: "https://digitrain.ru/articles/272353/",
      title: "Мутировать или не мутировать? Шпаргалка по методам массивов JavaScript",
    },
    {
      href: "https://itchief.ru/javascript/arrays",
      title: "Массивы в JavaScript",
    },
    {
      href: "https://only-to-top.ru/blog/coding/2020-12-30-js-array-cheatsheet.html ",
      title: "Методы массивов",
    },
  ];

  return (
    <section className="array-methods">
      <div className="array-methods__container">
        <PageLink links={linksArrayMethods} title="Методы массивов, ссылки" />

        <h1 className="array-methods__heading"> Методы массивов </h1>
        <h2 className="array-methods__subheading"> Добавление/удаление элементов</h2>

        <Push />
        <Unshift />
        <Pop />
        <Shift />
        <h2 className="array-methods__subheading">Функции для работы с массивами (методы объекта Array)</h2>
        <Slice />
        <Splice />
        <Concat />
        <ForEach />
        <h2 className="array-methods__subheading">Поиск в массиве (методы поиска в массиве)</h2>
        <IndexOf />
        <LastIndexOf />
      </div>
    </section>
  );
};

export default ArrayMethodsPage;
