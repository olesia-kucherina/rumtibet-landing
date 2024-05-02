const toggleMenu = () => {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('menu_list_open')) {
        menu.classList.remove('menu_list_open');
        document.querySelector('.main').style.overflowY = 'auto';
        document.querySelector('.main').style.height = '100%';
    } else {
        menu.classList.add('menu_list_open');
        document.querySelector('.main').style.overflowY = 'hidden';
        document.querySelector('.main').style.height = '100vh';

    }
}

document.getElementById('button_menu').addEventListener('click', toggleMenu);
document.getElementById('button_close').addEventListener('click', toggleMenu);