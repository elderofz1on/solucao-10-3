basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
