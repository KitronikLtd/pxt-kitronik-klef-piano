/**
 * Kitronik :KLEF Piano for BBC micro:bit MakeCode Package 
 */
//% weight=100 color=#00A654 icon="\uf001" block=":KLEF Piano"
namespace Kitronik_Piano {

    //Constant Variables
    const CHIP_ADDRESS = 0x0D;

    //Enums
    /**
    * micro:bit Piano Capacitive Touch Key Register Values Post Processing
    */
    export enum PianoKeyAddresses {
        //% block="K0"
        PIANO_ID_KEY_K0 = 0x100,
        //% block="K1"
        PIANO_ID_KEY_K1 = 0x200,
        //% block="K2"
        PIANO_ID_KEY_K2 = 0x400,
        //% block="K3"
        PIANO_ID_KEY_K3 = 0x800,
        //% block="K4"
        PIANO_ID_KEY_K4 = 0x1000,
        //% block="K5"
        PIANO_ID_KEY_K5 = 0x2000,
        //% block="K6"
        PIANO_ID_KEY_K6 = 0x4000,
        //% block="K7"
        PIANO_ID_KEY_K7 = 0x8000,
        //% block="K8"
        PIANO_ID_KEY_K8 = 0x01,
        //% block="K9"
        PIANO_ID_KEY_K9 = 0x02,
        //% block="K10"
        PIANO_ID_KEY_K10 = 0x04,
        //% block="K11"
        PIANO_ID_KEY_K11 = 0x08,
        //% block="K12"
        PIANO_ID_KEY_K12 = 0x10,
        //% block="K13"
        PIANO_ID_KEY_K13 = 0x20,
        //% block="K14"
        PIANO_ID_KEY_K14 = 0x40
    }    

    //Variables
    let buff = pins.createBuffer(1);
    let buff2 = pins.createBuffer(2);
    let buff3 = pins.createBuffer(5);
    let buff4 = pins.createBuffer(1);
    let buff5 = pins.createBuffer(16);
    let buff6 = pins.createBuffer(15);
    let keySensitivity = 8;
    let keyNoiseThreshold = 5;
    let keyRegValue = 0x0000;
    let initialisedFlag = 0;
    let octaveFlag = 0;
    let noteLength = 500;

    //Function to initialise the micro:bit Piano (called on first key press after start-up)
    function initPiano(): void {
        pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
        //Startup procedure
        //Test /change pin is low, then test basic communication
        if (pins.digitalReadPin(DigitalPin.P1) == 0) {
            //Reads the chip ID, should be 0x11 (chip ID addr = 0)
            buff[0] = 0
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff, true)
            buff = pins.i2cReadBuffer(CHIP_ADDRESS, 1, false)
            while (buff[0] != 0x11) {
                buff = pins.i2cReadBuffer(CHIP_ADDRESS, 1, false)
            }

            //Change sensitivity (burst length) of keys 0-14 to 8
            buff2[0] = 54
            buff2[1] = keySensitivity
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 55
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 56
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 57
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 58
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 59
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 60
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 61
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 62
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 63
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 64
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 65
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 66
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 67
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 68
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, false)

