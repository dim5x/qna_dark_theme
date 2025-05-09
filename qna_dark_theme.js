(function() {
    'use strict';

    GM_addStyle(`
/* ================= Общие стили ================= */
/*:root {
  --dark-bg: #505b6e; /*Общий фон*/
  --dark-text: #e0e0e0;
  --light-bg: #e0e0e0;
  --light-text: #000;
  --accent-green: #65c178;
  --input-bg: #3a4457;
  --code-bg: #CED4D4;
  --hover-bg: #eef2f5;
}*/
/* ------------------------- */
/* Верхнее левое меню "Хабр" */
/* ------------------------- */

#dropdown {
    border: solid 1px #000;
}

/* Меняем цвет SVG элементов */
path {
    fill: #fff; /* Белый цвет */
}

/* ----------end------------ */

header, a.service,
div.layout__body::before,
aside,
dl, dd, dt,
.page_header {
    background-color: #505b6e !important;
    color: #fff !important;
}

/*Поиск*/
/*Серый.*/
input {
     background-color: #3a4457 !important;
}

.suggest__field {
color: #CED4D4 !important;
}

/*Все результаты по запросу*/
.ui-menu-item strong {
   color: #fff !important;
}


.ui-menu-item a:hover {
    background-color: #CED4D4 !important;
    color: #505b6e !important;
}


ul {
    background-color: #505b6e !important;
}

nav {
    background-color: #505b6e !important;
    color: #000 !important;
}

a.filters-menu__link {
    background-color: #505b6e !important;
    color: #e0e0e0 !important;
    border: none;
}

/* Кнопка подписаться. #65c178 */
button.btn.btn_subscribe,
button.btn.btn_outline_green,
button.btn.btn_outline_grey,
.btn_solution,
.btn_like,
.btn_complexity-filter,
.filters-menu.filters-menu_mobile
{
    color: #71c07b !important;
    border: 1px solid !important;
    border-color:  #71c07b !important;
}

button.btn.btn_subscribe:hover,
button.btn.btn_outline_grey:hover,
button.btn.btn_outline_green:hover,
.btn_solution:hover,
.btn_like:hover,
.btn_complexity-filter:hover
{
    border-color: #369249 !important;
    background-color: #505b6e !important;
}

.filters-menu__link_active {
border: 2px solid !important;
    border-color:  #71c07b !important;
}

/* To-do Кнопка закрыть при выборе сложности вопросов */
.popup__close-btn:hover {
    color: red !important;
}



/* Альтернативный ник */
.user-summary__nickname {
    color: #CED2D4;
}



/* Цвет отредактированного вопроса, который принял модератор */
.question__title-link{
    color: #CFD6E3 !important;
}

/* -------------------------------  */
/*        Задать вопрос             */
/* -------------------------------  */
#question_title {
    background-color: #515c6e !important;
    color: #e0e0e0
}

.ui-widget-content.ui-autocomplete-input {
    background-color: #ced4d4 !important;
}


.page__header-title.page__header-title_bordered,
.field__label,
.tagit-label {
    color: #fff !important;
}

.selectBox-options>li.selectBox-hover a {
	background-color: #e0e0e0 !important;
	color: #000 !important;
}

.ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content.ui-corner-all.utocomplete_tags {
	background-color: #e0e0e0 !important;
	color: #000 !important;
}
/* --------------end-----------------  */


/* Настройка уведомлений */
.fieldset__title, .fieldset__notice-type {
    color: #fff !important;
}

/* ----------------------------------- */
/*           Код, подсветка            */
/* ----------------------------------- */
pre, code, textarea {
    border: solid 2px #000;
    background-color: #CED4D4 !important;
    color: #000 !important;
}

textarea {
    border: none;
}

/* Рамка вокруг поля комментариев */
.form_comments {
    background-color: #505b6e !important;
}

.hljs {
	color: #000 !important;
	background: #CED4D4 !important;
}

.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-title.function_ {
	color: #693CBE !important;
}
.hljs-doctag,
.hljs-keyword,
.hljs-meta .hljs-keyword,
.hljs-template-tag,
.hljs-template-variable,
.hljs-type,
.hljs-variable.language_ {
	color: #AE2431 !important;
}

.hljs-built_in,
.hljs-symbol {
	color: #923F07 !important;
}

.hljs-code,
.hljs-comment,
.hljs-formula {
	color: #545454 !important;
}

.menu_dropdown .menu__item-link {
    display: inline-block;
    white-space: nowrap;
    width: 100%;
    padding: 12px;
    transition: all .3s ease-out;
    font-weight: 700;
    font-size: 14px;
    color: #000;
    background-color: #e0e0e0; /*#e0e0e0;*/
    text-decoration: none;
    border-bottom: solid 1px #000;
}
/* --------------end--------------------- */


a.menu_item-link {
background: red !important}

.icons-bar.icons-bar_horizontal{
    background-color: #e0e0e0 !important;
    border: solid 1px #000;
}
.icons-bar__item_control {
    color: #506273 !important;
}

.btn__counter{
    border-left: 1px solid #65c178 !important;
    color: #fff !important;
}

a.filters-menu__link.filters-menu__link_active {
    border: solid;
}

.events-list__item.event_navbar {
    background-color: #505b6e !important;
}


.section-header {
    border-bottom: 2px solid #e0e0e0;
}

/* ----------------------------------- */
/*           Modul window              */
/* ----------------------------------- */
.checkbox__label, .radio__label {
    color: #65c178;;
}

/* Кнопка закрыть в выборе сложности вопроса */
.popup__close-btn span {
    white-space: nowrap;
    font-size: 14px;
    color: #65c178;
}

.menu_popup .menu__item, .menu_popup .chzn-results>li {
    float: none;
    margin: 0;
    display: block;
    border-bottom: 1px solid #f0f0f0 !important;
    padding: 12px;
    }
/* ---------------end----------------- */



/* ----------------------------------- */
/*  Меню вопроса: жалоба / редакция    */
/* ----------------------------------- */

.menu_dropdown a.menu__item-link {
   color: black !important;
   background-color : #ced4d4 !important;
   }

a.menu__item-link:hover,
#abuse_question_link_1396548:hover {
   background: #eef2f5 !important;
   }

#abuse_question_link_1396548 {
background-color : #CED4D4 !important;
}
/* ---------------end----------------- */

a,h1,.question__views-count,.question__date,.section-header__title {
    color: #e0e0e0 !important;
}



.question__title-link {
    color: #000;
}

button {
    background-color: #505b6e !important;
    color: #fff !important;
}

p, div {
    background-color: #505b6e !important;
    color: #e0e0e0 !important;
}

li.content-list__item {
    border-bottom: none;
}

select {
    background-color: #333333 !important;
    color: #fff !important;
    border-color: #555 !important;
}

.svg-icon_level {
    position: relative !important;
    display: inline-block !important;
    width: 1em !important;
    height: 1em !important;
}

/* ------------------------------------------- */
/* Меняем значки сложности вопросов на 🟢🟠🔴 */
/* ------------------------------------------- */
/* Скрываем оригинальное содержимое */
.svg-icon_level > * {
    display: none !important;
}

/* Добавляем emoji как псевдоэлемент */
.svg-icon_level::after {
    content: attr(data-emoji);
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1em;
    line-height: 1;
    /* color: hsl(0, 60 %, 45 %) !important; Менее насыщенный */
    opacity: 0.7 !important;
    filter: brightness(0.9) !important;
}

/* Цвета для разных уровней */
.svg-icon_level-2::after {
    content: "🟢" !important;
}

.svg-icon_level-3::after {
    content: "🟠" !important;
}

.svg-icon_level-4::after {
    content: "🔴" !important;
}
    `);

    // Создаём метку с временем создания
    const marker = document.createElement('div');
    marker.id = 'dark-theme-marker';
    marker.dataset.active = 'true';
    marker.dataset.createdAt = Date.now(); // Временная метка
    marker.style.display = 'none';
    document.body.appendChild(marker);

    console.log('[Тёмная тема] Метка создана:', {
        element: marker,
        time: new Date(parseInt(marker.dataset.createdAt)).toLocaleTimeString()
    });

})();