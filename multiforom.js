

// FUNZIONE PER NOMI FATTA AM DA IMPLEMENTARE
// FUNGE TUTTO MA DA FARE IL DESIGN

// function PrintName() {

//   let y = document.getElementById('INnome').value;
//   let x = document.getElementById('INcognome').value;

//   //ID QUA SOTTO E DOVE VIENI PRINTATO NOME E COGNOME
//   document.getElementById("nome").innerHTML ="(" + y + " " + x + ")";






// }



//FUNGONO TUTTE E DUE
function INparticonvocate() {
  let x = document.getElementById("INparticonvocate").value;
  //inizio switch
switch (x) {
  case "1":

    var multiform1 = document.getElementById("INmultiform1");
    var multiform2 = document.getElementById("INmultiform2");
    var multiform3 = document.getElementById("INmultiform3");


    
    multiform1.classList.remove('remove');
    multiform2.classList.add('remove');
    multiform3.classList.add('remove');


    break;
  case "2":

    var multiform1 = document.getElementById("INmultiform1");
    var multiform2 = document.getElementById("INmultiform2");
    var multiform3 = document.getElementById("INmultiform3");


    
    multiform1.classList.remove('remove');
    multiform2.classList.remove('remove');
    multiform3.classList.add('remove');

    break;
    case "3":


      var multiform1 = document.getElementById("INmultiform1");
      var multiform2 = document.getElementById("INmultiform2");
      var multiform3 = document.getElementById("INmultiform3");
  
  
      
      multiform1.classList.remove('remove');
      multiform2.classList.remove('remove');
      multiform3.classList.remove('remove');

      break;

  default:

    var multiform1 = document.getElementById("INmultiform1");
    var multiform2 = document.getElementById("INmultiform2");
    var multiform3 = document.getElementById("INmultiform3");


    
    multiform1.classList.add('remove');
    multiform2.classList.add('remove');
    multiform3.classList.add('remove');
    // code block
}

}   

function ISparticonvocate() {
  let x = document.getElementById("ISparticonvocate").value;
  //inizio switch
switch (x) {
  case "1":

    var multiform1 = document.getElementById("ISmultiform1");
    var multiform2 = document.getElementById("ISmultiform2");
    var multiform3 = document.getElementById("ISmultiform3");


    
    multiform1.classList.remove('remove');
    multiform2.classList.add('remove');
    multiform3.classList.add('remove');


    break;
  case "2":

    var multiform1 = document.getElementById("ISmultiform1");
    var multiform2 = document.getElementById("ISmultiform2");
    var multiform3 = document.getElementById("ISmultiform3");


    
    multiform1.classList.remove('remove');
    multiform2.classList.remove('remove');
    multiform3.classList.add('remove');

    break;
    case "3":


      var multiform1 = document.getElementById("ISmultiform1");
      var multiform2 = document.getElementById("ISmultiform2");
      var multiform3 = document.getElementById("ISmultiform3");
  
  
      
      multiform1.classList.remove('remove');
      multiform2.classList.remove('remove');
      multiform3.classList.remove('remove');

      break;

  default:

    var multiform1 = document.getElementById("ISmultiform1");
    var multiform2 = document.getElementById("ISmultiform2");
    var multiform3 = document.getElementById("ISmultiform3");


    
    multiform1.classList.add('remove');
    multiform2.classList.add('remove');       
    multiform3.classList.add('remove');
}

} 
  