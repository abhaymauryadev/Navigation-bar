document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const hamburgerMenu = document.querySelector('.hamburger-menu');




    menuIcon.addEventListener('click', ()=>{
        hamburgerMenu.classList.toggle('active');
        // Rotate the menu icon when active
        menuIcon.querySelector('svg').style.transform = 
        hamburgerMenu.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0deg)';
});


    // Close menu when clicking outside
    document.addEventListener('click', (e)=>{
        if(!menuIcon.contains(e.target) && !hamburgerMenu.contains(e.target)){
            hamburgerMenu.classList.remove('active');
            menuIcon.querySelector('svg').style.transform = 'rotate(0)';
        }
    })
});