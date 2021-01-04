const leftIcon = document.querySelector('.left-icon');
const rightIcon = document.querySelector('.right-icon');

const images = Array.from(document.querySelectorAll('img'));

let counter = 1;

images.forEach((item,index)=>{
        item.style.transform = `translateX(${(index-1)*100}%)`;
});

rightIcon.addEventListener('click',()=>{
    if(counter >= images.length - 1) return;
    counter++;
    images.forEach((item,index)=>{
        item.style.transform = `translateX(${(index-counter)*100}%)`;
        item.style.transition = `transform 2s ease-out`;
    });
});
leftIcon.addEventListener('click',()=>{
    if(counter <= 0) return;
    counter--;
    images.forEach((item,index)=>{
        item.style.transform = `translateX(${(index-counter)*100}%)`;
        item.style.transition = `transform 2s ease-out`;
    });
});
// images.forEach((item,index)=>{
//         item.addEventListener('transitionend',()=>{
//         console.log('Fired');
//         });
//     });
document.querySelector('.slide-container').addEventListener('transitionend',()=>{
    if(images[counter].id === 'lastClone'){
        counter = images.length - 2;           
        images[counter].style.transition = 'none';
        console.log(images[counter]);
        console.log(counter);
    }
    if(images[counter].id === 'firstClone'){
        counter = images.length - counter;           
        images[counter].style.transition = 'none';
        images[counter].style.zIndex = '100';
        console.log(images[counter]);
        console.log(counter);
    }
    images.forEach((item,index)=>{
        item.style.transform = `translateX(${(index-counter)*100}%)`;
        // item.style.transition = `transform 2s ease-out`;
    });
});



