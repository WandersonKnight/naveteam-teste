var array = [
    { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
    { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
    { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
    { id: 4, first_name: "Gabriel", last_name: "Dornele", age: 21 }
  ];
  
  var array2 = array.filter((values) => values.age < 25);
  
  function nameGet() {
    if (array2.length > 0) {
      return `${array2[0].first_name} ${array2[0].last_name}`;
    } else {
      return "Nenhum resultado foi encontrado";
    }
  }
  
  window.exercise07 = function () {
    console.log(`resultado ex7: ${nameGet()}`);
  };