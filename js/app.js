// Select Elements
var sliderImages=Array.from(document.querySelectorAll('.slider-container img'));
let prevButton =document.querySelector('#prev');
let nextButton =document.querySelector('#next');
let indicators=document.querySelector('#indicators')

// count the number of images
let slidesNum= sliderImages.length;
let currentSlide=1;

// Actions for click buttons
prevButton.onclick=function(){
    prev()
}
nextButton.onclick=function(){
    next()
}

// create the indicators bullets
let listInd=document.createElement('ul');
listInd.setAttribute('id' ,'indic-ul');
// create li indicatorso
for(let i=1 ;i<=slidesNum ;i++){
let elementInd= document.createElement('li');
// add data-index to li
elementInd.setAttribute('data-index',i);
// add text to li 
// elementInd.appendChild(document.createTextNode(i));

listInd.appendChild(elementInd)

}
indicators.appendChild(listInd);
// get the Ul
var indicatorsUl=document.getElementById('indic-ul');

// make ul Array to use forEach function
var sliderbullets=Array.from(document.querySelectorAll('#indic-ul li'));
 // loop for bullets
       for(let j=0 ;j<sliderbullets.length;j++){
        sliderbullets[j].onclick=function(){
            currentSlide = parseInt(this.getAttribute('data-index'));
            // use the parsInt to change string value to number
            cheakActive();
        }
    }
    cheakActive();
  // prev and next buttons functions
  function next(){
    if(nextButton.classList.contains('next-disabeld')){
        return false;
    }else{
        currentSlide++;
        cheakActive()
    }
};
  function prev(){
    if(prevButton.classList.contains('prev-disabeld')){
        return false;
    }else{
        currentSlide--;
        cheakActive()
    }
 };
 

 // Cheaker Active function 
function cheakActive(){
    removeActive();
    
    
// add active class to the current img
    sliderImages[currentSlide-1].classList.add('active');
    // add active class to current li by ul
    indicatorsUl.children[currentSlide-1].classList.add('active');
 
    
}

// Remove Active function 
function removeActive(){
   sliderImages.forEach(function(img){
img.classList.remove('active')
   }) ;
//    remove active from bullets

sliderbullets.forEach(function(li){
    li.classList.remove('active')
       }) ;
       cheakDisabled();
}

// Function Cheak Disabled
function cheakDisabled(){
    // check if the cuttent slide is the first
    if(currentSlide==1){
        prevButton.classList.add('prev-disabeld')
    }
    else {
        prevButton.classList.remove('prev-disabeld')
    }
    // check if the cuttent slide is the last

    if(currentSlide==slidesNum){
        nextButton.classList.add('prev-disabeld')
    }
    else {
        nextButton.classList.remove('prev-disabeld')
    }

    }
  
 
 



