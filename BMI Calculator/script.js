let openLoginRight = document.querySelector('.h1');
let loginWrapper = document.querySelector(".BMI-wrapper");

openLoginRight.addEventListener('click', function() {
    loginWrapper.classList.toggle('open');
});

function Calbmi(){
var weight = document.getElementById("weight").value;
var height = document.getElementById("height").value;
var result = weight / ( ( height / 100 ) ** 2 )
var a=" ";
if (result<18.5){
    var a = "น้ำหนักต่ำกว่าเกณฑ์" ;
} else if(result <= 22.9){
    var a = "สมส่วน" ;
} else if(result  <= 24.9){
    var a = "น้ำหนักเกิน";
} else if(result  <= 29.9){
    var a = "โรคอ้วน" ;
} else{
    var a ="โรคอ้วนอัตราย" ;
}

document.getElementById("result").innerHTML = "BMI ของคุณ : " + result.toFixed(2)
document.getElementById("a").innerHTML = a
}

