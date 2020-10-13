
// export const data = {
//     a: 5
// };

export const catalog = () => {
    const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const btnClose = document.querySelector('.btn-close');
const btnReturn = document.querySelector('.btn-return');//кнопка закрытия подменю

const subCatalog = document.querySelector('.subcatalog');
const subCatalogHeader = document.querySelector('.subcatalog-header');

//добавляем div с классом overlay
const overLay = document.createElement('div');
overLay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overLay);


//ф-я добавления И удаления класса с меню
const openMenu = () => {
    catalog.classList.add('open');
    overLay.classList.add('active');//блок затемненеия стр
    // console.log();
};
const closeMenu = () => {
    catalog.classList.remove('open');
    overLay.classList.remove('active');//блок затемненеия стр
    closeSubMenu();//при закрытии меню закрытие и подменю
};
//подменю
const openSubMenu = event => {
    //запет действия браузера
    event.preventDefault();
    //определяем куда кликаем (куда нужно кликнуть)
    const itemList = event.target.closest('.catalog-list__item');
    // и открываем меню 
    if (itemList) {
        //получаем заголовок и записываем в подменю
        subCatalogHeader.innerHTML = itemList.innerHTML;
        //открываем
        subCatalog.classList.add('subopen');
    };
};
//ф-я закрытия подменю
const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
    
}

// клик по меню запуск функции
btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overLay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);

// закрытие меню при нажатие на ESC
document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        closeMenu();
    };
});
};

