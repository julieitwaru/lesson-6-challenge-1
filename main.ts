while (true) {
    console.log("sound level :" + input.soundLevel())
    if (input.soundLevel() > 30) {
        light.setAll(light.rgb(255, 0, 255))
    } else {
        light.setAll(light.rgb(255, 0, 0))
    }
    
}
