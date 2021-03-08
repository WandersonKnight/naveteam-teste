function biggestString(str1, str2) {

  if (str1.length > str2.length) {
    return str1;

  } 
  else if (str1.length < str2.length) {

    return str2;

  } 
  else if (str1.length === str2.length) {

    return "Strings do mesmo tamanho";

  }
  
}

var str1 = "a";
var str2 = "bb";

var result = biggestString(str1, str2);

window.exercise01 = function () {
  console.log(`resultado ex1: ${result}`);
};
