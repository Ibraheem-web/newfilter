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
        const windowWidth = window.innerWidth;
        if (windowWidth < 768) {
            if (filter.style.display === 'none') {
                filter.style.display = 'block';
                filter.style.top = '120px';
                filter.style.left = '0';
            } else {
                filter.style.display = 'none';
                filter.style.top = '120px';
                filter.style.left = '-100%';
            }
        } else {
            if (filter.style.display === 'none') {
                filter.style.display = 'block';
                filter.style.top = '80px';
                filter.style.left = '0';
            } else {
                filter.style.display = 'none';
                filter.style.top = '-100%';
                filter.style.left = '0';
            }
        }
    });
});