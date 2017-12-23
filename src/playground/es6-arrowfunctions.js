const square = function(x) {
    return x * x;
  };
  
  //Begge squareArrow gjør det samme
  //const squareArrow = (x) => {
  //  return x * x;
  //}
  
  const squareArrow = (x) => x * x;
  
  //console.log(squareArrow(16));
  const getFirstNameV2 = (name) => {
    return name.split(' ')[0];
  }
  
  const getFirstName = (name) => name.split(' ')[1];
  
  console.log(getFirstName('Eivind Steen'));
  console.log(getFirstNameV2('Påsan Steen'));