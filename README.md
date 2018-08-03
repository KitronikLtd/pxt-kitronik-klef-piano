# pxt-kitronik-klef-piano

Custom blocks for www.kitronik.co.uk/5631 :KLEF Piano for BBC micro:bit

## To use

The main block for driving the Piano returns a true or false statement after checking whether a particular capacitive touch key has been pressed.
This block works best when inserted as the boolean test in 'if' blocks. The music blocks can then be used to create an output through the speaker:
```blocks
if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K9)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
}
```

## Capacitive Touch Settings

It is possible to adjust some of the settings relating to the capacitive touch chip (AT42QT2160).

The sensitivity of the keys is set using the 'set key sensitivity block' - a higher value will make the keys more sensitive to touch (default value is 8):
```blocks
Kitronik_Piano.setKeySensitivity(16)
```

The noise threshold can also be changed. This setting relates to how well the capacitive touch chip copes with background electrical noise - a higher value enables it to cope better (default value is 5):
```blocks
Kitronik_Piano.setKeyNoiseThreshold(10)
```

## Easy setup

A good way to initially test the Piano out is to use the blocks found under the 'More' subsection.
The 'setup full piano' block does exactly what it says - sets up the piano to have notes playing on all the keys, with the ability to shift up and down octaves using the up and down arrows.
```blocks
Kitronik_Piano.fullPianoPlay()
```
The default note length is 500ms when using the full setup block. To change this, use the 'set note length' block on micro:bit startup:
```blocks
Kitronik_Piano.setNoteLength(300)
```
## License

MIT

## Supported Targets