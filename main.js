x = 0;
y = 0;
var toNumber = 0;
var speakData = ""
var apple = 0;
drawApple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 
  toNumber = Number(content)
  if(Number.isInteger(toNumber)){
    drawApple = "set"
  }
  else{
    document.getElementById("status").innerHTML = "Número não foi reconhecido: ";
  }
}

function setup() {
 canvas = createCanvas(700,500)
}

function draw() {
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
    for(var i= 1; i <= toNumber; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 500);
      image(apple, x, y, 50, 50);
    }
  }

}

function preload(){
  apple = loadImage("apple.png")
}

function speak(){
    var synth = window.speechSynthesis;
    
    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
