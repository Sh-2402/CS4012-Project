const waves_audio = new Audio("./audios/6ce21b92-57fb-4aee-b664-86743948172e.mp3");
const wind_audio = new Audio("./audios/9deff6da-f87d-4802-a901-0c07170cb7c4.mp3");
const nature_audio = new Audio("./audios/a592dcf9-8fbb-45ef-a048-9a0d2ea9c9af.mp3");

document.addEventListener('click', keyPlay);

function keyPlay() {
  
  switch (Math.floor(Math.random() * 3)){
    case 0: {
      waves_audio.play();
      break;
    }
    case 1: {
      wind_audio.play();
      break;
    }
    case 2: {
      nature_audio.play();
      break;
    }
    default: {
      waves_audio.play();
    }
  }

}
