// Test file for Kitronik :KLEF Piano with Capacitive Touch Keys for BBC micro:bit
// Sets the key sensitivity to 16
// Sets the key noise threshold to 10
// Sets up the white keys on the piano to play the corresponding notes through the on-board speaker
Kitronik_Piano.setKeySensitivity(16)
Kitronik_Piano.setKeyNoiseThreshold(10)
basic.forever(() => {
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K9)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K10)) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K11)) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K12)) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K13)) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K14)) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K6)) {
        music.playTone(494, music.beat(BeatFraction.Whole))
    } else if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K7)) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})