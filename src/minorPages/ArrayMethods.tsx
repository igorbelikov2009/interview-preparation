import React from "react";
import Concat from "../components/forArrayMethods/Concat";
import Filter from "../components/forArrayMethods/Filter";
import Find from "../components/forArrayMethods/Find";
import ForEach from "../components/forArrayMethods/ForEach";
import Includes from "../components/forArrayMethods/Includes";
import IndexOf from "../components/forArrayMethods/IndexOf";
import LastIndexOf from "../components/forArrayMethods/LastIndexOf";
import Map from "../components/forArrayMethods/Map";
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
        <h2 className="array-methods__subheading">Поиск элемента в массиве.</h2>
        <IndexOf />
        <LastIndexOf />
        <Includes />
        <h2 className="array-methods__subheading">
          Поиск одного (первого, который заставит функцию вернуть true) элемента (объекта) в массиве по заданному
          условию.
        </h2>
        <Find />
        <h2 className="array-methods__subheading">
          Поиск всех элементов (объектов) в массиве, удовлетворящих заданному условию.
        </h2>
        <Filter />
        <h2 className="array-methods__subheading">Преобразование массива.</h2>
        <Map />
      </div>
    </section>
  );
};

export default ArrayMethodsPage;
