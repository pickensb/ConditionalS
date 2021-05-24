var number = prompt("Pick a number.");
if (isNaN(number)) {
  document.body.querySelector(".number").innerHTML="Input is not a number";
} else { document.body.querySelector(".number").innerHTML="Number is "+number;
}

var operator = prompt("Pick and operator.");
if (operator === "+","-", "*", "**", "/", "%", "++") {
  document.body.querySelector(".operator").innerHTML="Operator is "+operator;
} else { document.body.querySelector(".operator").innerHTML="Input is not an operator";
}

var number2 = prompt("Pick a second number.");
if (isNaN(number2)) {
  document.body.querySelector(".number2").innerHTML="Input is not a number";
} else { document.body.querySelector(".number2").innerHTML="Number is "+number2;
}

var total = myFunction();
function myFunction (operator, number, number2){
   var ele=document.createElement("div");
  if(operator==="+"){ele.innerHTML=number+number2;
  }if(operator==="-"){ele.innerHTML=number-number2;
  }if(operator==="*"){ele.innerHTML=number*number2;
  }if(operator==="**"){ele.innerHTML=number**number2;
  }if(operator==="/"){ele.innerHTML=number/number2;
  }if(operator==="%"){ele.innerHTML=number%number2;
  }
   document.body.querySelector(".wrapper").innerHTML="Total is "+total;
}