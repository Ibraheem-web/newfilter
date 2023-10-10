const menuBtn = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const typeBtn = document.getElementById('type-button')
const typeMenu = document.getElementById('type-menu');
const subBtn = document.getElementById('sub-type-button');
const subMenu = document.getElementById('sub-type-menu');
const openFilter = document.getElementById('open-filter');
const closeFilter = document.getElementById('close-filter');
const filter = document.getElementById('filter');
const clearAll = document.getElementById('clearAll');
const checkBox = document.querySelectorAll('input[type="checkbox"]')


openFilter.addEventListener('click', () => {
    filter.classList.remove('hidden');
    closeFilter.classList.remove('hidden');
    openFilter.classList.add('hidden');
    filter.style.top = '30px';
});

closeFilter.addEventListener('click', () => {
    filter.classList.add('hidden');
    closeFilter.classList.add('hidden');
    openFilter.classList.remove('hidden');
    filter.style.top = '-1000%'
});

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

document.addEventListener('click', (even) => {
    if (!menu.contains(even.target) && !menuBtn.contains(even.target)) {
        menu.classList.add('hidden');
    }
});

menu.addEventListener('click', (eve) => {
    eve.stopPropagation();
});

typeBtn.addEventListener('click', () => {
    typeMenu.classList.toggle('hidden')
});

document.addEventListener('click', (move) => {
    if (!typeBtn.contains(move.target) && !typeMenu.contains(move.target)){
        typeMenu.classList.add('hidden')
    }
});

typeBtn.addEventListener('click', (mover) => {
    mover.stopPropagation();
});

subBtn.addEventListener('click', () => {
    subMenu.classList.toggle('hidden');
});

document.addEventListener('click', (room) => {
    if (!subBtn.contains(room.target) && !subMenu.contains(room.target)){
        subMenu.classList.add('hidden')
    };
});

subBtn.addEventListener('click', (gum) => {
    gum.stopPropagation();
});

clearAll.addEventListener('click', () => {
    checkBox.forEach(checkboxs => {
        checkboxs.checked = false;
    })
});