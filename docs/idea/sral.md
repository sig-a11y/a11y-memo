# 跨平台 A11y 输出库

现有参考
- The mod uses the Tolk library on windows, libspeechdwrapper on linux and libspeak on mac for interacting with the active screen reader.
    https://github.com/khanshoaib3/stardew-access#introduction
- The MacOSX version uses Cocoa NSSpeechSynthesizer, Windows uses Speech API, Linux uses QtTextToSpeech.
    https://github.com/Flameborn/libspeak

## Windows

- Speech API
- Tolk

## Linux

- libspeechdwrapper ==> ilyapashuk/go-speechd
SpeechDispatcher speech server
- QtTextToSpeech

## MacOSX

- Cocoa NSSpeechSynthesizer
