function open_in(env) {
  var code;
  if (mode === "change") {
    code = editor.getValue();
  } else {
    code = snippet;
  };
  var url = generate_permalink(code, encode_query, env);
  window.open(url, '_self');
};