const repeatString = function(word, times) {
  let string = '';
  for(let i = 0; i < times; i++) {
    string += word;
  }
  console.log(string);
  return string;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
