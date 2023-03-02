import React, { FC, useEffect, useRef, useState } from "react";
import { IObjectHeadingAnswers, ISidebarLink } from "../../../models/types";
import SidebarLink from "../../ui/links/SidebarLink/SidebarLink";
import DarkIcon from "../DarkIcon/DarkIcon";
import ExpandingAnswer from "../expanding/ExpandingAnswer/ExpandingAnswer";
import styles from "./BarPage.module.scss";

interface BarPageProps {
  ArrayHeadingAnswers: IObjectHeadingAnswers[];
}

const BarPage: FC<BarPageProps> = ({ ArrayHeadingAnswers }) => {
  const block1 = useRef<HTMLDivElement>(null);
  const block2 = useRef<HTMLDivElement>(null);
  const block3 = useRef<HTMLDivElement>(null);
  const block4 = useRef<HTMLDivElement>(null);
  const block5 = useRef<HTMLDivElement>(null);
  const block6 = useRef<HTMLDivElement>(null);
  const block7 = useRef<HTMLDivElement>(null);
  const refBbarContainer = useRef<HTMLDivElement>(null);

  const [barContainerTop, setBarContainerTop] = useState(0);
  const [barNavAbsolute, setBarNavAbsolute] = useState(true);
  const [idSidebarLink, setIdSidebarLink] = useState("0");
  const [iconTop, setIconTop] = useState(0);

  const [h00] = useState(452); // высота (topBlock - 100px)
  const [h01, setH01] = useState(0);
  const [h02, setH02] = useState(0);
  const [h03, setH03] = useState(0);
  const [h04, setH04] = useState(0);
  const [h05, setH05] = useState(0);
  const [h06, setH06] = useState(0);
  const [h07, setH07] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const sidebarLinks: ISidebarLink[] = [
    { itemName: "Правление", id: "0" },
    { itemName: "Совет директоров", id: "1" },
    { itemName: "Команда", id: "2" },
    { itemName: "Ревизионная комиссия", id: "3" },
    { itemName: "Главный бухгалтер", id: "4" },
    { itemName: "Контролер", id: "5" },
    { itemName: "Собрание акционеров", id: "6" },
    { itemName: "Правление", id: "7" },
    { itemName: "Совет директоров", id: "8" },
    { itemName: "Команда", id: "9" },
    { itemName: "Ревизионная комиссия", id: "10" },
    { itemName: "Главный бухгалтер", id: "11" },
    { itemName: "Контролер", id: "12" },
    { itemName: "Собрание акционеров", id: "13" },
    { itemName: "Правление", id: "14" },
    { itemName: "Совет директоров", id: "15" },
    { itemName: "Команда", id: "16" },
    { itemName: "Ревизионная комиссия", id: "17" },
    { itemName: "Главный бухгалтер", id: "18" },
    { itemName: "Контролер", id: "19" },
    { itemName: "Собрание акционеров", id: "20" },
    { itemName: "Правление", id: "21" },
    { itemName: "Совет директоров", id: "22" },
    { itemName: "Команда", id: "23" },
    { itemName: "Ревизионная комиссия", id: "24" },
    { itemName: "Главный бухгалтер", id: "25" },
    { itemName: "Контролер", id: "26" },
    { itemName: "Собрание акционеров", id: "27" },
    { itemName: "Правление", id: "28" },
    { itemName: "Совет директоров", id: "29" },
    { itemName: "Команда", id: "30" },
    { itemName: "Ревизионная комиссия", id: "31" },
    { itemName: "Главный бухгалтер", id: "32" },
    { itemName: "Контролер", id: "33" },
    { itemName: "Собрание акционеров", id: "34" },
  ];

  useEffect(() => {
    getTopBarContainer();
    changeStyleBarNav();
    getIconTop();
    document.addEventListener("scroll", scrollHandler);

    // "Этот код срабатывает при размонтировании!
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barContainerTop]);

  const scrollHandler = (event: any) => {
    getTopBarContainer();
    getTopAllComponents();
    setScrollY(window.scrollY);
  };
  // console.log(scrollY);

  const getTopBarContainer = () => {
    if (refBbarContainer.current) {
      setBarContainerTop(refBbarContainer.current.getBoundingClientRect().top);
    }
  };
  // console.log(barContainerTop);

  const changeStyleBarNav = () => {
    if (barContainerTop > 0) {
      setBarNavAbsolute(true);
    } else {
      // баг здесь ==============
      // setBarNavAbsolute(false);
    }
  };
  // console.log(barNavAbsolute);

  const getTopAllComponents = () => {
    if (block1.current) {
      setH01(block1.current.getBoundingClientRect().height);
    }

    if (block2.current) {
      setH02(block2.current.getBoundingClientRect().height);
    }

    if (block3.current) {
      setH03(block3.current.getBoundingClientRect().height);
    }

    if (block4.current) {
      setH04(block4.current.getBoundingClientRect().height);
    }

    if (block5.current) {
      setH05(block5.current.getBoundingClientRect().height);
    }

    if (block6.current) {
      setH06(block6.current.getBoundingClientRect().height);
    }

    if (block7.current) {
      setH07(block7.current.getBoundingClientRect().height);
    }
  };

  /* Если не нравится эта логика, то можно использовать:
     Якорное меню с плавной прокруткой в ​​ReactJS , подробное руководство.
     https://medium.com/the-coders-guide-to-javascript/smooth-scrolling-anchor-menu-in-reactjs-175030d0bce2
  */
  const getIconTop = () => {
    if (scrollY >= h00 && scrollY < h00 + h01) {
      setIconTop(0);
      setIdSidebarLink("0");
    } else if (scrollY >= h00 + h01 && scrollY < h00 + h01 + h02) {
      setIconTop(1);
      setIdSidebarLink("1");
    } else if (scrollY >= h00 + h01 + h02 && scrollY < h00 + h01 + h02 + h03) {
      setIconTop(2);
      setIdSidebarLink("2");
    } else if (scrollY >= h00 + h01 + h02 + h03 && scrollY < h00 + h01 + h02 + h03 + h04) {
      setIconTop(3);
      setIdSidebarLink("3");
    } else if (scrollY >= h00 + h01 + h02 + h03 + h04 && scrollY < h00 + h01 + h02 + h03 + h04 + h05) {
      setIconTop(4);
      setIdSidebarLink("4");
    } else if (scrollY >= h00 + h01 + h02 + h03 + h04 + h05 && scrollY < h00 + h01 + h02 + h03 + h04 + h05 + h06 - 21) {
      setIconTop(5);
      setIdSidebarLink("5");
    } else if (
      scrollY >= h00 + h01 + h02 + h03 + h04 + h05 + h06 - 21 &&
      scrollY < h00 + h01 + h02 + h03 + h04 + h05 + h06 + h07
    ) {
      setIconTop(6);
      setIdSidebarLink("6");
    }
  };

  const getValueId = (id: string) => {
    setIdSidebarLink(id);
  };
  // =======================

  return (
    <section className={styles["bar-page"]}>
      <div className={styles["bar-page__container"]}>
        <div className={styles["bar-page__content"]}>
          <h1 className={styles["bar-page__heading"]}>Вопросы и ответы</h1>

          {ArrayHeadingAnswers.map((item, index) => (
            <ExpandingAnswer key={index} heading={item.heading} answer={item.answer} isParagraph={true} />
          ))}

          <div className={styles["bar-page__department"]} id="Правление" ref={block1}>
            Правление
          </div>

          <div className={styles["bar-page__department"]} id="Совет директоров" ref={block2}>
            Совет директоров
          </div>

          <div className={styles["bar-page__department"]} id="Команда" ref={block3}>
            Команда
          </div>

          <div className={styles["bar-page__department"]} id="Ревизионная комиссия" ref={block4}>
            Ревизионная комиссия
          </div>

          <div className={styles["bar-page__department"]} id="Главный бухгалтер" ref={block5}>
            Главный бухгалтер
          </div>

          <div className={styles["bar-page__department"]} id="Контролер" ref={block6}>
            Контролер
          </div>

          <div className={styles["bar-page__department"]} id="Собрание акционеров" ref={block7}>
            Собрание акционеров
          </div>
        </div>

        <div className={styles["bar-page__bar-container"]} ref={refBbarContainer}>
          <aside className={barNavAbsolute ? styles["bar-page__nav_absolute"] : styles["bar-page__nav_fixed"]}>
            <div className={styles["bar-page__bar-icon"]} style={{ top: `${iconTop * 48}px` }}>
              <DarkIcon icon="Arrow Down" />
            </div>

            {sidebarLinks.map((link, index) => (
              <SidebarLink
                key={index}
                itemName={link.itemName}
                id={link.id}
                isActive={index === Number(idSidebarLink)}
                emitValueId={getValueId}
              />
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BarPage;
