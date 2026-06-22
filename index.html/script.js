let fontSize = 22;

function increaseFont() {
    fontSize += 2;
    const text = document.getElementById("storyText");
    if(text){
        text.style.fontSize = fontSize + "px";
    }
}

function decreaseFont() {
    if(fontSize > 14){
        fontSize -= 2;
        const text = document.getElementById("storyText");
        if(text){
            text.style.fontSize = fontSize + "px";
        }
    }
}

function playAudio() {
    const audio = document.getElementById("audioPlayer");
    if(audio){
        audio.play();
    }
}