/*side bar toggle */
function opennav() {
  document.getElementById("mySidebar").classList.toggle("displayy");
  
  
}
  // Close the dropdown if the user clicks outside of it
     window.onclick = function(event) {
          if (!event.target.matches('.openbtn')) {
            var sidebarr = document.getElementsByClassName("sidebar");
            var i;
            for (i = 0; i < sidebarr.length; i++) {
              var opensidebarr = sidebarr[i];
              if (opensidebarr.classList.contains('displayy') ) {
                opensidebarr.classList.remove('displayy');
              }
            }
          }
        }
 
 /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myDropdown() {
  document.getElementById("select-myDropdown").classList.toggle("show");
}



         function focusInputName() { 
        document.getElementById("fname").classList.add("focus-red"); 
    } 

    function focusInput() { 
      document.getElementById("Cname").classList.add("focus-red"); 
  } 

    
    function focusInputRule() { 
      document.getElementById("rule").classList.add("focus-red"); 
  } 

//toggle data sales page
  function showw(){
    document.getElementById("chk").classList.toggle("show");
  }
//toggle coupon ceate price page
function showcoupon(){
  document.getElementById("couponcode").classList.toggle("show");
}

//toggle coupon ceate price page
function showprint(){
  document.getElementById("showprint").classList.toggle("show");
}


//img upload func





 /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myGearFunction() {
  document.getElementById("myGearDropdown").classList.toggle("GearShow");
}

// Close the dropdown if the user clicks outside of it
