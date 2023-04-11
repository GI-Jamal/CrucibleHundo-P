//get the start and end numbers from the inputs
// Entry point AKA Controller function
function getValue() {
  
  let startValue = document.getElementById('startValue').value; // startValue = "0"
  let endvalue = document.getElementbyId('endValue').value;

  let startNumber = parseInt(startValue); // startNumber = 0
  let endNumber = parseInt(endvalue);

  let numbers = generateNumbers(startNumber, endNumber);

  displayNumbers(numbers);
}

// generate the range of numbers to display
// Business/logic function
function generateNumbers(start, end) {
  
  let numbers = [];
  
  for (let i = start; i <= end; i++)
  {
    numbers.push(i);
  }

  return numbers;
}

// placing the generate numbers on the page AND bolding the even numbers
// View function
function displayNumbers(theNumbers) {

  for (let i = theNumbers[0]; i < theNumbers.length; i++)
  {
    if (theNumbers[i] % 2 == 0)
    {
      
    }
  }
}
