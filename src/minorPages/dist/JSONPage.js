"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Page_1 = require("../components/general/Page/Page");
var PageLink_1 = require("../components/general/PageLink/PageLink");
var JSONPage = function () {
    var links = [
        {
            href: "/pdf/invest/Архив структуры инвестиционного портфеля Фонда-1578928598453-1579866841961.pdf",
            title: "Архив структуры инвестиционного портфеля Фонда"
        },
        {
            href: "/pdf/invest/Информация о процессе размещения средств ПР_10.02-1581662050140.pdf",
            title: "Информация о процессе размещения средств"
        },
    ];
    var ArrayHeadingAnswers = [
        {
            heading: "Ранее пенсионную программу нашей компании реализовывал НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ», а теперь мои пенсионные суммы находятся в АО НПФ «Ренессанс пенсии». Что для меня изменилось в связи с этим?",
            answer: [
                "АО НПФ «Ренессанс пенсии» создано в результате реорганизации некоммерческой организации Негосударственного пенсионного фонда «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» в форме преобразования в акционерный пенсионный фонд в соответствии с Федеральным законом от 28.12.2013 № 410-ФЗ «О внесении изменений в Федеральный закон «О негосударственных пенсионных фондах» и отдельные законодательные акты Российской Федерации». К АО НПФ «Ренессанс пенсии» в порядке правопреемства перешли в полном объеме все права и обязанности НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ». Реорганизация Фонда не требует переподписания каких-либо документов.",
            ],
            isParagraph: true
        },
        {
            heading: "Я являюсь сотрудником компании, реализующей пенсионную программу в партнерстве с АО НПФ «Ренессанс пенсии». Где я могу получить информацию о пенсионной программе?",
            answer: [
                "О деталях текущей программы можно узнать в Фонде по телефону горячей линии, на интернет-сайте в личном кабинете участника, а также в отделе кадров Вашей компании.",
            ],
            isParagraph: true
        },
        {
            heading: "Как узнать размер баланса на моем пенсионном счете и сумму средств, перечисленных в мою пользу компании?",
            answer: [
                "Вы можете получить данную информацию",
                "из электронной выписки в личном кабинете (обновляется регулярно, по мере зачисления на Ваш счет очередных пенсионных взносов).",
                "подключив бесплатный сервис CМС-оповещений о балансе и поступлениях на счет",
                "позвонив по телефону горячей линии",
            ],
            isParagraphBefore: true
        },
        {
            heading: "Что произойдет с пенсионными суммами в случае смерти?",
            answer: [
                "В случае наступления смерти участника до начала выплаты пенсии права на пенсионные суммы передаются правопреемнику или, в случае если правопреемник не назначен, наследуются в соответствии с законодательством Российской Федерации.",
                "В случае наступления смерти участника после начала выплаты пенсии, права на оставшиеся пенсионные суммы передаются правопреемнику или наследуются, если это предусмотрено выбранным типом пенсии, в течение всего периода для срочных схем выплаты пенсий и гарантированного периода для пожизненных схем выплаты пенсий.",
            ],
            isParagraph: true
        },
    ];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(PageLink_1["default"], { links: links, title: "JSON, \u0441\u0441\u044B\u043B\u043A\u0438" }),
        react_1["default"].createElement(Page_1["default"], { title: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E JSON", ArrayHeadingAnswers: ArrayHeadingAnswers })));
};
exports["default"] = JSONPage;
