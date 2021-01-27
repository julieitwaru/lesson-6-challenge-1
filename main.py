while True:
    print("sound level :" + input.sound_level())
    if input.sound_level() > 30:
        light.set_all(light.rgb(255,0,255))
    else:
        light.set_all(light.rgb(255,0,0))