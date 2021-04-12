const btn = document.querySelector('.burger');
const menu = document.querySelector('.liste-nav');
const allLinks = document.querySelectorAll('.item-nav');

btn.addEventListener('click', function(){
    btn.classList.toggle('active');
    menu.classList.toggle('active');
})

allLinks.forEach(function(item) {
    item.addEventListener('click', function() {
        menu.classList.remove('active');
        btn.classList.remove('active');
    })
})