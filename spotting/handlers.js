// edit mode

function set_snippet() {
  snippet = editor.getValue();
  snippet_embed = embed_snippet(snippet);
};

// study mode

function spotify() {
  var difficulty = document.getElementById("difficulty").value / 100;
  challenge_embed = generate_challenge(snippet_embed, difficulty);
  challenge = debed_snippet(challenge_embed);
  editor.setValue(challenge);
}

function check_it() {
  var errors = document.getElementById("errors");
  errors.innerHTML = "";
  var attempt = editor.getValue();
  var attempt_embed = embed_snippet(attempt);
  var feedback_embed = gen_fb(snippet_embed, attempt_embed);
  if (feedback_embed instanceof Error) {
    errors.innerHTML = feedback_embed.message;
  } else {
    var feedback = debed_snippet(feedback_embed);
    editor.setValue(feedback);
  };
};
