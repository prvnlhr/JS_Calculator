

let allBtns = document.querySelectorAll("button");
let screenShow = document.getElementById("screen");

let allBtneffect = [...allBtns];



function solve() {

    let x = screenShow.value;
    let y = eval(x);
    screenShow.value = y;    
}

function clrLast() {

    var s = screenShow.value;
    screenShow.value = s.substr(0 , s.length-1);


}

function show(val) {


    screenShow.value+=val;
}

function clr() {
    screenShow.value = "";
}


allBtneffect.forEach((button, i)=> {
    button.addEventListener('click', ()=> {
       let element = allBtns[i];
       element.style.boxShadow ='inset -6px -6px 16px 0 rgba(255, 255, 255, .5), inset 6px 6px 16px 0 rgba(209, 205, 199, .5)';

       setTimeout(function(){
        element.style.boxShadow = " 6px 6px 16px 0 rgba(209, 205, 199, .5),-6px -6px 16px 0 rgba(255, 255, 255, .5)"
       }, 300);

    })

})