// elements
let clear = document.querySelector(".clr"), numtext = document.querySelector(".num") , num_btns = document.querySelectorAll(".nums") 
, num = +numtext.textContent



// functions 

function clr (){
    numtext.textContent = ''
}
clear.addEventListener('click' , () => {
    clr()
})

num_btns.forEach((item) => item.addEventListener('click' , () => {
    console.log(num);
    numtext.textContent = numtext.textContent + item.textContent 
}))



