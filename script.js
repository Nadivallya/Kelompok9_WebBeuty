function scrollToReview(reviewId) {
    const reviewElement = document.getElementById(reviewId);
    if (reviewElement) {
        reviewElement.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.getElementById('toggler');
    const navbar = document.querySelector('.navbar');

    
    toggler.addEventListener('change', function () {
        navbar.style.display = toggler.checked ? 'block' : 'none';
    });

    
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth < 768) {  // hanya tutup saat layar kecil
                toggler.checked = false;
                navbar.style.display = 'none';
            }
        });
    });

    
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            navbar.style.display = 'flex'; // tampilkan navbar di layar besar
            toggler.checked = false; // reset toggler agar tidak tercentang
        } else {
            navbar.style.display = toggler.checked ? 'block' : 'none'; // tampilkan sesuai toggler di layar kecil
        }
    });
});


