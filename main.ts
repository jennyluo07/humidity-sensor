basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    false,
    true
    )
    if (0 == 0) {
        basic.showNumber(dht11_dht22.readData(dataType.humidity))
    }
})
