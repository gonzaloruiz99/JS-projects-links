
const gallery = [
    {
        "id":"n1",
        "type": "thumbnail",
        "img": "./images/image-product-1.jpg",
        "imgThumbnail": "./images/image-product-1-thumbnail.jpg",
    },
    {
        "id":"n2",
        "type": "thumbnail",
        "img": "./images/image-product-2.jpg",
        "imgThumbnail": "./images/image-product-2-thumbnail.jpg",
    },
    {
        "id":"n3",
        "type": "thumbnail",
        "img": "./images/image-product-3.jpg",
        "imgThumbnail": "./images/image-product-3-thumbnail.jpg",
    },
    {
        "id":"n4",
        "type": "thumbnail",
        "img": "./images/image-product-4.jpg",
        "imgThumbnail": "./images/image-product-4-thumbnail.jpg",
    }
]


//const container = document.querySelector('.gallery');
const thumbnails = document.querySelectorAll(".thumbnail-img");
const mainImage = document.getElementById("mainImg");

const input = document.getElementById("enter");
const btns = document.querySelectorAll(".btn");
let count = 0;

const cartCounter = document.querySelector(".cart-num");


const quanity = document.querySelector(".quantity");




/* --------------- NAV TOGGLE---------------*/


const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});



/* --------------- FORM COUNTER ---------------*/


const handleSubmit = (event) =>{
    event.preventDefault();

    if(count >= 1){
        cartCounter.style.visibility = "visible";
        cartCounter.textContent = count;
    }
}
const handleChange = (value) =>{
    
    if (isNaN(value)) 
    {
        alert("Must input numbers");
        return false;
    }
    else if(value > 20){
        count = 20;
        return
    }
    else{
        count = value;
    }
}

btns.forEach( function (btn){
    btn.addEventListener("click",function(e){
        const sign = e.currentTarget.classList;

        if (sign.contains("plus")){
            console.log("plus button");
            count++;
        }
        else if (sign.contains("minus") && count>0 ){
            console.log("minus button");
            count--;
        }
        input.value = count; 

    })
})
/* --------------- FORM COUNTER end ---------------*/



/*
//load items
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(gallery);

  });


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `
        <ul>
            <li><img id="${item.id}" class="thumbnail-img" src="${item.imgThumbnail}" alt=""></li>
        </ul>
        
        `
    }).join("");
    container.innerHTML = displayMenu;
}
*/




/*
Armar un ForEach + querySelectorAll que recorra cada una de las imagenes thumbnail, y si 
se clickea una:
1. Se togglee la clase SOLO de esa imagen, para agregarle bordes y trasparencia
2. Cambiar la imagen principal
*/



/* --------------- images GALLERY ---------------*/


thumbnails.forEach(function(indiv){
    indiv.addEventListener('click',function(e){

        thumbnails.forEach(function(item){
            if (item !== indiv) {
                item.classList.remove("selected");
            } 
        });
        indiv.classList.toggle("selected");
        
        
        gallery.map((item)=>{ // sets image with same ID as clicked
            if(item.id === e.currentTarget.id){
                mainImage.src = item.img
            }
        })
        
    });
});







const overlay = document.querySelector(".modal-overlay"); 
const close_btn = document.querySelector(".close-btn");



mainImage.addEventListener('click',function(){
    //console.log(overlay.classList);
    overlay.classList.add("open-modal");

    document.addEventListener("keyup",function(e){
        if (e.key === "Escape") { // escape key maps to keycode `27`
            overlay.classList.remove("open-modal");
        }
    })
});

close_btn.addEventListener('click',function(){
    overlay.classList.remove("open-modal");
});

/* --------------- images GALLERY ---------------*/

