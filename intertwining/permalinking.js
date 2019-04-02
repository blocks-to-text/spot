function read_snippet_query() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var snippet_encoded = url.searchParams.get("snippet");
  return snippet_encoded;
};

function generate_permalink(snippet, map, viztool) {
  var encoded_snippet = map(snippet);
  var permalink = "https://janke-learning.github.io/"+viztool+"/?snippet="+encoded_snippet;
  return permalink
};

// function display_permalink(url) {
//   var perma_display = document.getElementById("display-perma");
//   perma_display.value = url;
// };



// var query = read_snippet_query();

// if (query) {
//   editor.setValue(query);
// };



