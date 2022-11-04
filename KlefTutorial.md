### @activities true
### @explicitHints true

# Kitronik :KLEF Piano Setup

## Introduction
### Introduction @unplugged
Learn how to use the :KLEF Piano's capacitive touch pads and on-board speaker to create your own piano.
![:KLEF Piano icon](https://github.com/KitronikLtd/pxt-kitronik-klef-piano/assets/icon.png)

### Step 1
The quickest way to get started with the :KLEF Piano is to add the ``||Kitronik_Piano.setup full piano||`` block to the ``||basic:forever||`` loop.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    Kitronik_Piano.fullPianoPlay()
})
```

### Step 2
To change the length of the notes played by the :KLEF Piano add the ``||Kitronik_Piano.set note length 250 ms||`` block into the ``||basic:on start||`` block.

#### ~ tutorialhint
```blocks
Kitronik_Piano.setNoteLength(250)
basic.forever(function () {
    Kitronik_Piano.fullPianoPlay()
})
```

### Step 3
If you have a @boardname@ connected, click ``|Download|`` to transfer your code and switch on your :KLEF Piano. Try pressing each of the keys and see what they do.

## Add your own Notes
### Add your own Notes @unplugged
To start customising the :KLEF Piano, we need to code the keys to play a tone when pressed.
![:KLEF Piano icon](https://github.com/KitronikLtd/pxt-kitronik-klef-piano/assets/icon.png)

### Step 1
Start by removing the ``||Kitronik_Piano.setup full piano||`` block and the ``||Kitronik_Piano.set note length 250 ms||`` block. Next add an ``||logic:if then||`` block into the ``||basic:forever||`` loop. As the condition for the ``||logic:if then||`` let's add the ``||Kitronik_Piano.key K9 is pressed||`` block to check when the C key is pressed. Inside the ``||logic:if||`` we can then add the tone we want to play from the :KLEF speaker using ``||music:play tone Middle C for 1 beat||``.

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

## Change the piano's settings
### Change the piano's settings @unplugged
Now we'll have a look at altering the :KLEF Piano's settings.
![:KLEF Piano icon](https://github.com/KitronikLtd/pxt-kitronik-klef-piano/assets/icon.png)

### Step 1
One setting we can change on the :KLEF Piano is the volume of the sound output by the speaker. To do this we want to use the ``||music:set volume 50||`` block and add it to the ``||basic:on start||`` block.

#### ~ tutorialhint
```blocks
music.setVolume(50)
```

### Step 2
Next we can adjust the sensitivity of the capactivie touch keys on the :KLEF Piano. This changes how easily the keys on the :KLEF Piano are tiggered by pressing on them. To change the sensitivity we are going to use the ``||Kitronik_Piano.set key sensitivity to 16||`` block by adding it to the ``||basic:on start||`` block.

#### ~ tutorialhint
```blocks
music.setVolume(50)
Kitronik_Piano.setKeySensitivity(16)
```

### Step 3
Finally, we can change the noise threshold of the keys on the :KLEF Piano. This changes how easily the keys on the :KLEF Piano are triggered by electrical noise in the environment. To change the noise threshold we can use the ``||Kitronik_Piano.set noise threshold to 10||`` block by adding it to the ``||basic:on start||`` block.

#### ~ tutorialhint
```blocks
music.setVolume(50)
Kitronik_Piano.setKeySensitivity(16)
Kitronik_Piano.setKeyNoiseThreshold(10)
```

### Step 4
If you have a @boardname@ connected, click ``|Download|`` to transfer your code and switch on your :KLEF Piano. Try pressing each of the keys you programmed.

## Trying different Music blocks on V1 & V2
### Trying different Music blocks on V1 & V2 @unplugged
Next, we'll take a look at some other Music blocks we might want to use for our :KLEF Piano. These blocks will work on both V1 micro:bits and V2 micro:bits.
![:KLEF Piano icon](https://github.com/KitronikLtd/pxt-kitronik-klef-piano/assets/icon.png)

### Step 1
Let's add another ``||logic:if then||`` block to the ``||basic:forever||`` loop for the F key or ``||Kitronik_Piano.K12||`` on the :KLEF Piano. Inside the ``||Kitronik_Piano.key K12 is pressed||`` section we want to play from the :KLEF speaker using ``||music:play melody (melody) at tempo 120 (bpm)||``. On the ``||music:play melody||`` block we can edit the melody played by clicking on the music note then using the editor or gallery to select the melody to play.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K12)) {
        music.playMelody("C5 C B D A E G F ", 120)
    }
})
```

### Step 2
Now we are going to add one more ``||logic:if then||`` to the ``||basic:forever||`` loop for the G key or ``||Kitronik_Piano.K13||`` on the :KLEF Piano. Inside the ``||Kitronik_Piano.key K13 is pressed||`` section we want to play from the :KLEF speaker using ``||music:start melody dadadum repeating once||``. On the ``||music:play melody||`` block we can edit the melody played by clicking on the drop down menu and selecting one of the built-in melody presets.

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
If you have a @boardname@ connected, click ``|Download|`` to transfer your code and switch on your :KLEF Piano. Try pressing each of the keys you programmed.

## Trying different Music blocks on V2 only
### Trying different Music blocks on V2 only @unplugged
Lastly, we'll take a look at some other Music blocks we might want to use for our :KLEF Piano. These blocks will work on only V2 micro:bits.
![:KLEF Piano icon](https://github.com/KitronikLtd/pxt-kitronik-klef-piano/assets/icon.png)

### Step 1
Let's add another ``||logic:if then||`` block to the ``||basic:forever||`` loop for the A key or ``||Kitronik_Piano.K14||`` on the :KLEF Piano. Inside the ``||Kitronik_Piano.key K14 is pressed||`` section we want to play from the :KLEF speaker using ``||music:play sound giggle until done||``. On the ``||music:play sound||`` block we can edit the sound played by clicking on the drop down menu and selecting one of the built-in sound presets.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K14)) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    }
})
```

### Step 2
Now we are going to add one more ``||logic:if then||`` to the ``||basic:forever||`` loop for the B key or ``||Kitronik_Piano.K6||`` on the :KLEF Piano. Inside the ``||Kitronik_Piano.key K6 is pressed||`` section we want to play from the :KLEF speaker using ``||music:play sound (waveform) until done||``. On the ``||music:play sound||`` block we can edit the sound waveform played by clicking on the music note then using the editor or gallery to select the waveform to play.

#### ~ tutorialhint
```blocks
basic.forever(function () {
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K14)) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    }
    if (Kitronik_Piano.keyIsPressed(Kitronik_Piano.PianoKeyAddresses.PIANO_ID_KEY_K6)) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 68, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    }
})
```

### Step 3
If you have a @boardname@ connected, click ``|Download|`` to transfer your code and switch on your :KLEF Piano. Try pressing each of the keys you programmed.
