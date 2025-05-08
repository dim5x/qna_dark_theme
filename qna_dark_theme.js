// ==UserScript==
// @name         Dark theme for qna.habr.com
// @namespace    http://tampermonkey.net/
// @version      2025-05-07
// @description  Тёмная тема для qna.habr.com
// @author       dim5x
// @icon         https://www.google.com/s2/favicons?sz=64&domain=habr.com
// @match        https://qna.habr.com/*
// @grant        GM_addStyle
// @homepageURL  https://github.com/dim5x/qna_dark_theme
// @updateURL    https://raw.githubusercontent.com/dim5x/qna_dark_theme/refs/heads/master/qna_dark_theme.js
// @downloadURL  https://raw.githubusercontent.com/dim5x/qna_dark_theme/refs/heads/master/qna_dark_theme.js
// @supportURL   https://github.com/dim5x/qna_dark_theme/issues
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
/* ------------------------- */
/* Верхнее левое меню "Хабр" */
/* ------------------------- */

#dropdown {
    background-color: #505b6e !important;
    color: #505b6e !important;
    border: solid 1px #000;
}

a.service {
    background-color: #505b6e !important;
}

/* Меняем цвет SVG элементов */
path {
    fill: #fff; /* Белый цвет */
}

/* ----------end------------ */

header,
div.layout__body::before,
aside, dl, dd, dt, .page_header {
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

a {
    color: #e0e0e0 !important;
}

a.filters-menu__link {
    background-color: #505b6e !important;
    color: #e0e0e0 !important;
    border: none;
}

/* Кнопка подписаться. #65c178 */
button.btn.btn_subscribe,
.btn_solution {
    color: #fff !important;
    border: 1px solid !important;
    border-color:  #71c07b !important;
}

.btn_solution:hover {
    border-color: #369249 !important;
    background-color: #505b6e !important;
}

/* Альтернативный ник */
.user-summary__nickname {
    color: #CED2D4 !important;
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
    background-color: #e0e0e0;
    text-decoration: none;
    border-bottom: solid 1px #000;
}
/* --------------end--------------------- */


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

.section-header__title {
    color: #e0e0e0;
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


.question__views-count, .question__date {
    color: #e0e0e0;
}

.question__title-link {
    color: #000;
}

button {
    background-color: #505b6e !important;
    color: #fff !important;
}

h1 {
    color: #e0e0e0 !important;
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
})();