
// document.getElementById("progress-bar").style.visibility="hidden";

var submit = document.getElementsByName('input')[0];
var prog=0;
submit.onclick = function() {
    var emailid = document.getElementById("email").value;
    var pass = document.getElementById("passw").value;
  
    prog=1;
        // document.getElementById("progress-bar").style.visibility="visible";
 
       
} 

if(prog===1)
{
const progressBar = document.getElementsByClassName('progress-bar')[0]
setInterval(() => {
  const computedStyle = getComputedStyle(progressBar)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', width + .1)
}, 10)
}