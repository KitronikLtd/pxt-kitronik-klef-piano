#include "pxt.h"
using namespace pxt;

/**
 * This is required C++ code for the :KLEF Piano extension
 */
//% color=#00A654 weight=100
namespace Kitronik_Piano {

    void setSilence() {
        uBit.audio.mixer.setSilenceLevel(0.0f);
    }
}
