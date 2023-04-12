let Velocidad = 40
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Velocidad)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Velocidad)
        basic.pause(2000)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
    }
})
