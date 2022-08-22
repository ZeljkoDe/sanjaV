const hamb = document.querySelector('.hambuerger');
const navItems = document.querySelector('.main-nav ul');

hamb.addEventListener('click', function () {
    this.classList.toggle('active');
});
