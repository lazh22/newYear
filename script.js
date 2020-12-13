let music;
$(document).ready(function () {
    music = new Howl({
        src: ["https:\/\/ruv.hotmo.org\/get\/cuts\/de\/c8\/dec8b6cc57dccaad9b33fee2d14115da\/67639067\/Midnight_Riders_-_All_I_Want_For_Christmas_b128f0d211.mp3"],
        loop: true,
        volume: 0.75

    });
    $("#player>img").click(function (e){
        if(e.target.id = "isPlaying"){
            music.play();
            e.target.id = "isPlaying";
        }
        
    
    });
});
