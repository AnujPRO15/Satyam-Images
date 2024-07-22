'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  
  
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

// const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    // header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    // header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);










// function sendwhatsapt(){



//     var phonenumber="+919560511728";

//    var name= document.getElementById("name").value;
//     var destinat=document.getElementById("destinat").value;
//    var subject =document.getElementById("subject").value;
//     var phone=document.getElementById("Phone").value;
//     var person=document.getElementById("person").value;

// if(name==""){
//     alert("Enter your name first")
// }
// else if(destinat==""){
//     alert("Enter your  destination first")
// }

// else if(subject==""){
//     alert("Enter Details first")
// }

// else if(phone==""){
//     alert("Enter your phone number first")
// }
// else if(person==""){
//     alert("Enter your person number first")
// }

// else{
   

//     var url="https://wa.me/" + phonenumber + "?text="+
    
//     "Book my cab %0a%0aName: "+ name+
//     "%0aDestination: "+ destinat+
//     "%0aDetails: "+subject+
//     "%0aPhone:"+phone

  
//     window.open(url,'_blank').focus();











// }   
  
// }




function Java(){


  var phonenumber="+919839535203";
  
  var clientname= document.getElementById("clientname").value;

  var venue= document.getElementById("venue").value;

  var phone= document.getElementById("phone").value;

  var date= document.getElementById("date").value;

  var TIME= document.getElementById("TIME").value;

  var subject= document.getElementById("subject").value;

  // var TIME= document.getElementById("TIME").value;


  if(clientname=="" | venue=="" | phone=="" | date=="" | TIME=="" | subject=="")
    {
    //  alert("Fill the form first") 
    }


  
  else{
    var url="https://wa.me/" + phonenumber + "?text=" +

    "Hello Satyam Images, I want give you a Booking: "+ clientname+
    "%0aVenue Details: "+venue+
    "%0aPhone Number:+91"+phone+
    "%0aDate: "+date+
    "%0aTime: "+TIME+
    "%0aBooking Purpose: "+subject;

    window.open(url,'_blank').focus();

  }

   
  }




  // function myFunction(x) {
  //   if (x.matches) { // If media query matches
  //     document.body.style.backgroundColor = "yellow";
  //   } else {
  //    document.body.style.backgroundColor = "pink";
  //   }
  // }
  
  // // Create a MediaQueryList object
 
  
  // // Call listener function at run time
  // myFunction(x);
  
  // // Attach listener function on state changes
  // x.addEventListener("change", function() {
  //   myFunction(x);
  // });

  


  // When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var x = window.matchMedia("(max-width: 768px)")

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
    document.getElementById("navid").style.top = "0";
    document.getElementById("navid").style.backgroundColor = "#000";
    
    document.getElementById("nav-col-1").style.color = "bisque";
    document.getElementById("nav-col-2").style.color = "bisque";
    document.getElementById("nav-col-3").style.color = "bisque";
    document.getElementById("nav-col-4").style.color = "bisque";
    document.getElementById("nav-col-5").style.color = "bisque";
    
  } 
  
  
  else {
    document.getElementById("navid").style.top = "0px";
       document.getElementById("navid").style.backgroundColor = "transparent";
       document.getElementById("nav-col-1").style.color = "black";
       document.getElementById("nav-col-2").style.color = "black";
       document.getElementById("nav-col-3").style.color = "black";
       document.getElementById("nav-col-4").style.color = "black";
       document.getElementById("nav-col-5").style.color = "black";

      
  }

  if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) & x.matches ){
    document.getElementById("nav-col-5").style.color = "bisque";
    document.getElementById("nav-col-1").style.color = "black";
    document.getElementById("nav-col-2").style.color = "black";
    document.getElementById("nav-col-3").style.color = "black";
    document.getElementById("nav-col-4").style.color = "black";
  }
  else if((document.body.scrollTop < 20 || document.documentElement.scrollTop < 20 ) & x.matches){

    // document.getElementById("navid").style.backgroundColor = "#000";
    

    document.getElementById("nav-col-5").style.color = "black";
  
  }

  
// @media (min-width: 768px) {
}