            //Disable key 15 as it is not used
            buff2[0] = 69
            buff2[1] = 0
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, false)

            //Set Burst Repetition to 5
            buff2[0] = 13
            buff2[1] = keyNoiseThreshold
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, false)

            //Configure Adjacent Key Suppression (AKS) Groups
            //AKS Group 1: ALL KEYS
            buff2[0] = 22
            buff2[1] = 1
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 23
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 24
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 25
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 26
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 27
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 28
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 29
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 30
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 31
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 32
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 33
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 34
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 35
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, true)
            buff2[0] = 36
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, false)

            //Send calibration command
            buff2[0] = 10
            buff2[1] = 1
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff2, false)
        }

        //Read all change status address (General Status addr = 2)
        buff[0] = 2
        pins.i2cWriteBuffer(CHIP_ADDRESS, buff, true)
        buff3 = pins.i2cReadBuffer(CHIP_ADDRESS, 5, false)
        //Continue reading change status address until /change pin goes high
        while (pins.digitalReadPin(DigitalPin.P1) == 0) {
            buff[0] = 2
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff, true)
            buff3 = pins.i2cReadBuffer(CHIP_ADDRESS, 5, false)
        }
        setSilence()
        initialisedFlag = 1
    }

    /**
     *
     */
    //% shim=Kitronik_Piano::setSilence
    function setSilence(): void {
        return;
    }

    /**
     * Set sensitivity of capacitive touch keys, then initialise the IC.
     * A higher value increases the sensitivity (values can be in the range 1 - 32).
     * @param sensitivity is the number to set the burst length for the AT42QT2160 Capacitive Touch IC eg: 8
     */
    //% blockId="kitronik_set_key_sensitivity" block="set key sensitivity to %sensitivity" icon="\uf001"
    //% weight=95 blockGap=8
    //% sensitivity.min=1 sensitivity.max=32
    export function setKeySensitivity(sensitivity: number): void {
        keySensitivity = sensitivity
        initPiano()
    }

    /**
     * Set the noise threshold of capacitive touch keys, then initialise the IC.
     * A higher value enables the piano to be used in areas with more electrical noise (values can be in the range 1 - 63).
     * @param noiseThreshold is the number to set the burst repetition for the AT42QT2160 Capacitive Touch IC eg: 5
     */
    //% blockId="kitronik_set_noise_threshold" block="set noise threshold to %noiseFactor" icon="\uf001"
    //% weight=90 blockGap=8
    //% noiseThreshold.min=1 noiseThreshold.max=63
    export function setKeyNoiseThreshold(noiseThreshold: number): void {
        keyNoiseThreshold = noiseThreshold
        initPiano()
    }

    //Function to read the Key Press Registers
    //Return value is a combination of both registers (3 and 4) which links with the values in 'PianoKeyAddresses'
    function readKeyPress(): number {
        buff[0] = 2
        pins.i2cWriteBuffer(CHIP_ADDRESS, buff, true)
        buff3 = pins.i2cReadBuffer(CHIP_ADDRESS, 5, false)

        //Address 3 is the addr for keys 0-7 (this will then auto move onto Address 4 for keys 8-15, both reads stored in buff2)
        buff[0] = 3
        pins.i2cWriteBuffer(CHIP_ADDRESS, buff, true)
        buff2 = pins.i2cReadBuffer(CHIP_ADDRESS, 2, false)

        //keyRegValue is a 4 byte number which shows which keys are pressed
        keyRegValue = (buff2[1] + (buff2[0]*256));  

        return keyRegValue; 
    }

    /**
     * Set length of tone produced in ms.
     * @param length eg: 500
     */
    //% subcategory=More
    //% blockId="kitronik_set_note_length" block="set note length to %length|ms" icon="\uf001"
    //% weight=90 blockGap=8
    //% length.min=250 length.max=1000
    export function setNoteLength(length: number): void {
        noteLength = length
    }

    /**
     * Determines if a piano key is pressed and returns a true or false output.
     * @param key press to be checked
     */
    //% blockId="kitronik_key_is_pressed" block="key %key|is pressed"
    //% key.fieldEditor="gridpicker" key.fieldOptions.columns=4
    //% weight=100 blockGap=8
    export function keyIsPressed(key: PianoKeyAddresses): boolean {
        let keyPressed = false;

        if (initialisedFlag == 0) {
            initPiano()
        }

        if ((key & readKeyPress()) == key) {
            keyPressed = true;
        }

        return keyPressed;
    }

    /**
     * Check for a key press and play a linked note.
     * This blocks sets up the piano all in one go, assigning 3 octaves of notes to the keys (ideal for an initial test).
     * Length of tone can be set using 'kitronik_set_note_length' block.
     */
    //% subcategory=More
    //% blockId="kitronik_full_piano_play" block="setup full piano" icon="\uf001"
    //% weight=91 blockGap=8
    export function fullPianoPlay(): void {
        //Checks whether the capacitive touch chip has been setup yet, if not, runs the initPiano function
        if (initialisedFlag == 0) {
            initPiano()
        }
        if (pins.digitalReadPin(DigitalPin.P1) == 0) {
            buff[0] = 2
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff, true)
            buff3 = pins.i2cReadBuffer(CHIP_ADDRESS, 5, false)

            //Address 3 is the addr for keys 0-7
            buff[0] = 3
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff, true)
            buff = pins.i2cReadBuffer(CHIP_ADDRESS, 1, false)
            //Address 4 is the addr for keys 8-15
            buff4[0] = 4
            pins.i2cWriteBuffer(CHIP_ADDRESS, buff4, true)
            buff4 = pins.i2cReadBuffer(CHIP_ADDRESS, 1, false)

            if (buff[0] == 0x01) {
                //Switch piano to output a higher pitch set of notes, if upper limit not already reached
                if (octaveFlag != 1) {
                    octaveFlag += 1
                }
            }
            else if (buff[0] == 0x02) {
                //C#
                switch (octaveFlag) {
                    case 0:
                        music.playTone(277, noteLength)
                        break;
                    case 1:
                        music.playTone(554, noteLength)
                        break;
                    case -1:
                        music.playTone(139, noteLength)
                        break;
                }
            }
            else if (buff[0] == 0x04) {
                //D#
                switch (octaveFlag) {
                    case 0:
                        music.playTone(311, noteLength)
                        break;
                    case 1:
                        music.playTone(622, noteLength)
                        break;
                    case -1:
                        music.playTone(156, noteLength)
                        break;
                }
            }
            else if (buff[0] == 0x08) {
                //F#
                switch (octaveFlag) {
                    case 0:
                        music.playTone(370, noteLength)
                        break;
                    case 1:
                        music.playTone(740, noteLength)
                        break;
                    case -1:
                        music.playTone(185, noteLength)
                        break;
                }
            }
            else if (buff[0] == 0x10) {
                //G#
                switch (octaveFlag) {
                    case 0:
                        music.playTone(415, noteLength)
                        break;
                    case 1:
                        music.playTone(831, noteLength)
                        break;
                    case -1:
                        music.playTone(208, noteLength)
                        break;
                }
            }
            else if (buff[0] == 0x20) {
                //A#
                switch (octaveFlag) {
                    case 0:
                        music.playTone(466, noteLength)
                        break;
                    case 1:
                        music.playTone(932, noteLength)
                        break;
                    case -1:
                        music.playTone(233, noteLength)
                        break;
                }
            }
            else if (buff[0] == 0x40) {
                //B
                switch (octaveFlag) {
                    case 0:
                        music.playTone(494, noteLength)
                        break;
                    case 1:
                        music.playTone(988, noteLength)
                        break;
                    case -1:
                        music.playTone(247, noteLength)
                        break;
                }
            }
            else if (buff[0] == 0x80) {
                //C
                switch (octaveFlag) {
                    case 0:
                        music.playTone(523, noteLength)
                        break;
                    case 1:
                        music.playTone(1047, noteLength)
                        break;
                    case -1:
                        music.playTone(262, noteLength)
                        break;
                }
            }
            
            if (buff4[0] == 0x01) {
                //Switch piano to output a lower pitch set of notes, if lower limit not already reached
                if (octaveFlag != -1) {
                    octaveFlag -= 1
                }
            }
            else if (buff4[0] == 0x02) {
                //C
                switch (octaveFlag) {
                    case 0:
                        music.playTone(262, noteLength)
                        break;
                    case 1:
                        music.playTone(523, noteLength)
                        break;
                    case -1:
                        music.playTone(131, noteLength)
                        break;
                }
            }
            else if (buff4[0] == 0x04) {
                //D
                switch (octaveFlag) {
                    case 0:
                        music.playTone(294, noteLength)
                        break;
                    case 1:
                        music.playTone(587, noteLength)
                        break;
                    case -1:
                        music.playTone(147, noteLength)
                        break;
                }
            }
            else if (buff4[0] == 0x08) {
                //E
                switch (octaveFlag) {
                    case 0:
                        music.playTone(330, noteLength)
                        break;
                    case 1:
                        music.playTone(659, noteLength)
                        break;
                    case -1:
                        music.playTone(165, noteLength)
                        break;
                }
            }
            else if (buff4[0] == 0x10) {
                //F
                switch (octaveFlag) {
                    case 0:
                        music.playTone(349, noteLength)
                        break;
                    case 1:
                        music.playTone(698, noteLength)
                        break;
                    case -1:
                        music.playTone(175, noteLength)
                        break;
                }
            }
            else if (buff4[0] == 0x20) {
                //G
                switch (octaveFlag) {
                    case 0:
                        music.playTone(392, noteLength)
                        break;
                    case 1:
                        music.playTone(784, noteLength)
                        break;
                    case -1:
                        music.playTone(196, noteLength)
                        break;
                }
            }
            else if (buff4[0] == 0x40) {
                //A
                switch (octaveFlag) {
                    case 0:
                        music.playTone(440, noteLength)
                        break;
                    case 1:
                        music.playTone(880, noteLength)
                        break;
                    case -1:
                        music.playTone(220, noteLength)
                        break;
                }
            }
        }
    }
}
