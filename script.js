const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;


document.addEventListener("DOMContentLoaded",initailizeSlider);
function initailizeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide,5000);
    }
    }

function showSlide(index){
    
    if(index>= slides.length){
        slideIndex=0;

    }
    else if(index<0){
        slideIndex=slides.length-1;
        
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

}
function prevSlide(){ 
    slideIndex--;
    showSlide(slideIndex);



}
function nextSlide(){

    slideIndex++;
    showSlide(slideIndex);
}




function showbar(){
    const dark_mode= document.querySelector('.dark_mode');
    dark_mode.style.display='flex';

}

function hidebar(){
    const dark_mode=document.querySelector('.dark_mode');
    dark_mode.style.display='none';
}


function myFunction() {
    var ul,li,input,filter,i,a,textvalue;
    input=document.getElementById("myinput");
    filter=input.value.toUpperCase(); 
    ul=document.getElementById("myul");
    li=ul.getElementsByTagName("li");   

    for(i=0;i<li.length;i++){      
         a=li[i].getElementsByTagName("a")[0];
         textvalue=a.textContent || a.innerText;
         if(textvalue.toUpperCase().indexOf(filter)>-1){
            li[i].style.display='';

         }
         else{
            li[i].style.display='none';
         }

    }
    
  }

function dark(){ 
    document.body.style.backgroundColor="black";
    const nav_item=document.getElementsByClassName("nav_item");

    for(let navbar_item of nav_item ){
        navbar_item.style.color="white";
    }

    

} 

// function light(){
//     document.body.style.backgroundColor="white";
//     const nav_item1=document.getElementById("nav_item1");
//     const nav_item2=document.getElementById("nav_item2");

//     nav_item1.style.color="black"; 
//     nav_item2.style.color="black";                                                     ²²²²²²²²²²²²²²²²²²²²²²"; 

// }  

const allmovie=document.querySelector('.allmovie');
const prev=document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click',function(){
    allmovie.scrollBy({left:200, behavior:"smooth"});


});


prev.addEventListener('click',function(){
    allmovie.scrollBy({left:-200, behavior:"smooth"});


});



let darkmode = localStorage.getItem('darkmode');
const switche=document.getElementById("switch");


const darkmode_on =() =>{
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode','active')
  
}


const darkmode_off = () =>{
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode',null)
  
}

 if(darkmode === "active") darkmode_on()


switche.addEventListener("click",()=>{
darkmode = localStorage.getItem('darkmode');

  if(darkmode!=="active"){
     darkmode_on()
  }else{
     darkmode_off()
  }

});


function yellow1(){
    const star1 = document.getElementById("star1");

    star1.setAttribute("fill","yellow");
}

function yellow2(){
    const star2 = document.getElementById("star2");

    star2.setAttribute("fill","yellow");
}

function yellow3(){
    const star3 = document.getElementById("star3");

    star3.setAttribute("fill","yellow");
}

function yellow4(){
    const star4 = document.getElementById("star4");

    star4.setAttribute("fill","yellow");
}

function yellow5(){
    const star5= document.getElementById("star5");

    star5.setAttribute("fill","yellow");
}


function add_like(){
    
const nbr=document.getElementById("quantity");
let quantity=parseInt(nbr.textContent);
if(quantity==0){
    quantity++;
}
else{
    quantity--;
}
nbr.textContent=quantity;

}


