# cordova-barcode-scanner

Barcode scanner in Cordova using Dynamsoft Barcode Reader

![Barcode Reader](https://user-images.githubusercontent.com/5462205/140495899-ab2e424c-1919-4628-acda-7a67c028ec88.jpg)

The cordova plugin is used for Android and iOS: [cordova-plugin-dynamsoft-barcode-reader](https://github.com/xulihang/cordova-plugin-dynamsoft-barcode-reader).


If you encounter the following error when you are building an Android project:

```
No version of NDK matched the requested version 21.0.6113669. Versions available locally: 21.1.6352462, 22.1.7171670
```

You can specify the `ndkVersion` in `platforms\android\app\build.gradle`:

```
ndkVersion '22.1.7171670'
```

