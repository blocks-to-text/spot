// arrppet -> array of charcodes
// probs -> number from 0 to 1
function generate_challenge(arrppet, probs) {
  var challenge = [];
  var next_entry = {};

  for (var i = 0; i < arrppet.length; i++) {
    if (arrppet[i].type === "quizzable") {
      var challengified = randomly_replace(arrppet[i].value, probs);
      next_entry = {type: "quizzable", value:challengified};
      challenge.push(next_entry);
    } else {
      var chunk_copy = JSON.parse(JSON.stringify(arrppet[i].value));
      next_entry = {type: "fixed", value: chunk_copy};
      challenge.push(next_entry);
    };
  };

  return challenge;
};

function randomly_replace(arr, probs) {
  if (probs === undefined) {
    probs = .2;
  };
  var new_arr = [];
  for (var i = 0; i < arr.length; i++) {
    if (Math.random() < probs) {
      new_arr.push(183); // a dot
      // new_arr.push(175); // line up top
    } else {
      new_arr.push(arr[i]);
    };
  };
  return new_arr;
};