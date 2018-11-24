// declare the variable we're storing the confirm dialogue in
    
        var getUserInp;
// create a key press listener

        document.onkeyup = function(e){
            var getUserKey = e.key.toLowerCase();
            console.log(getUserKey);
            if(getUserKey === "h"){
                getUserInp = confirm("Did you press 'h'?");
            } else if (getUserKey === "k"){
                if(getUserKey){
                    alert("Hello! ")
                } else {
                    alert("No Thanks!")
                }
            }
        }


  // store the key the user pressed into a variable so we can 
  // refer to it easier in this function and
  // change it to lower case to make our logic not case sensitive


  // console log the key that the user pressed
       


  // check whether the user pressed the "h" key
    
    // create a confirm dialogue when they do and store the response from that
    // dialogue into the variable we declared outside the event listener



  // check whether the user pressed the "k" key
    // check whether the user had answered true to the previous confirm dialogue
    // display the corresponding alert dialogue
