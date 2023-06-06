/**
 * This code starts in radio group 216, where it will display
 * 
 * "Starting Brodcast...". After that, every 5 secs, it will brodcast its
 * 
 * temperature and compass heading. Also, it will send alternating signals
 * 
 * to pin 1 and pin 2, so that 2 LEDS can be sttached and the lights
 * 
 * will alternate between on and off, creating the illusion of processing.
 */
/**
 * Initalisation - micro:bit doesn't like me naming variables called "Light", so the var name is "Light2"
 */
let Light2 = 0
radio.setGroup(216)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P0, 0)
radio.sendString("Starting Brodcast...")
// Light change function
loops.everyInterval(500, function () {
    if (Light2 == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        Light2 = 1
    } else if (Light2 == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        Light2 = 0
    } else {
    	
    }
})
// Compass and temperature function
loops.everyInterval(5000, function () {
    radio.sendString("Temp: " + ("" + input.temperature()))
    radio.sendString("Compass: " + ("" + input.compassHeading()))
})
