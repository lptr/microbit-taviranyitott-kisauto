radio.onReceivedString(function (receivedString) {
    if (receivedString == "menj") {
        cuteBot.forward()
    } else if (receivedString == "balra") {
        cuteBot.turnleft()
    } else if (receivedString == "jobbra") {
        cuteBot.turnright()
    } else {
        cuteBot.stopcar()
    }
})
radio.setGroup(1)
