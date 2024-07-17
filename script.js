console.log("hi");
var button = $("#passgen");
button.on("click", showExamplePassword);


function showExamplePassword () {
  event.preventDefault();
  console.log("hello");
  var examplePasswords = ["I!Q$5ehA!'}J5", "Ei$OclG`61R,?", "u*S:<pPGt/3$i", "fmssRLaA!G8;B", "B6a@%G%8P;XV#", "Mz`kFz4n@r_tt", "H2/Q7MP>@K+aT", "l+vseUcSx9+i6", "D2/Q7MP>@K+aT", "l+vseUcSx9+i6"];
  var passwordText = $("#password");
  var randomIndex = Math.floor(Math.random() * examplePasswords.length);
  console.log("hello");
  var randomPassword = examplePasswords[randomIndex];
  passwordText.text(randomPassword);
}

window.onload = function(){

  let front = `<img src="images/Melonie.png" style="width:200px;height:200px;box-shadow: 0 5px 15px rgb(255, 255, 255, 0.2);">`;
  let back = `<img src="images/MeloniesAvatar.png" alt="Addrita" style="width:200px;height:200px;box-shadow: 0 5px 15px rgb(255, 255, 255, 0.2);">`;    
  let card = new FlipCard(front,back);
  card.render("flipcard_output");

  let front2 = `<img src="images/Addrita.jpeg" style="width:200px;height:200px;box-shadow: 0 5px 15px rgb(255, 255, 255, 0.2);">`;
  let back2 = `<img src="images/AddritaAvi.png" style="width:200px;height:200px;box-shadow: 0 5px 15px rgb(255, 255, 255, 0.2);">`;    

  let card2 = new FlipCard(front2,back2);
  card2.render("flipcard_output2");
  
  let front3 = `<img src="images/SummersPhotoCropped.png" style="width:200px;height:200px;box-shadow: 0 5px 15px rgb(255, 255, 255, 0.2);">`;
  let back3 = `<img src="images/SummersAvatar.png" style="width:200px;height:200px;box-shadow: 0 5px 15px rgb(255, 255, 255, 0.2);">`;    

  let card3 = new FlipCard(front3,back3);
  card3.render("flipcard_output3");
  
  let front4 = `<img src="images/ManshasPhotoCropped.png" style="width:200px;height:200px;box-shadow: 0 5px 15px rgb(255, 255, 255, 0.2);">`;
  let back4 = `<img src="images/ManshasAvatar.png" style="width:200px;height:200px;box-shadow: 0 5px 15px rgb(255, 255, 255, 0.2);">`;    

  let card4 = new FlipCard(front4,back4);
  card4.render("flipcard_output4");
}
