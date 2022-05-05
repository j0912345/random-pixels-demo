input.onButtonPressed(Button.A, function () {
    wait_time += 10
})
input.onButtonPressed(Button.B, function () {
    wait_time += -10
})
let wait_time = 60
basic.forever(function () {
    led.toggle(randint(0, 4), randint(0, 4))
    basic.pause(wait_time)
})
