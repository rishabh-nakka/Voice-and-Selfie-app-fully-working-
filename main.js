var speech_recognition=window.webkitSpeechRecognition;
var recognition=new speech_recognition();
function record_voice(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run (event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if (content=="take my selfie"){
        speak()
        Webcam.attach( '#camera' );
        setTimeout(function(){
            take_selfie();
            save_image();
        },5000)
       
    }

    }
function speak(){
    var sim=window.speechSynthesis;
    var speak_data= "taking your selfie in 5 seconds"
    var utter_this=new SpeechSynthesisUtterance(speak_data);
    sim.speak(utter_this); 
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
  });
  function take_selfie(){
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='picture'>";
      })
  }
  function save_image(){
      link=document.getElementById("link");
      var image= document.getElementById("picture").src;
      link.href=image;
      link.click();
  }