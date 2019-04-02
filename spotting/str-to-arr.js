function to_char_arr(str) {
  var split_str = str.split('');

  var embeded_arg = [];
  for (var i = 0; i < split_str.length; i++) {
    embeded_arg.push(split_str[i].charCodeAt(0));
  };

  return embeded_arg;
};

function from_char_arr(arr) {
  var de_charred = [];
  for (var i = 0; i < arr.length; i++) {
    de_charred.push(String.fromCharCode(arr[i]));
  };

  var de_bedded = de_charred.join('');

  return de_bedded;
};