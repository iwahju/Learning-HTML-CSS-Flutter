const numinput= document.getElementById('num-input');
const buttonInput = document.getElementById('button');
const cardbody = document.getElementById('card-body');


// buttonInput.addEventListener('click'), (event) => {
//     const num =numinput.value;

//     const 
//     console.log(num);
// }
// buttonInput.addEventListener('click', (event)=>{
//     const num = numinput.value;
//     const randNum= Math.floor(Math.random() *10) +1;

//     if (num == randNum) {
//        // document.getElementById('card-body').innerHTML = "false";
//         cardbody.append.document.getElementById('card-body').innerHTML = "false";
//     } else {
//         // document.getElementById('card-body').innerHTML = "Yay you got it right!";
//         cardbody.append.document.getElementById('card-body').innerHTML = "True";
//     }

// })


buttonInput.addEventListener('click', (event) =>{

    const newNum = numinput.value;
    const randNum= Math.floor(Math.random() *10) +1;
    if (newNum ==randNum) {
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = newNum;
        cardbody.append('yay, you got it right');



    } else {
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = newNum;
        cardbody.append('false, It is ',randNum);

    }

})


// const num = 9;
// const randNum= Math.floor(Math.random() *10) +1;

// if (num == randNum) {
//     console.log("true");


// } else {
//     console.log("false");
// }
// console.log(num,randNum);