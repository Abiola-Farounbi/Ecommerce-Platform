
// navbar on scrolling
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
          $(".navbarBackground").css("background" , "white");
        }
  
    
    })
  })
 

//   countdown

function makeTimer() {

    var endTime = new Date("21 August 2021");			
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<br>" + "<span class='textSize'>Days</span>");
    $("#hours").html(hours + "<br>" + "<span class='textSize'>Hours</span>");
    $("#minutes").html(minutes + "<br>"  + "<span  class='textSize'>Minutes</span>");
    $("#seconds").html(seconds + "<br>" + "<span  class='textSize'>Seconds</span>");		

}

setInterval(function() { makeTimer(); }, 1000);

// scroll to the top
var goHere = function() {

    $('.arrow-up').on('click', function(event){
        event.preventDefault();
        $("html").animate({
            scrollTop: $('.goto-here').offset().top
        }, 1000);
        
        return false;
    });
};
goHere();

// // add to cart alert
let alertCart = function(){
    $('.add-to-cart').on('click' , function(e){
        e.preventDefault();
        swal({
            title:'Item added to cart',
            position:'center',
            backdrop:'rgba(0,0,0,0.5)',
            background: " #82ae46  ",
            allowOutsideClick: true,
            allowEnterKey:true,
            closeOnEsc:true,
            showConfirmButton:false,
            showCancelButton:false,
            timer:2000
        });
    })
  
}

alertCart()


// removing items from cart
const removeItem = (e) => {
    e.parentElement.remove() 
    console.log(e.parentElement)
}


// login/sign up
document.querySelector('.loginForm').style.display='none';

document.querySelector('.loginShow').addEventListener('click', function(){
    document.querySelector('.loginForm').style.display='block';
    document.querySelector('.signUpForm').style.display='none';
})

// search for item
var search=document.querySelector('.searchCase');
search.addEventListener('keyup',filterProducts)

function filterProducts(e){
    const text = e.target.value.toLowerCase();
  
  const  collection= document.querySelectorAll('.featureShadow1');
  

   collection.forEach(function(profile){
        const item = profile.firstElementChild.nextElementSibling.firstChild.nextElementSibling.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
          profile.style.display = 'block';
        } else {
          profile.style.display = 'none';
        }
      });

    e.preventDefault();
}


