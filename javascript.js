var result=document.querySelector(".result");
var button=document.querySelector("input[type='button']");


button.addEventListener("click",function(){
  var input=document.querySelector("input[type='text']").value;
  var output=Number(convertToC(input)).toFixed(2);

  result.innerHTML=output+"ºC";

});

function convertToF(c){
  return (c * 1.8 + 32);
}
function convertToC(f){
  return ((f - 32) * 5/9 );
}
