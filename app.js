const leftIcon = document.querySelector('.left-icon');
const rightIcon = document.querySelector('.right-icon');

const images = Array.from(document.querySelectorAll('img'));
let activeIndex = 1;
// images[0].className = 'last';
images[0].className = 'active';
images[1].className = 'next';
images[2].className = 'next';
images[3].className = 'next';

rightIcon.addEventListener('click',(e) => {
    if(activeIndex === images.length){
        activeIndex = 0;
    }
    console.log(activeIndex);
    images.forEach((item,index)=>{
        if(index === activeIndex){
            item.className = 'active'
        }
        if(index > activeIndex){
            item.className = 'next'
        }
        if(index > activeIndex + 1){
            // item.className = 'next'
        }        
    });
    activeIndex += 1;
    // images[1].className = 'last';
    // images[2].className = 'active';
    // images[3].className = 'next';
});

images.forEach((item,index) => {
    
});
