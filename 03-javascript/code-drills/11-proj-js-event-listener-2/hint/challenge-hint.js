// declare a variable for the array we're storing the history of user key presses 
// into and assign it to an empty array
        var userKeyIn = [];

// declare a variable that is a string of all 26 lowercase letters in the english alphabet

//        var alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
          var alphabets = "abcdefghijklmnopqrstuvwxyz";
// we can use a string in this situation because we're only checking against individual characters
// if we were to have to validate non-alphanumeric characters, we would have to use an array


// create a key press listener
        document.onkeyup = function(e){
            var getUserKey = e.key.toLowerCase();
            if(/[a-z]/.test(getUserKey)){
                console.log(/[a-z]/.test(getUserKey));
                userKeyIn.push(getUserKey);
                document.getElementById("user-key").innerHTML = getUserKey;
                document.getElementById("user-history").innerHTML = userKeyIn;
                } else {
                    document.getElementById("user-key").innerHTML = "Please select alphabets only!";
                }
        }

  // store the key the user pressed into a variable and
  // change it to lower case to make our logic not case sensitive


  // create an if statement that checks whether the key is part of our alphabet

    // if the key is part of the alphabet, set the text value of div on our webpage we're 
    // using to display thecurrent key to that key


    // also store the key into the array we declared at the top of the file


    // finally set the text value of the key press history div to the array


  // if the key is not part of our alphabet, change the current key div to ask the user to press
  // a key that's a letter within our alphabet


