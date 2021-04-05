// 04 Function Conditions

// function takes you to different cities
// call city #1: Paris
// call city #2: Milan
// call city #3: London
// call city #4: Tokyo
// call city #5: Dubai

function city(num){
  if (num == 1){
    console.log("Paris");
  }
  else if (num == 2){
    console.log("Milan");
  }
  else if (num == 3){
    console.log("London");
  }
  else if (num == 4){
    console.log("Tokyo");
  }
  else {
    console.log("Dubai");
  }
}

// Printed resulting text
console.log(city(1)); // Paris
console.log(city(2)); // Milan
console.log(city(3)); // London
console.log(city(4)); // Tokyo
console.log(city(5)); // Dubai
