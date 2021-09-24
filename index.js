// const Status = document.querySelector('.status');
// const object = document.querySelector('.object');
// const photos = document.querySelectorAll('.photo')
// const ObjectName = [
//     {
//         id: 1,
//         name: 'Tea'
//     },
//     {
//         id: 2,
//         name: 'Stool'
//     },
//     {
//         id: 3,
//         name: 'Cactus'
//     },
//     {
//         id: 4,
//         name:' Rose'
//     }
// ]

// const ObjectLength = ObjectName.length

// // window.addEventListener('load', () => {
// setTimeout(() => {
//     Status.innerHTML = `Status: Object Detected`

//     setTimeout(() => {
//         for (var i = 0; i < ObjectLength; i++) {
//             console.log(ObjectName[i]);
//             //Do something
//         }
//         object.innerHTML = `Object: ${ObjectName[0].name}`
      
//         object.style.opacity = `1`
//         object.style.transform = `translateY(0)`
//     }, 300);
// }, 900);
// // })

// function change() {
//     Status.innerHTML = `Status: Detecting`
//     object.style.opacity = `0`
//     object.style.transform = `translateY(10px)`
//     object.innerHTML = `Object: ${ObjectName[1].name}`

//     setTimeout(() => {
//         Status.innerHTML = `Status: Object Detected`
    
//         setTimeout(() => {
//             object.style.opacity = `1`
//             object.style.transform = `translateY(0)`
//         }, 300);
//     }, 900);
//     // for (var i = 0; i < photos.length; i++) {
//         photos[0].style = `
//             opacity: 0;
//             transform: translateX(-100px);
//         `
//         //Do something
//     // }
// }
const tl = gsap.timeline()
tl.from('.phone', {
    translateY: '30px',
    opacity: 0
})