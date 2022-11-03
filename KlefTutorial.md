### @activities true
### @explicitHints true

# Kitronik :KLEF Piano Setup

## Introduction
### Introduction Step @unplugged
Learn how to use the :KLEF Piano's capacitive touch pads and on-board speaker to create your own piano.
![:KLEF Piano icon](https://github.com/KitronikLtd/pxt-kitronik-klef-piano/blob/pxt-tutorial/icon.png)

### Step 1
The quickest way to get started with the :KLEF Piano is to add the ``||Kitronik_Piano.setup full piano||`` block to the ``||basic:forever||`` loop.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    Kitronik_Piano.fullPianoPlay()
})
```

## Add your own notes
### Step 1
Explain Step 1.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K9)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
```

### Step 2
Explain Step 2.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K9)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K10)) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K11)) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
})
```

### Step 3
Explain Step 3.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K9)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K1)) {
        music.playTone(277, music.beat(BeatFraction.Whole))
    }
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K10)) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K2)) {
        music.playTone(311, music.beat(BeatFraction.Whole))
    }
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K11)) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
})
```