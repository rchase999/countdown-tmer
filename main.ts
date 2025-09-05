let minutes = 0
let seconds = 0
let setting = true

input.onButtonPressed(Button.A, function () {
    if (setting && minutes > 0) {
        minutes--
    }
})

input.onButtonPressed(Button.B, function () {
    if (setting) {
        minutes++
    }
})

input.onButtonPressed(Button.AB, function () {
    if (setting) {
        seconds = minutes * 60
        setting = false
    }
})

input.onGesture(Gesture.Shake, function () {
    setting = true
})

basic.forever(function () {
    if (setting) {
        basic.showNumber(minutes)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
    } else {
        if (seconds >= 0) {
            basic.showNumber(seconds)
            basic.pause(1000)
            seconds--
        } else {
            setting = true
        }
    }
})
