function gen_permalink() {
  var url = generate_permalink(snippet, encode_query, 'spot'); 
  var perma_display = document.getElementById("display-perma");
  perma_display.value = url;
  copy_to_clipboard(url); 
  alert('copied permalink');
}