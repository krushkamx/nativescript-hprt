"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("utils/utils");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/distinctUntilChanged");
var hprt_common_1 = require("./hprt.common");
var BToperator = HPRTAndroidSDK.BTOperator;
var PublicFunction = HPRTAndroidSDK.PublicFunction;
var HPRTPrinterHelper = HPRTAndroidSDK.HPRTPrinterHelper;
var REQUEST_ENABLE_BT = 1;
var onBluetoothEnabledResolve;
var Hprt = (function () {
    function Hprt() {
        this.printer = null;
        this.encoding = java.nio.charset.Charset.forName("UTF-8");
        this.HPRTPrinterHelper = new HPRTAndroidSDK.HPRTPrinterHelper(utils.ad.getApplicationContext(), "MPT-II");
        this.mBluetoothAdapter = android.bluetooth.BluetoothAdapter.getDefaultAdapter();
    }
    Hprt.prototype.enableBluetooth = function (timeout) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var wait = timeout ? timeout : 6000;
            var enableBluetoothWorker = new Worker('./workers/enable-bluetooth');
            enableBluetoothWorker.postMessage({});
            enableBluetoothWorker.onmessage = function (msg) {
                enableBluetoothWorker.terminate();
                if (msg.data.success) {
                    if (msg.data.enabled) {
                        resolve();
                    }
                }
                else {
                    reject(msg.data.message);
                }
            };
            enableBluetoothWorker.onerror = function (err) {
                console.log("An unhandled error occurred in worker: " + err.filename + ", line: " + err.lineno + " :");
                console.log(err.message);
                reject(err.message);
            };
            _this.listenToBluetoothEnabled()
                .subscribe(function (enabled) {
                if (enabled) {
                    resolve();
                }
            });
        });
    };
    Hprt.prototype.isBluetoothEnabled = function () {
        return this.mBluetoothAdapter.isEnabled() && this.mBluetoothAdapter != null ? true : false;
    };
    Hprt.prototype.isBluetoothEnabledPromise = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.mBluetoothAdapter.isEnabled() && _this.mBluetoothAdapter != null) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    };
    ;
    Hprt.prototype.searchPrinters = function () {
        return new Promise(function (resolve, reject) {
            var BluetoothDevice = android.bluetooth.BluetoothDevice;
            var mBtAdapter = android.bluetooth.BluetoothAdapter.getDefaultAdapter();
            var pairedDevices = mBtAdapter.getBondedDevices();
            var printers = [];
            if (pairedDevices.size() > 0) {
                var pairedDevicesArr = pairedDevices.toArray();
                for (var i = 0; i < pairedDevicesArr.length; i++) {
                    var device = "" + pairedDevicesArr[i];
                    var deviceObj = mBtAdapter.getRemoteDevice(device);
                    printers.push(new hprt_common_1.HPRTPrinter(deviceObj.getAddress(), deviceObj.getName()));
                }
            }
            resolve(printers);
        });
    };
    Hprt.prototype.connect = function (portSetting) {
        return new Promise(function (resolve, reject) {
            try {
                var connectPrinterWorker_1 = new Worker('./workers/connect-printer');
                connectPrinterWorker_1.postMessage({ port: portSetting });
                connectPrinterWorker_1.onmessage = function (msg) {
                    connectPrinterWorker_1.terminate();
                    if (msg == -1) {
                        reject("No ports open");
                    }
                    else {
                        resolve();
                    }
                };
                connectPrinterWorker_1.onerror = function (err) {
                    console.log("An unhandled error occurred in worker: " + err.filename + ", line: " + err.lineno + " :");
                    console.log(err.message);
                    reject(err.message);
                };
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Hprt.prototype.disconnect = function () {
        return new Promise(function (resolve, reject) {
            try {
                HPRTAndroidSDK.HPRTPrinterHelper.PortClose();
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Hprt.prototype.isConnected = function () {
        return HPRTAndroidSDK.HPRTPrinterHelper.IsOpened();
    };
    Hprt.prototype.printTextSimple = function (text) {
        if (text) {
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 0, 0);
        }
        return true;
    };
    Hprt.prototype.printText = function (text, alignment, attribute, textSize) {
        var align = alignment || 0;
        var attr = attribute || 0;
        var txtSize = textSize || 0;
        if (text) {
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, align, attr, txtSize);
        }
        return true;
    };
    Hprt.prototype.printTextDouble = function (text) {
        if (text) {
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 48, 0);
        }
        return true;
    };
    Hprt.prototype.printTextDoubleHeight = function (text) {
        if (text) {
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 16, 0);
        }
        return true;
    };
    Hprt.prototype.printTextDoubleWidth = function (text) {
        if (text) {
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 32, 0);
        }
        return true;
    };
    Hprt.prototype.printTextUnderline = function (text) {
        if (text) {
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 4, 0);
        }
        return true;
    };
    Hprt.prototype.printTextBold = function (text) {
        if (text) {
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 2, 0);
        }
        return true;
    };
    Hprt.prototype.printTextMini = function (text) {
        if (text) {
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 1, 0);
        }
        return true;
    };
    Hprt.prototype.printTextWhite = function (text) {
        if (text) {
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 8, 0);
        }
        return true;
    };
    Hprt.prototype.printTextLeft = function (text) {
        if (text) {
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 0, 0);
        }
        return true;
    };
    Hprt.prototype.printTextCenter = function (text) {
        if (text) {
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 1, 0, 0);
        }
        return true;
    };
    Hprt.prototype.printTextRight = function (text) {
        if (text) {
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 2, 0, 0);
        }
        return true;
    };
    Hprt.prototype.newLine = function (lines) {
        var line = lines || 1;
        for (var i = 0; i < line; i++) {
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText("\n");
        }
        return true;
    };
    Hprt.prototype.printQrCode = function (text, alignment, attribute, textSize) {
        var align = alignment || 0;
        var attr = attribute || 0;
        var txtSize = textSize || 0;
        if (text) {
            HPRTAndroidSDK.HPRTPrinterHelper.PrintQRCode(text, align, attr, txtSize);
        }
        return true;
    };
    Hprt.prototype.horizontalLine = function () {
        var line = "--------------------------------";
        HPRTAndroidSDK.HPRTPrinterHelper.PrintText(line, 0, 0, 0);
        return true;
    };
    Hprt.prototype.testPrint = function () {
        return new Promise(function (resolve, reject) {
            var strPrintText = "Hello world";
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(strPrintText + "\n", 0, 0, 0);
            resolve();
        });
    };
    Hprt.prototype.toBytes = function (val) {
        return new java.lang.String(val).getBytes(this.encoding);
    };
    Hprt.prototype.LanguageEncode = function () {
        try {
            var PFun = new HPRTAndroidSDK.PublicFunction(utils.ad.getApplicationContext());
            var sLanguage = PFun.ReadSharedPreferencesData("Codepage").split(",")[1].toString();
            var sLEncode = "gb2312";
            var intLanguageNum = 0;
            sLEncode = PFun.getLanguageEncode(sLanguage);
            intLanguageNum = PFun.getCodePageIndex(sLanguage);
            HPRTAndroidSDK.HPRTPrinterHelper.SetCharacterSet(intLanguageNum);
            HPRTAndroidSDK.HPRTPrinterHelper.LanguageEncode = sLEncode;
            return sLEncode;
        }
        catch (e) {
            console.log("Error in LanguageEncode()");
            return "";
        }
    };
    Hprt.prototype.getEncodedString = function (val) {
        var parts = val;
        if (typeof val === 'string') {
            parts = val.split(',');
            if (parts[0].indexOf('x') == -1) {
                return null;
            }
        }
        var result = Array.create("byte", parts.length);
        for (var i = 0; i < parts.length; i++) {
            result[i] = parts[i];
        }
        return result;
    };
    Hprt.prototype.AfterPrintAction = function () {
        try {
            HPRTPrinterHelper.PrintAndFeed(PrinterProperty.TearSpacing);
        }
        catch (e) {
            console.log("AfterPrintAction", e);
        }
    };
    Hprt.prototype.listenToBluetoothEnabled = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.isBluetoothEnabledPromise()
                .then(function (enabled) { return observer.next(enabled); });
            var intervalHandle = setInterval(function () {
                _this.isBluetoothEnabledPromise()
                    .then(function (enabled) { return observer.next(enabled); });
            }, 1000);
            return function () { return clearInterval(intervalHandle); };
        })
            .distinctUntilChanged();
    };
    return Hprt;
}());
exports.Hprt = Hprt;
var PrinterProperty = (function () {
    function PrinterProperty() {
    }
    return PrinterProperty;
}());
PrinterProperty.Barcode = "";
PrinterProperty.PrintableWidth = 0;
PrinterProperty.Cut = false;
PrinterProperty.CutSpacing = 0;
PrinterProperty.TearSpacing = 0;
PrinterProperty.ConnectType = 0;
PrinterProperty.Cashdrawer = false;
PrinterProperty.Buzzer = false;
PrinterProperty.Pagemode = false;
PrinterProperty.PagemodeArea = "";
PrinterProperty.GetRemainingPower = false;
PrinterProperty.SampleReceipt = true;
PrinterProperty.StatusMode = 0;
exports.PrinterProperty = PrinterProperty;
//# sourceMappingURL=hprt.android.js.map