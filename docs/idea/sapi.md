# 微软 S-API 拦截

有一些游戏使用 win 系统的 S-API 语音接口，使用 TTS 方式直接输出语音提示。
想要拦截 S-API 的调用，转接到第三方读屏器上。

初步的想法：
- HOOK
- 伪装为 S-API 可识别的语音引擎

注意 SAPI 使用 COM 调用！

## 参考文档

- [TTS Engine Vendor Porting Guide SAPI 5.4 | Microsoft Learn](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ee431802(v=vs.85))
- [Creating Microsoft SAPI Compliant Application(s) - CodeProject](https://www.codeproject.com/articles/6190/creating-microsoft-sapi-compliant-application-s)
