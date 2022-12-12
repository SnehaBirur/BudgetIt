console.log("helLO")
var inputElement = document.getElementById('amt');
var theirInput = 0;
inputElement.addEventListener('change', function (e) {
    theirInput = e.target.value;
    // document.getElementById('totalAmt').innerHTML = theirInput;
    
    window.location.href = "plans.html?total=theirInput";
    localStorage.setItem('total', theirInput);
    
        
    
   
});
function inputAmt()
{
   var inputElement = document.getElementById('amt');
var theirInput = 0;
inputElement.addEventListener('change', function (e) {
    theirInput = e.target.value;
    document.getElementById('totalAmt').innerHTML = theirInput;
    console.log(theirInput);
    // window.open("plans.html", '_self');/
    // document.getElementById('page').innerHTML=""; 
 
});
}
