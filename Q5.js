var array = [
    { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
    { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
    { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
    { id: 4, first_name: "Gabriel", last_name: "Dornele", age: 21 }
  ];
  
  function greetings() {
    for (var i = 0; i < array.length; i++) {
      console.log(`Olá, ${array[i].first_name} ${array[i].last_name}!`);
    }
  }
  
  window.exercise05 = function () {
    console.log(`resultado ex5:`);
    greetings();
  };
  