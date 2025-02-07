const submitButton = document.getElementById("check-btn");
const whatIsPButton = document.getElementById("whatIsPButton");
const content = document.getElementById("whatisp");
const input = document.getElementById("text-input");
const result = document.getElementById("result");

const toggleVisibility = () => {
  content.classList.toggle("hidden");
  content.classList.toggle("visible");
};
const isItAPalindrome = (userInput, originalInput) => {
  
  
  const length = userInput.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (userInput[i] !== userInput[length - 1 - i]) {
      result.innerText = `${originalInput} is NOT a palindrome.`;
      result.style.display = "block";
      return;
    }
  }

  result.innerText = `${originalInput} is a palindrome!`;
  result.style.display = "block";
};

  




  


function checkerForInvalidInput(event) {
  event.preventDefault();
  const originalInput = input.value.trim();

  const userInput = input.value.trim().toLowerCase().replace(/[^a-z0-9]/g, "");

  if (userInput === "") {
    alert("Please input a value")
    result.innerText = "Please input a value.";
    result.style.display = "block";
    return
  } 
   
   else {
    isItAPalindrome(userInput, originalInput)
    result.style.display = "block";
  }
}

submitButton.addEventListener("click", checkerForInvalidInput);
whatIsPButton.addEventListener("click", toggleVisibility);
