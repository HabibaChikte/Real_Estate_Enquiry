document.getElementById('hamburger').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('overlay');
    
    navMenu.classList.toggle('show');
    overlay.style.display = navMenu.classList.contains('show') ? 'block' : 'none';
});

document.getElementById('overlay').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    
    navMenu.classList.remove('show');
    this.style.display = 'none';
});

document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        const navMenu = document.getElementById('nav-menu');
        const overlay = document.getElementById('overlay');
        
        navMenu.classList.remove('show');
        overlay.style.display = 'none';
    });
});

document.addEventListener('scroll', function() {
    const video = document.getElementById('background-video');
    const section = document.getElementById('about');
    const sectionPosition = section.getBoundingClientRect();

    if (sectionPosition.top < window.innerHeight && sectionPosition.bottom >= 0) {
        video.play();
    } else {
        video.pause();
    }
});
