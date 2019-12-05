function aboutMeConfirmBox() {

  if (confirm("Hey! You are about to enter a new world <website> !")) {
  	document.getElementById("portfolio").href = "../aboutMe/index.html";

  } else {
  	document.getElementById("portfolio").href = "index.html";
  }
}

