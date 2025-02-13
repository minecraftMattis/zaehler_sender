input.onButtonPressed(Button.A, function () {
    zaehler = zaehler - 1
})
input.onButtonPressed(Button.AB, function () {
    zaehler = 0
})
input.onButtonPressed(Button.B, function () {
    zaehler = zaehler + 1
    radio.sendNumber(zaehler)
})
let zaehler = 0
radio.setGroup(255)
zaehler = 0
