
/* write your JS code here */
alert("here");
function addfunction(){
  var input1 = document.getElementById("input1");
  var input2 = document.getElementById("input2");
  var answer = document.getElementById("answer");
  var result = parseInt(input1.value) + parseInt(input2.value);
  answer.innerHTML = result;
}

function minusfunction(){
  var input1 = document.getElementById("input1");
  var input2 = document.getElementById("input2");
  var answer = document.getElementById("answer");
  var result = parseInt(input1.value) - parseInt(input2.value);
  answer.innerHTML = result;
}

function multifunction(){
  var input1 = document.getElementById("input1");
  var input2 = document.getElementById("input2");
  var answer = document.getElementById("answer");
  var result = parseInt(input1.value) * parseInt(input2.value);
  answer.innerHTML = result;
}
