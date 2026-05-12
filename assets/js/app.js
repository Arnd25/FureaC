import { sliders } from "./slider.js";
import Menu from "./mobile.js";

document.addEventListener("DOMContentLoaded", () => {
    sliders();
});

document.addEventListener("DOMContentLoaded", () => {
    const menu = new Menu({
        buttonSelector: '.header__bottom-mobile-btn',
        menuSelector: '.mobile__menu',
        closebutton: '.mobile__menu-Button',
        htmlElementSelector: 'html',
        animationDuration: 400,
        breakpoint: 769,

    })
});

document.addEventListener('DOMContentLoaded', () => {
    // Находим все кнопки меню
    const menuButtons = document.querySelectorAll('.mobile__nav-button');

    menuButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Предотвращаем стандартное поведение кнопки (если она внутри формы)
            e.preventDefault();

            // Получаем родительский элемент <li>
            const parentItem = this.parentElement;
            
            // Проверяем, открыт ли уже этот пункт
            const isActive = parentItem.classList.contains('active');

            // --- ОПЦИОНАЛЬНО: Закрываем все остальные пункты (Аккордеон) ---
            // Если хотите, чтобы открытыми могли быть несколько пунктов сразу - удалите этот блок
            document.querySelectorAll('.mobile__nav-item').forEach(item => {
                item.classList.remove('active');
            });
            // ---------------------------------------------------------------

            // Если пункт не был активен, мы его открываем (тогглим)
            if (!isActive) {
                parentItem.classList.add('active');
            }
        });
    });
});