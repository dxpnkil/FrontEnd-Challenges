let bt = document.querySelectorAll('.bt button');
let ty = document.querySelector('.thankyou-state');
let active = document.querySelector('.active-states');
let span = document.querySelector('span');

Array.from(bt).forEach( btn =>{
    btn.addEventListener('click', e => {
        const rating = e.target.textContent;
        span.textContent = rating;
        active.classList.add('hide');
        ty.classList.remove('hide');
    })
})