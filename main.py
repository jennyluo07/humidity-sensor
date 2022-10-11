def on_forever():
    dht11_dht22.query_data(DHTtype.DHT11, DigitalPin.P0, True, False, True)
    if 0 == 0:
        basic.show_number(dht11_dht22.read_data(dataType.HUMIDITY))
basic.forever(on_forever)
