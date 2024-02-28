const doStuff = function(e) {
    const target=e.target.closest('div');
    const activeEl = document.querySelectorAll('.active');
    activeEl.forEach((element) => element.classList.remove('active'));

    if (target.classList.contains('sort') ||
        target.classList.contains('filters') ||
        target.classList.contains('categories')){
            target.classList.toggle('active');
    }

    activeEl.forEach((element) => element.classList.remove('active'));
   
}


document.addEventListener('click', doStuff )