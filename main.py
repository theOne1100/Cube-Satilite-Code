Light2 = 0
radio.set_group(216)
pins.digital_write_pin(DigitalPin.P1, 0)
pins.digital_write_pin(DigitalPin.P0, 0)
radio.send_string("Starting Brodcast...")

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

def on_every_interval2():
    radio.send_string("Temp: " + ("" + str(input.temperature())))
    radio.send_string("Compass: " + ("" + str(input.compass_heading())))
loops.every_interval(5000, on_every_interval2)
