## 0.9.7 (2017-10-24)

### New
- Added worker to `enableBluetooth` and `connectPrinter()` methods so you can use loading or similar while waiting
- `enableBluetooth` method finally returns promise that is not hardcoded with fixed timeout, so timeout is not used at this moment, will use it to define timeout of enabling bluetooth.



## 0.9.6 (2017-09-11)

### New
- Added new methods `isBluetoothEnabled()` and `isConnected()`;

### Fixes

### Breaking changes
 - Changed method name from `EnableBluetooth()` to `enableBluetooth()`

## 0.9.5 (2017-09-02)

First version published

