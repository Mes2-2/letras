input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("C")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
})
basic.forever(function () {
    basic.showString("D")
})
