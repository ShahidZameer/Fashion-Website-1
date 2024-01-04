let btn = document.querySelectorAll(".fa-bars")
// let btn2 = document.querySelector(".bar") 
let menu = document.getElementById("menu-1")
let menuCloth = document.querySelector(".men-cloth")
check = 0
btn.forEach((e)=>{
        e.addEventListener('click',function(){
            if(check == 0){
                menu.style.transform = "translate(-0px)"
                check = 1
            }else{
                check = 0
                menu.style.transform = "translate(-300px)"

            }
        }
        )
    }
    )
let hideInput = document.querySelector('.fa-magnifying-glass')
let input = document.getElementById('search-input')
show = 0
hideInput.addEventListener('click',function(){  
    if(show == 0){
        input.style.display = "inline-block"
        show = 1
    }else{
        show = 0
        input.style.display = "none"
    }
}
)
// shopping profiles  Values
const Shopping = [
    {src:"/static/shopping1.jpg",title:"Seawtshirts",price:"$99-",discount:"$129"},
    {src:"/static/shopping9.jpg",title:"Puffer bomber Jacket",price:"$40-",discount:"$80"},
    {src:"/static/shopping4.jpg",title:"Deniem Jacket",price:"$40-",discount:"$80"},
    {src:"/static/shopping5.jpg",title:"Medium t shirt",price:"$40-",discount:"$80"},
    {src:"/static/shopping6.jpg",title:"Hoodi Caper Ziper",price:"$99-",discount:"$129"},
    {src:"/static/shopping8.jpg",title:"Basic T shirt",price:"$40-",discount:"$80"},
    {src:"/static/shopping7.jpg",title:"Men Gray Hoodie",price:"$40-",discount:"$80"},
    {src:"/static/shopping2.jpg",title:"Realx T shirt",price:"$40-",discount:"$80"}
];
// shopping container function
var clutter = ""
Shopping.forEach(function(e,index){
    clutter += `<div class="box">
    <div class="button-sale">
        <a id="sale" href="#">Sale</a>
    </div> 
    <img src="${e.src}"alt="">
        <div class="flex">
            <h3>${e.title}</h3>
            <img id="heart-img"src="/static/heart.png">
        </div>
        <p>${e.price}<a>$129</a></p>
        </div> `
})
document.querySelector(".shopping-container").innerHTML = clutter;
// collection Script 
let colbtn = document.querySelector("#men-h3")
let collection = document.getElementsByClassName("collection")
list = 0 
colbtn.addEventListener("click",function(){ 
    if(list == 0){
        collection[0].style.display = "block"
        list = 1
    }else{
        list = 0
        collection[0].style.display = "none"

    }

})
// document.getElementById('heart') == setTimeout(() => {
//       blackHeart.style.display = "none"
//       heart.style.display = "block"
//       console.log("check2")
// },5000);
let heartBtn = document.querySelectorAll('#heart-img')
let cart = document.getElementsByClassName('fa-cart-shopping')
heart = 0
heartBtn.forEach((e)=>{
    e.addEventListener('click',function(){
        if(heart == 0){
            e.style.filter = "invert(0)"
            cart[0].style.transform = "scale(2)" 
            console.log(cart[0])
            heart = 1   
        }else{
            heart = 0 
            e.style.filter = "brightness(0)"
        }
        setTimeout(() => {
            cart[0].style.transform = "scale(1)"  
        },1000);      
    })
}) 