/**
 * Created by h205p3 on 2/23/17.
 */
$(document).ready(function () {
    score = 0;
    count = 0;
    click = new Audio('https://ia801906.us.archive.org/27/items/MOUSECLICK_201610/MOUSE_CLICK.mp3');
    rip = new Audio('https://ia601301.us.archive.org/30/items/ScreamX1/ScreamX1.mp3');
    $("#mole").click(function() {
        click.play();
        $("#mole").animate({
            height: '-=218px', width: '-=218px'
        });
        $("#mole").html("<img class='enemy' src='https://images-eu.ssl-images-amazon.com/images/I/41xxlwpKDoL._AC_US218_.jpg' style='position: absolute; top:"+ tops[Math.floor(Math.random() * tops.length)] + "; left: "+ lefts[Math.floor(Math.random() * lefts.length)] + "'/>");
        score += 1;
        count += 1;
        document.getElementById("output").innerHTML = "Score: " + score;
    });
});
tops = ["1px", "218px", "436px"];
lefts = ["218px", "436px", "654px", "872px", "1090px"];
setInterval(check, 800);
function check() {
    console.log(count);
    if(score == 9 || score == 10 || score == 11 || score == 12){
        document.getElementById("jump").innerHTML = "body {background-image: url('https://s-media-cache-ak0.pinimg.com/originals/f7/e0/00/f7e000b526c44f6f9b3e581b7b245aa5.gif');}";
        rip.play();
    }
    else if(count == 0) {
        document.getElementById("output2").innerHTML = "<font size='7'>Game Over</font>";
        document.getElementById("output").innerHTML = "<font size='7'>Score: " + score + "</font>";
        $("#mole").remove();
    } else {
        count=0;
    }
}
