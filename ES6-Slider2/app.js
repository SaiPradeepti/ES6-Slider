let slideIndex = 0;


const showSlides = () => {
    const slides = document.querySelectorAll('.image-sliderfade');
    const dots = document.querySelectorAll('.dot');
    slides.forEach(item => {
        item.style.display = 'none';
    });

    slideIndex++;

    if(slideIndex > slides.length) slideIndex = 1;

    dots.forEach(item => {
        item.style.borderColor = '#ddd';
    })
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].style.borderColor = 'rgb(71, 71, 71)';

    setTimeout(showSlides, 5000);
}

showSlides();