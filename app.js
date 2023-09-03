var userInput = document.querySelector("#userInput");
var reversedDiv = document.querySelector("#reversed");
var resultPara = document.querySelector("#result");
var resultDiv = document.querySelector(".resultDiv");

function findPalindrome() {
    var userInputLowerCase = userInput.value.toLowerCase();
    var usserInputArray = userInputLowerCase.split("");
    var reversedArray = [];
    for (var i = usserInputArray.length - 1; i >= 0; i--) {
        reversedArray.push(usserInputArray[i]);
    }
    var reversed = reversedArray.join('');
    resultDiv.classList.remove("d-none")
    resultDiv.style.display = "block";
    reversedDiv.value = reversed;

    if (userInputLowerCase == reversed) {
        resultPara.innerHTML = "It is palindrome";
    } else {
        resultPara.innerHTML = "It is not a palindrome";
    }
}


