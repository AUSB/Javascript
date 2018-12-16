
/* JS code here */
alert("here");
function checkfunction() {
   var box = document.getElementById("box");
   var textarea = document.getElementById("status");
   if ( box.checked ) {
     textarea.disabled = false;
   }
   else {
     textarea.disabled = true;
  }

}
