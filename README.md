# Nativescript HPRT Thermal Bluetooth Printer

This plugin uses HPRT SDK for Android and iOS *(coming soon)* from [HPRT](https://www.hprt.com/). At this moment it is tested on mobile bluetooth thermal printers that use 57mm (2.24") rolls. The SDK supports also wifi and other printer features that are not included *(yet)*, we are open for PRs and contributions.

<img src="https://github.com/krushkamx/nativescript-hprt/raw/master/media/demo-android.gif" width="400px" height="224px" />

## Installation

```javascript
tns plugin add nativescript-hprt
```

## Demo

You can find demo app here https://github.com/krushkamx/nativescript-hprt-demo

## API

### Importing the plugin

```typescript
import { Component, OnInit } from "@angular/core";
import { Hprt, HPRTPrinter } from "nativescript-hprt";

export class YourClass implements OnInit {
    private hprt: Hprt;
  
    constructor() {
        this.hprt = new Hprt();
    }

    ngOnInit(): void {
        
        // Optional, you can enable bluetooth at init (Android only)
        this.enableBluetooth();

    }
}
```

### `enableBluetooth`

Enables bluetooth if it's turned off, it receives timout value, at this moment it is timeout after which this promise resolves, will try to make automatic. You can call this from `ngOnInit()` or have a button.

```typescript
this.hprt.enableBluetooth().then((res) => {
    console.log("BT Enabled", res);
}, (err) => {
    console.log("Error", err);
})
```

| Property | Default | Description |
| --- | --- | --- |
| timeout | 6000 | Value in ms after which promise resolves, bluetooth device normally gets connected between 2-4s |

### `isBluetoothEnabled`

Returns `true` or `false` depending on bluetooth state

```typescript
let isBluetoothEnabled = this.hprt.isBluetoothEnabled();
```


### `searchPrinters`

It returns array of printers discovered.

```typescript
printers: Array<HPRTPrinter>;

ngOnInit() {    
    this.printers = [];
}

this.hprt.searchPrinters().then(printers => {
    this.printers = printers;
});
```

### `connect`

You should call this after bluetooth is turned on.

```typescript
this.hprt.connect(printer).then((res) => {
    console.log("Printer connected");
}, (err) => {
    console.log("Connect error", err)
})
```
| Property | Default | Description |
| --- | --- | --- |
| printer | *Required* | Printer object you get from printer search |

### `disconnect`

Disconnect connected printer, no parameter needed.

```typescript
this.hprt.disconnect().then((res) => {
    console.log("Disconnected");
}, (err) => {
    console.log("error", err)
})
```

### `isConnected`

Returns `true` or `false` if printer is connected. Useful to call before you perform some print action, so you can connect to printer automatically or manually.

```typescript
let isConnected = this.hprt.isConnected();
```

## Printing API

You should call this after you've connected to printer

### `printTextSimple`

Prints simple text, default styles.

```typescript
this.hprt.printTextSimple("Hello world");
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| text | string | *Required* | Prints simple text, default styles. |



### `printText`

Advanced text printing

```typescript
this.hprt.printText("Hello world", 1, 48, 0);
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| alignment | number | 0 | Left: 0, Center: 1, Right: 2 
| attribute | number | 0 | Sets style attributes. Double height: 16, Double Width: 32,  Underline: 4, Bold: 2, Mini: 1, White text: 8. You can combine styles by setting sum of styles. Example: Mini + Bold = 3, Double height + width = 48
| textSize | number | 0 | Still trying to figure out how this value is used

### `printTextDouble`

Prints double size text

```typescript
this.hprt.printTextDouble("Hello world");
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| text | string | *Required* | Double text |

### `printTextDoubleHeight`

Prints double height text

```typescript
this.hprt.printTextDoubleHeight("Hello world");
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| text | string | *Required* | Double height text |

### `printTextDoubleWidth`

Prints double width text

```typescript
this.hprt.printTextDoubleWidth("Hello world");
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| text | string | *Required* | Double width text |

### `printTextUnderline`

Prints underline text

```typescript
this.hprt.printTextUnderline("Hello world");
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| text | string | *Required* |  |


### `printTextBold`

Prints text in bold

```typescript
this.hprt.printTextBold("Hello world");
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| text | string | *Required* |  |

### `printTextMini`

Prints mini text

```typescript
this.hprt.printTextMini("Hello world");
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| text | string | *Required* |  |

### `printTextWhite`

Prints text in white

```typescript
this.hprt.printTextWhite("Hello world");
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| text | string | *Required* |  |

### `printTextLeft`

Prints left text

```typescript
this.hprt.printTextLeft("Hello world");
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| text | string | *Required* |  |

### `printTextCenter`

Prints center text

```typescript
this.hprt.printTextCenter("Hello world");
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| text | string | *Required* |  |


### `printTextRight`

Prints right text

```typescript
this.hprt.printTextRight("Hello world");
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| text | string | *Required* |  |

## Helpers API

### `newLine`

Adds lines (breaks), useful at the end of receipt when you want to leave space to cut it. 

```typescript
this.hprt.newLine(3);
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| lines | number | 1 | *Optional* |

### `horizontalLine`

Adds horizontal line (-------) in 32 characters. 

```typescript
this.hprt.horizontalLine();
```

## Tested with printers
 - HPRT mobile printers
 - G00JPRT
 - Bixolon SPP-R200III
 - *Let us know if works with some other thermal mobile printer*

## Tested with Android phones
 - Samsung S3, Android 4.4
 - Redmi 4A, Android 6