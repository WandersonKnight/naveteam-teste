var array = [
    { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
    { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
    { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
    { id: 4, first_name: "Gabriel", last_name: "Dornele", age: 21 }
  ];
  var check = true;
  
  function sortArray(array) {
    while (check) {
      for (var i = 1; i < array.length; i++) {
        if (array[i - 1].age < array[i].age) {
          check = false;
  
          var temp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = temp;
        } else if (array[i - 1].age === array[i].age) {
          if (array[i - 1].id > array[i].id) {
            check = false;
  
            var temp2 = array[i - 1];
            array[i - 1] = array[i];
            array[i] = temp2;
          }
        }
      }
    }
  
    return array;
  }
  
  window.exercise09 = function () {
    console.log("resultado ex9:", sortArray(array));
  };
  