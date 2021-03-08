var array = [
    { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
    { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
    { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
    { id: 4, first_name: "Gabriel", last_name: "Dornele", age: 21 }
  ];
  
  var array2 = array.map((values) => values.age);
  
  var sum = array2.reduce((total, age) => total + age);
  
  window.exercise06 = function () {
    console.log(`resultado ex6: ${sum}`);
  };
  