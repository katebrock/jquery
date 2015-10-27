var num_one;
var num_two;
var answer;
var operator;

function numHandler1(e){
  //get a handle on the value of the number that was clicked
  var value = e.target.value;

  //get a handle on the display area
  var resultarea = $("#result");

  // put the number in the display area
  // console.log(resultarea.html());
  // $(resultarea[0]).html(value);
  resultarea.val(num_one)
  if(num_one === undefined){                      //this is saying that when the var
    num_one = e.target.value                      //is clicked it will target the button
  }                                              //being clicked on and give it the value
  else if(num_one !== undefined){                      //of which is being pushed
    num_one += e.target.value
  } ;
}

function oppHandler(e){
  var value = e.target.value;
  var resultarea = $("#result");
  resultarea.val(num_one + operator);

  if(num_one !== undefined){
    operator = e.target.value
  };

}

function numHandlertwo(e){
  var value = e.target.value
  var resultarea = $("#result")
  resultarea.val(num_one + operator + num_two)

  if(num_two === undefined && operator){
    num_two = e.target.value
  }
  else if(num_two !== undefined){
    num_two += e.target.value
  };
}




function equalHandler(e){
  var value = e.target.value;
  var resultarea = $("#result");
  resultarea.val(value);
}

function clearHandler(e){
  // console.log("you clicked it!")
  var value = e.target.value;
  var resultarea = $("#result")
  resultarea.val('');
  num_one = undefined;
  num_two = undefined;
  operator = undefined;
}




$(".number").click(numHandler1)
$(".number").click(numHandlertwo)
$(".operator").click(oppHandler)
$(".equal").click(equalHandler)
$(".clear").click(clearHandler)






// if (operator ==="/"){                                                 //value
//   answer = num_one/num_two;
// }
// else if (operator ==="*"){
//   answer = num_one*num_two;                                           //the if and else statements are allowing
// }                                                                     //the browser to go through each operation
// else if (operator ==="+"){                                            //until it finds the one you have inputed
//   answer = num_one+num_two;
// }
// else if (operator ==="-"){
//   answer = num_one-num_two;
// }
