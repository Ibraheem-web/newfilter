document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    const typeBtn = document.getElementById('type-button')
    const typeMenu = document.getElementById('type-menu');
    const subBtn = document.getElementById('sub-type-button');
    const subMenu = document.getElementById('sub-type-menu');
    const clearAll = document.getElementById('clearAll');
    const checkBox = document.querySelectorAll('input[type="checkbox"]');
    const filterHeading = document.getElementById('filter-heading');
    const filter = document.getElementById('filter-dropdown');
    const moreFilter = document.getElementById('more-filter');
    const filterOptions = document.getElementById('filter-options');


    // SORT FUNCTIONALITY

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

    // TYPE FUNCTIONALITY

    typeBtn.addEventListener('click', () => {
        typeMenu.classList.toggle('hidden')
    });

    document.addEventListener('click', (move) => {
        if (!typeBtn.contains(move.target) && !typeMenu.contains(move.target)) {
            typeMenu.classList.add('hidden')
        }
    });

    typeBtn.addEventListener('click', (mover) => {
        mover.stopPropagation();
    });

    // SUBTYPE FUNCTIONALITY

    subBtn.addEventListener('click', () => {
        subMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (room) => {
        if (!subBtn.contains(room.target) && !subMenu.contains(room.target)) {
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

     // FILTER FUNCTIONALITY

    filterHeading.addEventListener('click', () => {
        filter.classList.toggle('hidden');
    });

    // MORE FILTER 

    moreFilter.addEventListener('click', () => {
        filterOptions.classList.toggle('hidden');
    })
});