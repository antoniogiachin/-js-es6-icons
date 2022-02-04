// function randomColor(){
//     return Math.floor(Math.random() * 16);
// }

let hex = [1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F'];

function randomColor(){

    let color ='';

    for(let i = 0; i < 6; i++){

        color += hex[Math.floor(Math.random() * 15)]


    }

    // console.log(color);
    return  '#' + color;
}

let random = randomColor();
console.log(random)