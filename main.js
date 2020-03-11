// console.log(window.innerHeight); // дістаємо всю висоту екрану 
// console.log(window.innerWidth);// дістаємо всю ширину екрану крім скролу 


// console.log(document.documentElement.scrollHeight);
// console.log(document.documentElement.scrollWidth);


// console.log(document.documentElement.clientHeight);
// console.log(document.documentElement.clientWidth);



//вираховуємо максимально точну висоту 
// let scrollHeight = Math.max(
//     document.body.scrollHeight,
//     document.documentElement.scrollHeight,
//     document.body.offsetHeight,
//     document.documentElement.offsetHeight,
//     document.body.clientHeight,
//     document.documentElement.clientHeight);

// console.log(scrollHeight);



 
// document.getElementById('scroll').addEventListener('click', function() {
// //     // window.scroll(0, 3500); // приймає два параметри по х і y
// //     // window.scrollTo(0, 2300);
// //     // window.scrollBy(0, 2300); // відмінність що він скролить від конкретної позиції де знаходиться користувач 
//         // this.scrollIntoView() // по дефолту значення true кине на саму гору 


// });



// document.querySelector('.box').addEventListener('scroll', function(event) {
//     console.log(event.target.scrollHeight); // показує висоту scroll
//     console.log(event.target.scrollTop);
//     let animation = document.querySelector('.animation-box') 
//     if(event.target.scrollTop >= event.target.scrollHeight / 2) {
//         if(animation.className == 'animation-box hide') {
//             animation.classList.remove('hide')
//         }
//         animation.classList.add('show')
//         event.target.style.backgroundColor = 'yellow';
//     } else {
//         event.target.style.backgroundColor ='';
//         if(animation.className == 'animation-box show') {
//             animation.classList.remove('show')
//         }
//         animation.classList.add('hide')
//     }
// });





// window.addEventListener('resize', function(event) {
//     console.log(event);
// })




// змінюється вага тексту 
let ss = document.getElementById('checkbox').addEventListener('click', function() {
    if(this.checked) {
        document.querySelector('h1').style.fontWeight = 'bold';
    } else {
        document.querySelector('h1').style.fontWeight = 'normal';

    }
})

