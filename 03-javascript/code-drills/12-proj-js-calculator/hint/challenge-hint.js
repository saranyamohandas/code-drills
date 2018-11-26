// declare a variable to store the user input and set it to an empty array for now
        var getUserInp = [];


// create a string of all the valid inputs for our validation logic to check against
        var validInp = "1234567890*+-/=c";
        var operators = "+*-/";



// ==================== Evaluation Function ====================
//
// create function that takes in an array and evaluates that array as a mathematical function
// Feel free to come back to this function later if you want to. We will not be using this
// immediately.
//
// =============================================================


  // declare 3 variables, one for the first number, one for the second, and one for the operator
  // set the variables for the numbers to be an empty string for now
            var firstNum = "";
            var secNum = "";
            var operator;

  // iterate through the array from the argument
            function checkInp(getUserInp){
                
                    for(i=0;i<getUserInp.length;i++){
                        if(operator){
                            secNum = secNum + getUserInp[i];
                        
                    } else if(getUserInp[i] == "*" || getUserInp[i] == "+" || getUserInp[i] == "-" || getUserInp[i] == "/" ){
                        operator = getUserInp[i];
                    }
                        else {
                        firstNum = firstNum + getUserInp[i];
                    }
                    
                }
            


    // if the operator is already defined
    // not being defined is a "falsey" value and will evaluate to false in the if statement
    // if operator has a value, it will evaluate to true


      // append the current element to the end of the second number

    
    // if the operator hasn't already been defined


      // check if the the current element is an operator


        // if the current element is an operator, set the value of our operator variable to
        // be the current element


      // if the current element is not an operator


        // append it to the end of the first number


  
  
  // after we've iterated through the array, parse the first and 
  // second numbers into integers from strings
   firstNum = parseInt(firstNum);
   secNum = parseInt(secNum);

  // then, check if the operator is a '+' sign
        if(operator === "+"){
            return(firstNum + secNum);
        } else if(operator === "-"){
            return(firstNum-secNum);
        } else if (operator === "*"){
            return(firstNum-secNum);
        } else {
            return(firstNum/secNum);
        }
                
    }

    // if the operator is a '+' sign, return the value of the first number added to the second number
    

  // if the operator isn't a '+' sign, check if the operator is a '-' sign


    // if the operator is a '-' sign, return the value of the first number subtracted from the second number


  // if the operator isn't a '-' sign, check if the operator is a '*' sign


    // if the operator is a '*' sign, return the value of the first number multiplied by the second number


  // if the operator isn't a '*' sign, check if the operator is a '/' sign


    // if the operator is a '/' sign, return the value of the first number divided by the second number




// ==================== Event Listener ====================
//
// Create an event listener that listens to user key presses
//
// ========================================================


  // check to make sure the user pressed a valid button (check the input against the array we made)
        document.onkeyup = function(event){
            
            var getKey = event.key;
            console.log(/validInp/.test(String(getKey)));
        if(validInp.includes(getKey)) {
            
        
            if(getKey == "c"){
               getUserInp = [];
               document.getElementById("user-result").innerHTML = "";
               } else if(getKey == "="){
                checkInp(getKey);
                document.getElementById("user-result").innerHTML =getKey;
            } else if (operator.includes(getKey)){
                
                if(getUserInp["*"] != -1 || getUserInp["+"] != -1 || getUserInp["-"]  != -1|| getUserInp["/"] != -1){
                   document.getElementById("user-result").innerHTML = "You have entered an operator aleady!" 
                } else {
                    checkInp(getKey);
                }
            } else {
                checkInp(getKey);
            }
    
        } else {
            document.getElementById("user-result").innerHTML = "Please enter a valid key!" 
        }
        }

    // if the input was valid, check if it was the letter 'c'

    
      // if it was 'c', set the expression array back to an empty string and clear the two output
      // areas on the webpage
    
    
    // if the input wasn't the letter 'c', check if it was an '='


      // if it was an '=', send the user expression into our array expression evaluator function


      // then, output the results of that function into the results area of our webpage
      
      
    // if the input wasn't an '=', check whether it was an operator


      // if it was an operator, check whether an operator already exists in the user expression array
        

        // if it already exists, output a message to the results area on the webpage telling the user
        // that they already input an operator


      // if there wasn't already an operator, add the input to the expression


    // if it wasn't an operator, then it must be a number because we've gone through all the other
    // valid inputs, so store that number into the expression array


  // if the input wasn't valid, output an error message to the results area on the webpage



  // finally, outside the 'if-else' statement, set the textContent of the user expression div
  // to be our expression array
        document.getElementById("user-exp").innerHTML = getUserInp;

  