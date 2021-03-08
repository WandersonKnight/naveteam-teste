var dict = { 4: "a", 3: "e", 1: "i", 5: "s" };

var str = "T35t3 d3 35t4g1o";

for (var key in dict) {
  str = str.replaceAll(key, dict[key]);
}

window.exercise03 = function () {
  console.log(`resultado ex3: ${str}`);
};