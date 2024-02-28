const doStuff = function(e) {
    const target=e.target.closest('div');
    const activeEl = document.querySelectorAll('.active');
    const activeMenuEl = document.querySelectorAll('.active-menu');
    activeEl.forEach((element) => element.classList.remove('active'));
    activeMenuEl.forEach((element) => element.classList.remove('active-menu'));

    if (target.classList.contains('sort') ||
        target.classList.contains('filters') ||
        target.classList.contains('categories')){
            target.classList.toggle('active');
    }

    if(target.classList.contains('sort')){
        const firstBox = document.getElementById('1');
        firstBox.classList.toggle('active-menu');
    }

    if(target.classList.contains('filters')){
        const secondBox = document.getElementById('2');
        secondBox.classList.toggle('active-menu');
    }

    if(target.classList.contains('categories')){
        const thirdBox = document.getElementById('3');
        thirdBox.classList.toggle('active-menu');
    }


    activeEl.forEach((element) => element.classList.remove('active'));
    activeMenuEl.forEach((element) => element.classList.remove('active-menu'));

   
}


document.addEventListener('click', doStuff )