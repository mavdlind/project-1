input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    basic.showString("\"ANTIDISESTABLISHMENTARIANTISM")
    basic.showIcon(IconNames.Butterfly)
    music.playMelody("D B G E A D A F ", 120)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    music.playMelody("E A F C D B E A ", 120)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    music.playMelody("C D E B - C G E ", 1444)
    led.plot(2, 0)
    led.plotBarGraph(
    5,
    3
    )
    basic.showString("bye bye")
    basic.showIcon(IconNames.Heart)
    music.playMelody("E G D F C E A C ", 120)
})
