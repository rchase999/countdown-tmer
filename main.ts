input.onButtonPressed(Button.A, function () {
    if (start == 1) {
        minutes += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    start = 0
    second = minutes * 60
})
input.onButtonPressed(Button.B, function () {
    if (start == 1) {
        minutes += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    start = 1
})
let minutes = 0
let second = 0
let start = 0
start = 1
second = 0
minutes = 0
basic.forever(function () {
    if (start == 1) {
        basic.showNumber(minutes)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
    } else {
        while (second >= 0) {
            if (start == 0) {
                if (second >= 100 && second <= 1000) {
                    basic.showNumber(second)
                    second += -3
                } else if (second >= 10 && second <= 100) {
                    basic.showNumber(second)
                    second += -2
                } else {
                    basic.showNumber(second)
                    basic.pause(1000)
                    second += -1
                }
            } else {
                break;
            }
        }
        start = 1
    }
})
