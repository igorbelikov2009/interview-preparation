import { motion } from "framer-motion"; // анимация
import React from "react";
import ArrayIsArray from "../components/forArrayMethods/ArrayIsArray";
import Concat from "../components/forArrayMethods/Concat";
import CopyWithin from "../components/forArrayMethods/CopyWithin";
import Entries from "../components/forArrayMethods/Entries";
import Filter from "../components/forArrayMethods/Filter";
import Find from "../components/forArrayMethods/Find";
import For from "../components/forArrayMethods/For";
import ForEach from "../components/forArrayMethods/ForEach";
import ForOf from "../components/forArrayMethods/ForOf";
import Includes from "../components/forArrayMethods/Includes";
import IndexOf from "../components/forArrayMethods/IndexOf";
import Join from "../components/forArrayMethods/Join";
import LastIndexOf from "../components/forArrayMethods/LastIndexOf";
import Map from "../components/forArrayMethods/Map";
import MethodList from "../components/forArrayMethods/MethodList";
import Pop from "../components/forArrayMethods/Pop";
import Push from "../components/forArrayMethods/Push";
import Reduce from "../components/forArrayMethods/Reduce";
import Shift from "../components/forArrayMethods/Shift";
import Slice from "../components/forArrayMethods/Slice";
import Some from "../components/forArrayMethods/Some";
import Sort from "../components/forArrayMethods/Sort";
import Splice from "../components/forArrayMethods/Splice";
import Split from "../components/forArrayMethods/Split";
import Unshift from "../components/forArrayMethods/Unshift";
import PageLink from "../components/general/PageLink/PageLink";
import ServerIsLoading from "../components/general/serverIsLoading/ServerIsLoading";
import ServerError from "../components/general/serverError/ServerError";
import { arrayMethodsAPI } from "../services/arrayMethodsAPI";
import "../styles/arrayMethods.scss";
import Flat from "../components/forArrayMethods/Flat";
// import { linksArrayMethods } from "../dataArchive.ts/arrayMethodsData";

const ArrayMethodsPage = () => {
  const { data: linksArrayMethods, isLoading, isError } = arrayMethodsAPI.useGetLinksArrayMethodsQuery();

  return (
    <div className="array-methods">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 }, opacity: 0 }}
      >
        <div className="array-methods__container">
          {isLoading && <ServerIsLoading />}
          {isError && <ServerError />}

          {linksArrayMethods && <PageLink links={linksArrayMethods} title="Методы массивов, ссылки" />}

          <h1 className="array-methods__heading"> Методы массивов </h1>
          <h2 className="array-methods__subheading">Распаковка подмассивов в один массив</h2>
          <Flat />
          <h2 className="array-methods__subheading"> Добавление/удаление элементов</h2>
          <Push />
          <Unshift />
          <Pop />
          <Shift />
          <h2 className="array-methods__subheading">Функции для работы с массивами (методы объекта Array)</h2>
          <Slice />
          <Splice />
          <Concat />
          <h2 className="array-methods__subheading">Перебор массива.</h2>
          <For />
          <ForOf />
          <ForEach />
          <h2 className="array-methods__subheading">Поиск элемента в массиве.</h2>
          <IndexOf />
          <LastIndexOf />
          <Includes />
          <h2 className="array-methods__subheading">Поиск первого элемента в массиве по заданному условию.</h2>
          <Find />
          <h2 className="array-methods__subheading">
            Поиск всех элементов в массиве, удовлетворящих заданному условию.
          </h2>
          <Filter />
          <h2 className="array-methods__subheading">Преобразование массива.</h2>
          <Map />
          <Sort />
          <h2 className="array-methods__subheading">
            Преобразование массива в строку и обратно: методы join() и split().
          </h2>
          <Join />
          <Split />
          <h2 className="array-methods__subheading">Вычисление единого значения на основе всего массива.</h2>
          <Reduce />
          <h2 className="array-methods__subheading">Проверка массива.</h2>
          <ArrayIsArray />
          <MethodList />
          <Some />
          <CopyWithin />
          <Entries />
        </div>
      </motion.div>
    </div>
  );
};

export default ArrayMethodsPage;
