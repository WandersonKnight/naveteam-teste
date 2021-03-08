var array = [
    { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
    { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
    { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
    { id: 4, first_name: "Gabriel", last_name: "Dornele", age: 21 }
  ];
  
  var array2 = array.filter((values) => values.age < 30);
  
  function ageLower() {
    if (array2.length > 0) {
      for (var i = 0; i < array2.length; i++) {
        console.log(array2[i]);
      }
    } else {
      console.log("Nenhum resultado foi encontrado");
    }
  }
  
  window.exercise08 = function () {
    console.log("resultado ex8:\nElementos com age < 30");
    ageLower();
  };
  