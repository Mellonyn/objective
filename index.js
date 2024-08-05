// const obj = {
//     brand: "Марка - Astion Martin",
//     model: "Модель - Vantage",
//     year: "Год - 2023",
//     speed: 200,
// }
//     document.getElementById('brand').innerHTML = obj.brand
//     document.getElementById('model').innerHTML = obj.model
//     document.getElementById('year').innerHTML  = obj.year

//     document.getElementById('s4et').addEventListener('click',() =>{
//        let full_result = document.getElementById('inpt').value / obj.speed
//         let lazymode = Math.floor(full_result/5)
//         document.getElementById('result').innerHTML = lazymode+full_result + ' часа'
//     })

///////////////////////////////////////////////////////2


// const obj2 = {
//     firstnum : 2,
//     secondnum : 4,
// }
// document.getElementById('first').innerHTML = obj2.firstnum
// document.getElementById('second').innerHTML = obj2.secondnum
// document.getElementById('plus').innerHTML = '+'
// document.getElementById('plus').addEventListener('click',() =>{
//     document.getElementById('plus').innerHTML = obj2.firstnum+obj2.secondnum
//     document.getElementById('minus').innerHTML = '-'
//     document.getElementById('x').innerHTML = '*'
//     document.getElementById('/').innerHTML = '/'
//     document.getElementById('Sokrowenie').innerHTML = 'Sokrowenie'
// })
// document.getElementById('minus').innerHTML = '-'
// document.getElementById('minus').addEventListener('click',() =>{
//     document.getElementById('minus').innerHTML = obj2.firstnum-obj2.secondnum
//     document.getElementById('plus').innerHTML = '+'
//     document.getElementById('x').innerHTML = '*'
//     document.getElementById('/').innerHTML = '/'
//     document.getElementById('Sokrowenie').innerHTML = 'Sokrowenie'
// })
// document.getElementById('x').innerHTML = '*'
// document.getElementById('x').addEventListener('click',() =>{
//     document.getElementById('x').innerHTML = obj2.firstnum*obj2.secondnum
//     document.getElementById('plus').innerHTML = '+'
//     document.getElementById('minus').innerHTML = '-'
//     document.getElementById('/').innerHTML = '/'
//     document.getElementById('Sokrowenie').innerHTML = 'Sokrowenie'
// })
// document.getElementById('/').innerHTML = '*'
// document.getElementById('/').addEventListener('click',() =>{
//     document.getElementById('/').innerHTML = obj2.firstnum/obj2.secondnum
//     document.getElementById('plus').innerHTML = '+'
//     document.getElementById('minus').innerHTML = '-'
//     document.getElementById('x').innerHTML = '*'
//     document.getElementById('Sokrowenie').innerHTML = 'Sokrowenie'
// })
// document.getElementById('Sokrowenie').innerHTML = 'Sokrowenie'
// document.getElementById('Sokrowenie').addEventListener('click',() =>{
//     document.getElementById('Sokrowenie').innerHTML = obj2.firstnum/2 +' / '+ obj2.secondnum/2
//     document.getElementById('plus').innerHTML = '+'
//     document.getElementById('minus').innerHTML = '-'
//     document.getElementById('x').innerHTML = '*'
//     document.getElementById('/').innerHTML = '/'
// })



// const obj2 = {
//     firstnum: 2,
//     secondnum: 4,
// };
// document.getElementById('first').innerHTML = obj2.firstnum
// document.getElementById('second').innerHTML = obj2.secondnum
// const operations = [
//     { id: 'plus', symbol: '+', action: () => obj2.firstnum + obj2.secondnum },
//     { id: 'minus', symbol: '-', action: () => obj2.firstnum - obj2.secondnum },
//     { id: 'x', symbol: '*', action: () => obj2.firstnum * obj2.secondnum },
//     { id: '/', symbol: '/', action: () => obj2.firstnum / obj2.secondnum },
//     { id: 'Sokrowenie', symbol: 'Sokrowenie', action: () => obj2.firstnum / 2 + ' / ' + obj2.secondnum / 2 }
// ];

// operations.forEach(({ id, symbol, action }) => {
//     document.getElementById(id).innerHTML = symbol;
//     document.getElementById(id).addEventListener('click', () => {
//         document.getElementById(id).innerHTML = action();
//         resetButtons(id);
//     });
// });

// function resetButtons(excludeid) {
//     operations.forEach(({ id, symbol }) => {
//         if (id !== excludeid) {
//             document.getElementById(id).innerHTML = symbol;
//         }
//     });
// }

// const clockobj = {
//     hour : 23,
//     minute : 59,
//     sec : 11,
//     hp : 0,
//     mp : 0,
//     sp : 0,
// }
// document.getElementById('hour').innerHTML = clockobj.hour
// document.getElementById('min').innerHTML = clockobj.minute
// document.getElementById('sec').innerHTML = clockobj.sec
// const hourplus = (plus) => {
//     clockobj.hour += clockobj.hp
//     if(clockobj.hour > 24){
//         clockobj.hour = clockobj.hour % 24;
//     }
//     document.getElementById('hour').innerHTML = clockobj.hour;
//     return clockobj.hour;
    
// }
// document.getElementById('hour1').addEventListener('click', (event) => {
    
//     const hpInput = document.getElementById('ho');
//     clockobj.hp = parseInt(hpInput.value, 10) || 0;
    
//     hourplus();
// });

// const minplus = (plus) => {
//     clockobj.minute += clockobj.mp
//     const additionalHours = Math.floor(clockobj.minute / 60);
//         clockobj.hour += additionalHours;
//     if(clockobj.minute > 60)
//         clockobj.minute = clockobj.minute % 60
//     if(clockobj.hour > 24){
//         clockobj.hour = clockobj.hour % 24;
//     }
//     document.getElementById('min').innerHTML = clockobj.minute;
//     document.getElementById('hour').innerHTML = clockobj.hour
//     return clockobj.minute
// }
// document.getElementById('min1').addEventListener('click', (event) => {

//     const minInput = document.getElementById('mi')
//     clockobj.mp = parseInt(minInput.value, 10) || 0;
//     minplus();
// });

// const secplus = (plus) => {
//     clockobj.sec += clockobj.sp
//     const additionalMinute = Math.floor(clockobj.sec / 60);
//         clockobj.minute += additionalMinute;
//         if(clockobj.sec > 60){
//             clockobj.sec = clockobj.sec % 60
//         }
//         if(clockobj.minute >= 60){
//             clockobj.minute = clockobj.minute % 60
//             clockobj.hour +=1
//         }
//         if(clockobj.hour > 24){
//             clockobj.hour = clockobj.hour % 24;
//         }
//         document.getElementById('sec').innerHTML = clockobj.sec;
//         document.getElementById('min').innerHTML = clockobj.minute;
//         document.getElementById('hour').innerHTML = clockobj.hour 
//         return clockobj.sec
// }
// document.getElementById('sec1').addEventListener('click', (event) => {

//     const secInput = document.getElementById('se')
//     clockobj.sp = parseInt(secInput.value, 10) || 0;
//     secplus();
// });