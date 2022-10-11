basic.forever(function on_forever() {
    dht11_dht22.queryData(DHTtype.DHT11, DigitalPin.P0, true, false, true)
    if ((0 as any) == (0 as any)) {
        basic.showNumber(dht11_dht22.readData(dataType.humidity))
    }
    
})
