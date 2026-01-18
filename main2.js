const music = document.getElementById("music")
const btnaudio = document.getElementById("playBtn");
const texteInitialBtnAudio = btnaudio.textContent ;

console.log(btnaudio);

btnaudio.addEventListener("click", function() {
    if (music.paused) {
        console.log("debug-music") ;
        music.play();
        btnaudio.textContent = "Good music.";
    } else {
        music.pause();
        btnaudio.textContent = texteInitialBtnAudio ;
    }
});