let slideIndex = 0;

const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

function showSlide(index){

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    if(index >= slides.length){
        slideIndex = 0;
    }

    if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function previousSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

if(document.querySelector(".next")){

    document.querySelector(".next").addEventListener("click", function(){

        slideIndex++;
        showSlide(slideIndex);

    });

    document.querySelector(".prev").addEventListener("click", function(){

        slideIndex--;
        showSlide(slideIndex);

    });

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",function(){

            slideIndex=index;

            showSlide(slideIndex);

        });

    });

    setInterval(function(){

        slideIndex++;

        showSlide(slideIndex);

    },5000);

    showSlide(slideIndex);

}