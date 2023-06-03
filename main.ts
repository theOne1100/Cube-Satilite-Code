let Light2 = 0
radio.setGroup(216)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P0, 0)
radio.sendString("Starting Brodcast...")
loops.everyInterval(500, function on_every_interval() {
    
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
loops.everyInterval(5000, function on_every_interval2() {
    radio.sendString("Temp: " + ("" + ("" + input.temperature())))
    radio.sendString("Compass: " + ("" + ("" + input.compassHeading())))
})
