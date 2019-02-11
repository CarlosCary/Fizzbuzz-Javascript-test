module.exports = function(number) {
  let result;
  if (number % 3 === 0)
  {
    result = "Fizz";
    if(number % 5 ==0) {
      result = result + "Buzz";
    }
  }
  else {
    if(number % 5 == 0) 
      result = "Buzz";
    else 
      result = number;
  }
  return result;
}