### @activities true
### @explicitHints true

# Kitronik :KLEF Piano Setup
## Kitronik :KLEF Piano Setup
### Kitronik :KLEF Piano Setup @unplugged
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

### Step 2
If you have a @boardname@ connected, click ``|Download|`` to transfer your code and switch on your :KLEF Piano. Try pressing each of the keys and see what they do.

# Add your own Notes
## Add your own Notes
### Add your own Notes @unplugged
To start customising the :KLEF Piano, we need to code the keys to play a tone when pressed.

### Step 1
Start by removing the ``||Kitronik_Piano.setup full piano||`` block. Next add an ``||logic:if then||`` block into the ``||basic:forever||`` loop. As the condition for the ``||logic:if then||`` let's add the ``||Kitronik_Piano.key K9 is pressed||`` block to check when the C key is pressed. Inside the ``||logic:if||`` we can then add the tone we want to play from the :KLEF speaker using ``||music:play tone Middle C for 1 beat||``.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K9)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
```

### Step 2
Next we want to add two more ``||logic:if then||`` blocks to the ``||basic:forever||`` loop for the D and E keys or ``||Kitronik_Piano.K10||`` and ``||Kitronik_Piano.K11||`` on the :KLEF Piano. Inside the ``||Kitronik_Piano.key K10 is pressed||`` section we want to play from the :KLEF speaker using ``||music:play tone Middle D for 1 beat||``. And then inside the ``||Kitronik_Piano.key K11 is pressed||`` section we want to play from the :KLEF speaker using ``||music:play tone Middle E for 1 beat||``.

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
Finally, we are going to add two more ``||logic:if then||`` to the ``||basic:forever||`` loop for the C# and D# keys or ``||Kitronik_Piano.K1||`` and ``||Kitronik_Piano.K2||`` on the :KLEF Piano. Inside the ``||Kitronik_Piano.key K1 is pressed||`` section we want to play from the :KLEF speaker using ``||music:play tone Middle C# for 1 beat||``. And then inside the ``||Kitronik_Piano.key K2 is pressed||`` section we want to play from the :KLEF speaker using ``||music:play tone Middle D# for 1 beat||``.

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
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K1)) {
        music.playTone(277, music.beat(BeatFraction.Whole))
    }
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K2)) {
        music.playTone(311, music.beat(BeatFraction.Whole))
    }
})
```

### Step 4
If you have a @boardname@ connected, click ``|Download|`` to transfer your code and switch on your :KLEF Piano. Try pressing each of the keys you programmed.

# Change the piano's settings
## Change the piano's settings
### Change the piano's settings @unplugged
Introduction.

### Step 1
Explain Step 1.

#### ~ tutorialhint
```blocks
music.setVolume(50)
```

### Step 2
Explain Step 2.

#### ~ tutorialhint
```blocks
music.setVolume(50)
Kitronik_Piano.setNoteLength(250)
```

### Step 3
Explain Step 3.

#### ~ tutorialhint
```blocks
music.setVolume(50)
Kitronik_Piano.setNoteLength(250)
Kitronik_Piano.setKeySensitivity(16)
```

### Step 4
Explain Step 4.

#### ~ tutorialhint
```blocks
music.setVolume(50)
Kitronik_Piano.setNoteLength(250)
Kitronik_Piano.setKeySensitivity(16)
Kitronik_Piano.setKeyNoiseThreshold(10)
```

### Step 5
If you have a @boardname@ connected, click ``|Download|`` to transfer your code and switch on your :KLEF Piano. Try pressing each of the keys you programmed.

# Trying different Music blocks
## Trying different Music blocks
### Trying different Music blocks @unplugged
Introduction.

### Step 1
Explain Step 1.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K12)) {
        music.playMelody("C5 C B D A E G F ", 120)
    }
})
```

### Step 2
Explain Step 2.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K12)) {
        music.playMelody("C5 C B D A E G F ", 120)
    }
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K13)) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
```

### Step 3
Explain Step 3.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K12)) {
        music.playMelody("C5 C B D A E G F ", 120)
    }
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K13)) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K14)) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 68, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    }
})
```

### Step 4
Explain Step 4.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K12)) {
        music.playMelody("C5 C B D A E G F ", 120)
    }
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K13)) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K14)) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 68, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    }
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K6)) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    }
})
```

### Step 5
If you have a @boardname@ connected, click ``|Download|`` to transfer your code and switch on your :KLEF Piano. Try pressing each of the keys you programmed.