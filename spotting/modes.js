function spot_mode() {
  mode = "spot";

  snippet = editor.getValue();
  snippet_embed = embed_snippet(snippet);
  challenge = snippet;
  challenge_embed = generate_challenge(snippet_embed, 50); 

  var controls = document.getElementById("controls");
  while(controls.firstChild){
    controls.removeChild(controls.firstChild);
  };

  var errors = document.createElement("p");
  errors.id = "errors";

  var difficulty = document.createElement("a");
  difficulty.innerHTML = "difficulty:";
  var slider = document.createElement("input");
  slider.id = "difficulty";
  slider.type = "range";
  slider.min = "0";
  slider.max = "100";
  slider.value = "50";
  var spotify_button = document.createElement("button");
  spotify_button.onclick = spotify;
  spotify_button.innerHTML = "spotify";
  var check_it_button = document.createElement("button");
  check_it_button.onclick = check_it;
  check_it_button.innerHTML = "check your guess";
  var spotting = document.createElement("div");
  spotting.appendChild(difficulty);
  spotting.appendChild(slider);
  spotting.appendChild(spotify_button);
  spotting.appendChild(document.createElement("br"));
  spotting.appendChild(check_it_button);

  var goto_change_mode = document.createElement("button");
  goto_change_mode.innerHTML = "change snippet";
  goto_change_mode.onclick = change_mode;

  controls.appendChild(errors);
  controls.appendChild(spotting);
  controls.appendChild(goto_change_mode);
}

function change_mode() {
  mode = "change";

  var controls = document.getElementById("controls");
  while(controls.firstChild){
    controls.removeChild(controls.firstChild);
  };

  var spot_snippet = document.createElement("button");
  spot_snippet.innerHTML = "study this snippet";
  spot_snippet.onclick = spot_mode;

  controls.appendChild(document.createElement("br"));
  controls.appendChild(spot_snippet);
  controls.appendChild(document.createElement("br"));
  controls.appendChild(document.createElement("br"));
  controls.appendChild(document.createElement("br"));

}



