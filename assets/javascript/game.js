var targetScore
var redPoints
var magentaPoints
var yellowPoints
var bluePoints
var score = 0
var wins = 0
var losses = 0

function reset() {
    targetScore = Math.floor(Math.random() * 101) + 19
    $("#targetScore").text(targetScore)

    $("#winTotal").text(wins)
    $("#lossesTotal").text(losses)

    score = 0
    $("#score").text("Score: " + score)

    magentaPoints = Math.floor(Math.random() * 12) + 1
    bluePoints = Math.floor(Math.random() * 12) + 1
    redPoints = Math.floor(Math.random() * 12) + 1
    yellowPoints = Math.floor(Math.random() * 12) + 1
}

function addPoints(points) {
    score += points
    $("#score").text("Score: " + score)
    setTimeout(checkScore, 100)
}

function checkScore() {
    if (score === targetScore) {
        alert("You Win!")
        wins++
        reset()
    }
    if (score > targetScore) {
        alert("You lose!")
        losses++
        reset()
    }

    
}

$("#magenta").click(function () { addPoints(magentaPoints)} )
$("#blue").click(function () { addPoints(bluePoints)} )
$("#red").click(function () { addPoints(redPoints)} )
$("#yellow").click(function () { addPoints(yellowPoints)} )

reset()