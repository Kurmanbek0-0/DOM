// DOM - document object model
// BOM - browser object model

// console.log(window);
// console.log(document);

// console.log(location.href);

// const prom = prompt('Hello World')
// console.log(prom);

// const box = document.getElementsByClassName('box')
// console.log(box);

// const desk = document.getElementById('desk')
// console.log(desk);

// const ss = document.querySelector('h1')
// ss.style.color = 'green'

// const desk = document.querySelector('#desk')
// console.log(desk);

// const box = document.querySelector('.box')
// console.log(box);

// const arr = document.querySelector('h1')
// arr.style.color = 'blue'
// arr.style.fontSize = '3rem'

// const list = document.querySelectorAll('ul li')
// list.forEach((el, idx) => {
//     if(idx === 2) {
//         el.style.fontSize = '3rem'
//         el.style.color = 'red'
//     }
// })

// document.body.style.background = 'aqua' 


// const show = document.querySelector('p')
// show.style.color = 'green'
// show.style.fontSize = '4rem'

// console.log(document.querySelector('link').getAttribute('rel'));



//////////////////////////hover/////////////////////////////////////

// events - события

// mouse events

// click 
// mouse over 
// mouse leave 


// keyboard events 

// keydown
// keyup


// input events

// value
// change



// const btn = document.querySelector('.btn')
// const box = document.querySelector('.box')
// btn.style.background = 'red'

// btn.addEventListener('click', () => {
//     box.style.background = 'red'
//     box.style.width = '50px'
//     box.style.height = '50px'
// })



// const boxes = document.querySelectorAll('.box')
// const colors = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];

// const names = ['Bekzat','Jumabai','Nursultan','Nurzamat','Nurshat','Baiel','Kurmanbek','Mentor']
// const fcolor = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];
// boxes.forEach(box => {
// const idx = Math.floor(Math.random() * colors.length)
// const we = Math.floor(Math.random()* names.length)
// const hero = Math.floor(Math.random() * fcolor.length)
//     box.addEventListener('click', () => {
//         boxes.forEach(el => {
//             el.style.background = ''
//             el.innerText = ''   
//         })
//         box.style.background = colors[idx]
//         box.innerText = names[we]
//         box.style.color = fcolor[hero]
//         box.style.fontSize = '2rem'
//     })
//     // box.addEventListener('mouseover', () => {
//     //     box.style.background = 'red'
//     // })
//     // box.addEventListener('mouseleave', () => {
//     //     box.style.background = 'green'
//     // })
// })