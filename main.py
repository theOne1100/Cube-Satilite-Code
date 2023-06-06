"""

Initalisation - micro:bit doesn't like me naming variables called "Light", so the var name is "Light2"

"""
Light2 = 0
radio.set_group(216)
pins.digital_write_pin(DigitalPin.P1, 0)
pins.digital_write_pin(DigitalPin.P0, 0)
radio.send_string("Starting Brodcast...")
"""

This code starts in radio group 216, where it will display

"Starting Brodcast...". After that, every 5 secs, it will brodcast its

temperature and compass heading. Also, it will send alternating signals

to pin 1 and pin 2, so that 2 LEDS can be sttached and the lights

will alternate between on and off, creating the illusion of processing.

"""
# Light change function

def on_every_interval():
    global Light2
    if Light2 == 0:
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P0, 1)
        Light2 = 1
    elif Light2 == 1:
        pins.digital_write_pin(DigitalPin.P1, 1)
        pins.digital_write_pin(DigitalPin.P0, 0)
        Light2 = 0
    else:
        pass
loops.every_interval(500, on_every_interval)

# Compass and temperature function

def on_every_interval2():
    radio.send_string("Temp: " + ("" + str(input.temperature())))
    radio.send_string("Compass: " + ("" + str(input.compass_heading())))
loops.every_interval(5000, on_every_interval2)
