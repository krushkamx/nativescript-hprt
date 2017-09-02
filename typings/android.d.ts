import androidcontentContext = android.content.Context;
import androidhardwareusbUsbDevice = android.hardware.usb.UsbDevice;
import androidgraphicsBitmap = android.graphics.Bitmap;
import javautilList = java.util.List;
import androidosHandler = android.os.Handler;
import javautilArrayList = java.util.ArrayList;
import androidwidgetArrayAdapter = android.widget.ArrayAdapter;
import androidcontentIntent = android.content.Intent;
import javaioFile = java.io.File;
import javaioInputStream = java.io.InputStream;
import javaioOutputStream = java.io.OutputStream;
import javaioFileDescriptor = java.io.FileDescriptor;
import javautilVector = java.util.Vector;

/// <reference path="./_helpers.d.ts" />

declare module HPRTAndroidSDK {
	export class BTOperator {
		public static isShake: boolean;
		public WriteData(param0: native.Array<number>, param1: number): number;
		public constructor(param0: androidcontentContext, param1: string);
		public Readdata(param0: native.Array<number>): number;
		public constructor(param0: androidcontentContext);
		public OpenPort(param0: string, param1: string): boolean;
		public ClosePort(): boolean;
		public GetPortType(): string;
		public WriteData(param0: native.Array<number>): number;
		public SetReadTimeout(param0: number): void;
		public ReadData(param0: number): native.Array<number>;
		public InitPort(): void;
		public GetPrinterName(): string;
		public GetPrinterModel(): string;
		public SetWriteTimeout(param0: number): void;
		public WriteData(param0: native.Array<number>, param1: number, param2: number): number;
		public OpenPort(param0: androidhardwareusbUsbDevice): boolean;
		public OpenPort(param0: string): boolean;
		public IsOpen(): boolean;
		public IsBLEType(param0: boolean): void;
	}
	export module BTOperator {
		export class Readerthread {
			public run(): void;
			public constructor(param0: HPRTAndroidSDK.BTOperator, param1: native.Array<number>);
		}
	}
}

declare module HPRTAndroidSDK {
	export class HPRTConst {
		public static FOLDER: string;
		public static FOLDER_NAME: string;
		public static PRINTP: string;
		public static PRINHM: string;
		public constructor();
	}
}

declare module HPRTAndroidSDK {
	export class HPRTPrinterHelper {
		public BitmapWidth: number;
		public PrintDataHeight: number;
		public static LanguageEncode: string;
		public static BetweenWriteAndReadDelay: number;
		public static isLog: boolean;
		public static isWriteLog: boolean;
		public static isHex: boolean;
		public static HPRT_MODEL_TP801: number;
		public static HPRT_MODEL_TP805: number;
		public static HPRT_MODEL_TP806: number;
		public static HPRT_MODEL_DT210: number;
		public static HPRT_MODEL_PPT2_A: number;
		public static HPRT_MODEL_PPT2_UR: number;
		public static HPRT_MODEL_PPTD3: number;
		public static HPRT_MODEL_MPT2: number;
		public static HPRT_MODEL_MPT3: number;
		public static HPRT_MODEL_MLP2: number;
		public static HPRT_MODEL_MPS3: number;
		public static HPRT_MODEL_MPD2: number;
		public static HPRT_MODEL_MPT_E2: number;
		public static HPRT_MODEL_MPT8: number;
		public static HPRT_MODEL_PT541: number;
		public static HPRT_MODEL_PT562: number;
		public static HPRT_MODEL_PT721: number;
		public static HPRT_MODEL_LP106B: number;
		public static HPRT_MODEL_LPQ58: number;
		public static HPRT_MODEL_LPQ80: number;
		public static HPRT_MODEL_UNKNOWN: number;
		public static HPRT_MODEL_INVALID: number;
		public static HPRT_MODEL_MAX: number;
		public static HPRT_FULL_CUT: number;
		public static HPRT_FULL_CUT_FEED: number;
		public static HPRT_PARTIAL_CUT: number;
		public static HPRT_PARTIAL_CUT_FEED: number;
		public static HPRT_MODEL_PROPERTY_KEY_ID: number;
		public static HPRT_MODEL_PROPERTY_KEY_NAME: number;
		public static HPRT_MODEL_PROPERTY_PRINTER_CLASS: number;
		public static HPRT_MODEL_PROPERTY_CONNECT_TYPE: number;
		public static HPRT_MODEL_PROPERTY_KEY_MANUFACTURE: number;
		public static HPRT_MODEL_PROPERTY_KEY_IDENTITY: number;
		public static HPRT_MODEL_PROPERTY_KEY_DESCRIPTION: number;
		public static HPRT_MODEL_PROPERTY_KEY_WIDTH: number;
		public static HPRT_MODEL_PROPERTY_KEY_VID: number;
		public static HPRT_MODEL_PROPERTY_KEY_PID: number;
		public static HPRT_MODEL_PROPERTY_KEY_FONTS: number;
		public static HPRT_MODEL_PROPERTY_KEY_BOLD: number;
		public static HPRT_MODEL_PROPERTY_KEY_UNDERLINE: number;
		public static HPRT_MODEL_PROPERTY_KEY_MAX_FONT_SCALE_SIZE: number;
		public static HPRT_MODEL_PROPERTY_KEY_DPI: number;
		public static HPRT_MODEL_PROPERTY_KEY_MOTION_V: number;
		public static HPRT_MODEL_PROPERTY_KEY_MOTION_H: number;
		public static HPRT_MODEL_PROPERTY_KEY_COMPRESS_MODE: number;
		public static HPRT_MODEL_PROPERTY_KEY_PAGEMODE: number;
		public static HPRT_MODEL_PROPERTY_KEY_PAGEMODE_AREA: number;
		public static HPRT_MODEL_PROPERTY_KEY_PRINT_RECEIPT: number;
		public static HPRT_MODEL_PROPERTY_KEY_DRAWER: number;
		public static HPRT_MODEL_PROPERTY_KEY_BEEP: number;
		public static HPRT_MODEL_PROPERTY_KEY_CUT: number;
		public static HPRT_MODEL_PROPERTY_KEY_CUT_SPACING: number;
		public static HPRT_MODEL_PROPERTY_KEY_TEAR_SPACING: number;
		public static HPRT_MODEL_PROPERTY_KEY_BARCODE: number;
		public static HPRT_MODEL_PROPERTY_KEY_BITMAPMODE: number;
		public static HPRT_MODEL_PROPERTY_KEY_GET_REMAINING_POWER: number;
		public static HPRT_MODEL_PROPERTY_KEY_STATUS_MODEL: number;
		public static HPRT_MODEL_PROPERTY_TYPE_BOOL: number;
		public static HPRT_MODEL_PROPERTY_TYPE_STRING: number;
		public static HPRT_MODEL_PROPERTY_TYPE_INT: number;
		public static HPRT_MODEL_PROPERTY_TYPE_BYTE: number;
		public static ACTIVITY_IMAGE_FILE: number;
		public static ACTIVITY_PRNFILE: number;
		public static ACTIVITY_CONNECT_BT: number;
		public static ACTIVITY_CONNECT_WIFI: number;
		public static BC_UPCA: number;
		public static BC_UPCE: number;
		public static BC_EAN13: number;
		public static BC_EAN8: number;
		public static BC_CODE39: number;
		public static BC_ITF: number;
		public static BC_CODEBAR: number;
		public static BC_CODE93: number;
		public static BC_CODE128: number;
		public static PRINTER_REAL_TIME_STATUS_ITEM_PRINTER: number;
		public static PRINTER_REAL_TIME_STATUS_ITEM_ONOFFLINE: number;
		public static PRINTER_REAL_TIME_STATUS_ITEM_ERROR: number;
		public static PRINTER_REAL_TIME_STATUS_ITEM_PAPER: number;
		public static replaceBitmapColor(param0: androidgraphicsBitmap, param1: number, param2: number): androidgraphicsBitmap;
		public static GetKeyCodeListDownloadGraphicsMemory(param0: native.Array<string>): number;
		public static PrintAndReverseFeedNLine(param0: number): number;
		public static PrintBinaryFile(param0: string): boolean;
		public static CutPaper(param0: number, param1: number): number;
		public static SelectStandardMode(): number;
		public static SetHRIPosition(param0: number): number;
		public static EHSendAttestationData(param0: native.Array<number>): number;
		public static DefineNVGraphicsDataColumn(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): number;
		public static ExecuteMacro(param0: number, param1: number, param2: number): number;
		public static DeleteAllNVImage(): number;
		public static PrintImage(param0: string, param1: number, param2: number, param3: number): number;
		public static SmartCardSelectFile(param0: native.Array<number>): number;
		public static PrintRasterImageCMDHeader(param0: number, param1: number, param2: number): number;
		public static EnableRealTimeCommand(param0: native.Array<number>): number;
		public static Printtextbitmap(param0: number, param1: string, param2: number, param3: number): void;
		public static GetPeripheralDeviceStatus(param0: native.Array<number>): number;
		//public static PortOpen(param0: androidhardwareusbUsbDevice): number;
		public static DefineNVGraphicsDataRaster(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): number;
		public IsBLEType(param0: boolean): void;
		public static SendRealTimeGeneratePulse(param0: number, param1: number): number;
		public static SetPDF417ModuleWidth(param0: number): number;
		public static SetTextLineSpace(param0: number): number;
		public static EHEnable(param0: boolean): number;
		public static SetHRIFont(param0: number): number;
		public static SetReferenceDotDensityForGraphices(param0: number): number;
		public static SetBoldMode(param0: boolean): number;
		public static SelectPageMode(): number;
		public static GetRealTimeStatus(param0: number, param1: native.Array<number>): number;
		public static SetHorizontalAndVerticalMotionUnits(param0: number, param1: number): number;
		public static PrintRasterImage(param0: number, param1: number, param2: number, param3: native.Array<number>): number;
		public static GetPrinterID(param0: number): number;
		public static GetRemainPower(param0: native.Array<number>): number;
		public static PrintAndCarriageReturn(): number;
		public static DeleteSpecifiedMemoryGraphics(param0: string): number;
		public static GotoNextLabel(): number;
		public static SetRightSideCharacterSpacing(param0: number): number;
		public static SetUnderlineMode(param0: boolean): number;
		public static CutPaper(param0: number): number;
		public static setIP(param0: native.Array<number>): boolean;
		public static SetPrintSpeed(param0: number): number;
		public static SetPDF417Option(param0: number): number;
		public static WriteData(param0: native.Array<number>): number;
		public static SeletKanjiCharacterMode(): number;
		public static Set1TrackCardReaderMode(): number;
		public static QueryNVStoreCapacity(param0: native.Array<number>): number;
		public static SetCharacterSize(param0: number): number;
		public static SetQRCodeMoudleSize(param0: number): number;
		public static FillBitmapToBufferOfPageMode(param0: androidgraphicsBitmap, param1: number, param2: number): boolean;
		public static DefineDownloadBitImage(param0: number, param1: native.Array<number>): number;
		public static SetDefaultTextLineSpace(): number;
		public static SetCharacterSet(param0: number): number;
		public static PortType(): string;
		public static QueryNVStoreRemainingCapacity(param0: native.Array<number>): number;
		public static RefreshImageList(param0: javautilList): number;
		public static PrintCurveText(param0: number, param1: number, param2: string): number;
		public static SmartCardReadRecord(param0: number, param1: number, param2: number): number;
		public static PrintAndReturnStandardMode(): number;
		public static ReadIP(param0: native.Array<number>): boolean;
		public static PrintPDF417(param0: string): number;
		public static GetRandomDataFromSmartCard(): number;
		public static PrintQRCode(param0: string, param1: number, param2: number, param3: number): number;
		public static EnterPrintBackgroundGridMode(param0: number, param1: number): number;
		public static Set12TrackCardReaderMode(): number;
		public static PrintAndReverseFeed(param0: number): number;
		public static PrintNVImage(param0: string, param1: number): number;
		public static ExecuteTestPrint(param0: number, param1: number): number;
		public static SetTurn90ClockwiseRotationMode(param0: number): number;
		public static StartEndMacro(): number;
		public static PrintQRCode_MPT(param0: string, param1: number, param2: number, param3: number): number;
		public static PrintAndFeedNLine(param0: number): number;
		public static PrintBarCode(param0: number, param1: string): number;
		public static EHSetEncryptionMode(param0: number): number;
		public static GetTransmitStatus(param0: number, param1: native.Array<number>): number;
		public static ExitPrintBackgroundGridMode(): number;
		public static OpenCashdrawer(param0: number): number;
		public static BeepBuzzer(param0: number, param1: number, param2: number): number;
		public static GetPrinterVersion(param0: native.Array<number>): number;
		public static PrintAndLineFeed(): number;
		public static SetBarcodeHeight(param0: number): number;
		public static SetLeftMargin(param0: number): number;
		public static PrintData(param0: native.Array<number>): number;
		public static SetPageModeRelativeVerticalPosition(param0: number): number;
		public static SetQRCodeErrorLevel(param0: number): number;
		public static SetPDF417ErrorLevel(param0: number, param1: number): number;
		public static PrintPDF417(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): number;
		public static PrintNVBitImage(param0: number, param1: number): number;
		public static EHSetEncryptionAllTrack(): number;
		public constructor(param0: androidcontentContext, param1: string);
		public static SetUpsideDownPrintMode(param0: boolean): number;
		public static SetPDF417RowHeight(param0: number): number;
		public static DefineNVBitImageFMode(param0: number, param1: native.Array<number>): number;
		public static CancelKanjiCharacterMode(): number;
		public static PrintDataInPageMode(): number;
		public static SetBarcodeWidth(param0: number): number;
		public static PrintText(param0: string): number;
		public static ReadNVUserMemory(param0: number, param1: number, param2: native.Array<number>): number;
		public static CancelReadSmartCard(): number;
		public static DefineNVImage(param0: native.Array<string>, param1: androidosHandler): number;
		public static SelectInternationalCharacterSet(param0: number): number;
		public static SetAbsolutePrintPosition(param0: number): number;
		public static GetPDF417Size(): number;
		public static FeedPaperToCutPosition(param0: number): number;
		public static SelectCharacterFont(param0: number): number;
		public static PrintText(param0: string, param1: number, param2: number, param3: number): number;
		public static SetPrintMode(param0: number): number;
		public constructor();
		public static SetPrintThermalHeadMode(param0: number): number;
		public static EHReturnAllTrackData(): number;
		public static SetRelativePrintPosition(param0: number): number;
		public static SetBitImageMode(param0: number, param1: number, param2: native.Array<number>): number;
		public static ClearBuffer(): number;
		public static SetPrintAreaWidth(param0: number): number;
		public static DeleteSpecifiedNVImage(param0: string): number;
		public static GetRemainingCapacityOfDownloadGraphicsMemory(param0: native.Array<number>): number;
		public static DeleteAllMemoryGraphics(): number;
		public static PrintDownloadImage(param0: string, param1: number): number;
		public static ClearPageModePrintAreaData(): number;
		public static Set2TrackCardReaderMode(): number;
		public static SetPrintDensity(param0: number): number;
		public static SetPrintHeadToStandbyPosition(): number;
		public static SetJustification(param0: number): number;
		public static SetPrintControlMode(param0: number): number;
		public static SetSmoothingMode(param0: boolean): number;
		public static PrintAndFeed(param0: number): number;
		public static SetPageModePrintArea(param0: number, param1: number, param2: number, param3: number): number;
		public static SetReadSmartCardMode(): number;
		public static SendRealTimeRequest(param0: number): number;
		public static GetSpecifiedRealTimeStatus(param0: number, param1: native.Array<number>): number;
		public static IsOpened(): boolean;
		public static PrintBarCode(param0: number, param1: string, param2: number, param3: number, param4: number, param5: number): number;
		public static bytetoString(param0: native.Array<number>): string;
		public static PrintDownloadBitImage(param0: number): number;
		public static ReadData(param0: number): native.Array<number>;
		public static Initialize(): number;
		public static WriteNVUserMemory(param0: number, param1: number, param2: native.Array<number>): number;
		public static EHReset(): number;
		public static PortOpen(param0: string): number;
		public static PrintQRCode(param0: string): number;
		public static SetOppositeColor(param0: boolean): number;
		public static SetPageModeAbsoluteVerticalPosition(param0: number): number;
		public static CapturePrinterFunction(param0: number, param1: native.Array<number>, param2: native.Array<number>, param3: native.Array<number>): number;
		public static PrintHLines(param0: number, param1: native.Array<number>): number;
		public static PortClose(): boolean;
		public static PrintBitmap(param0: androidgraphicsBitmap, param1: number, param2: number, param3: number): number;
		public static EHRequestAttestationData(): number;
		public CharacterSet(): number;
		public static SetPDF417Columns(param0: number): number;
		public static GetQRCodeSize(): number;
		public static FeedPaperToStartPosition(param0: number): number;
		public static ExecutePowerOffSequence(): number;
		public static SelectPeripheralDevice(param0: number): number;
		public static SetQRCodeModel(param0: number): number;
		public static Set123TrackCardReaderMode(): number;
		public static SetPageModeAbsolutePosition(param0: number, param1: number): number;
		public static ASBEnabled(param0: number): number;
		public static GetPaperSensorStatus(param0: native.Array<number>): number;
		public static SetUnidirectionalPrint(param0: number): number;
		public static SmartCardGetResponse(param0: number): number;
		public static SetPDF417Rows(param0: number): number;
		public static PrintGraphicsDataInBuffer(): number;
		public static DefineDownloadGraphicsDataColumns(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): number;
		public static SetBTName(param0: string): number;
		public static FeedPaperToLabelPeelPosition(param0: number): number;
		public static DefineBufferGraphicsDataRaster(param0: number, param1: number, param2: number, param3: native.Array<number>): number;
		public static bytetohex(param0: native.Array<number>): string;
		public static EHSetDefaultConfiguration(): number;
		public static SetDoubleStrikeMode(param0: boolean): number;
		public static SetSmartCardOperateMode(param0: number): number;
		public static CancelTrackCardReaderMode(): number;
		public static Set3TrackCardReaderMode(): number;
		public static logcat(param0: string): void;
		public static EHSetEncryptionType(param0: number): number;
		public static SetPageModePrintDirection(param0: number): number;
		public static DefineDownloadGraphicsDataRaster(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): number;
		public static DefineBufferGraphicsDataColumns(param0: number, param1: number, param2: number, param3: native.Array<number>): number;
	}
}

declare module HPRTAndroidSDK {
	export class IPort {
		/**
		 * Constructs a new instance of the HPRTAndroidSDK.IPort interface with the provided implementation.
		 */
		public constructor(implementation: {
			IsBLEType(param0: boolean): void;
			SetReadTimeout(param0: number): void;
			SetWriteTimeout(param0: number): void;
			InitPort(): void;
			OpenPort(param0: string): boolean;
			OpenPort(param0: string, param1: string): boolean;
			OpenPort(param0: androidhardwareusbUsbDevice): boolean;
			ClosePort(): boolean;
			WriteData(param0: native.Array<number>): number;
			WriteData(param0: native.Array<number>, param1: number): number;
			WriteData(param0: native.Array<number>, param1: number, param2: number): number;
			ReadData(param0: number): native.Array<number>;
			IsOpen(): boolean;
			GetPortType(): string;
			GetPrinterName(): string;
			GetPrinterModel(): string;
		});
		public static paramPortSetting: string;
		public static PortType: string;
		public static IsPortOpen: boolean;
		public WriteData(param0: native.Array<number>, param1: number): number;
		public OpenPort(param0: string, param1: string): boolean;
		public ClosePort(): boolean;
		public GetPortType(): string;
		public WriteData(param0: native.Array<number>): number;
		public SetReadTimeout(param0: number): void;
		public ReadData(param0: number): native.Array<number>;
		public InitPort(): void;
		public GetPrinterName(): string;
		public GetPrinterModel(): string;
		public SetWriteTimeout(param0: number): void;
		public WriteData(param0: native.Array<number>, param1: number, param2: number): number;
		public OpenPort(param0: string): boolean;
		public OpenPort(param0: androidhardwareusbUsbDevice): boolean;
		public IsOpen(): boolean;
		public IsBLEType(param0: boolean): void;
	}
}

declare module HPRTAndroidSDK {
	export class LogUlit {
		public constructor();
		public static writeFileToSDCard(param0: native.Array<number>, param1: string, param2: string, param3: boolean, param4: boolean): void;
	}
}

declare module HPRTAndroidSDK {
	export class PrinterDataCore {
		public BitmapWidth: number;
		public PrintDataHeight: number;
		public HalftoneMode: number;
		public ScaleMode: number;
		public CompressMode: number;
		public constructor();
		public sysCopy(param0: javautilList): native.Array<number>;
		public PrintDataFormat(param0: androidgraphicsBitmap, param1: number): native.Array<number>;
	}
}


declare module HPRTAndroidSDK {
	export class PublicFunction {
		public static PREFS_NAME: string;
		public constructor();
		public EnableDevice(param0: string): string;
		public GetStringIndex(param0: string, param1: string, param2: number, param3: boolean): number;
		public ReadTxtFile(param0: string): string;
		public sysCopy(param0: javautilList): native.Array<number>;
		public constructor(param0: androidcontentContext);
		public WriteSharedPreferencesData(param0: string, param1: string): void;
		public DisableDevice(param0: string): string;
		public static ExistSDCard(): boolean;
		public ShowMessageDialog(param0: string, param1: string): void;
		public ArrayCopy(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number): native.Array<number>;
		public ReverseString(param0: string): string;
		public getCodePageIndex(param0: string): number;
		public CountSubString(param0: string, param1: string): number;
		public GetSDPicture(): javautilArrayList;
		public getLanguageEncode(param0: string): string;
		public ReadSharedPreferencesData(param0: string): string;
		public CreateRepeatString(param0: string, param1: number): string;
	}
}

declare module HPRTAndroidSDK {
	export class SerialOperator {
		public WriteData(param0: native.Array<number>, param1: number): number;
		public constructor(param0: androidcontentContext, param1: string);
		public Readdata(param0: native.Array<number>): number;
		public OpenPort(param0: string, param1: string): boolean;
		public ClosePort(): boolean;
		public GetPortType(): string;
		public WriteData(param0: native.Array<number>): number;
		public SetReadTimeout(param0: number): void;
		public ReadData(param0: number): native.Array<number>;
		public InitPort(): void;
		public GetPrinterName(): string;
		public GetPrinterModel(): string;
		public SetWriteTimeout(param0: number): void;
		public WriteData(param0: native.Array<number>, param1: number, param2: number): number;
		public OpenPort(param0: string): boolean;
		public OpenPort(param0: androidhardwareusbUsbDevice): boolean;
		public IsOpen(): boolean;
		public IsBLEType(param0: boolean): void;
	}
	export module SerialOperator {
		export class Readerthread {
			public constructor(param0: HPRTAndroidSDK.SerialOperator, param1: native.Array<number>);
			public run(): void;
		}
	}
}

declare module HPRTAndroidSDK {
	export class USBOperator {
		public static STD_USB_REQUEST_GET_DESCRIPTOR: number;
		public static LIBUSB_DT_STRING: number;
		public mUSBDevicesArrayAdapter: androidwidgetArrayAdapter;
		public intPermissionState: number;
		public static PrinterList1: javautilList;
		public static PrinterList2: javautilList;
		public intent: androidcontentIntent;
		public WriteData(param0: native.Array<number>, param1: number): number;
		public constructor(param0: androidcontentContext, param1: string);
		public Readdata(param0: native.Array<number>): number;
		public constructor(param0: androidcontentContext);
		public OpenPort(param0: string, param1: string): boolean;
		public ClosePort(): boolean;
		public GetPortType(): string;
		public WriteData(param0: native.Array<number>): number;
		public SetReadTimeout(param0: number): void;
		public ReadData(param0: number): native.Array<number>;
		public InitPort(): void;
		public GetPrinterName(): string;
		public GetPrinterModel(): string;
		public SetWriteTimeout(param0: number): void;
		public WriteData(param0: native.Array<number>, param1: number, param2: number): number;
		public OpenPort(param0: string): boolean;
		public OpenPort(param0: androidhardwareusbUsbDevice): boolean;
		public IsOpen(): boolean;
		public IsBLEType(param0: boolean): void;
	}
	export module USBOperator {
		export class Readerthread {
			public run(): void;
			public constructor(param0: HPRTAndroidSDK.USBOperator, param1: native.Array<number>);
		}
	}
}


declare module HPRTAndroidSDK {
	export class WiFiOperator {
		public WriteData(param0: native.Array<number>, param1: number): number;
		public constructor(param0: androidcontentContext, param1: string);
		public constructor(param0: androidcontentContext);
		public OpenPort(param0: string, param1: string): boolean;
		public ClosePort(): boolean;
		public GetPortType(): string;
		public WriteData(param0: native.Array<number>): number;
		public SetReadTimeout(param0: number): void;
		public ReadData(param0: number): native.Array<number>;
		public InitPort(): void;
		public GetPrinterName(): string;
		public GetPrinterModel(): string;
		public SetWriteTimeout(param0: number): void;
		public WriteData(param0: native.Array<number>, param1: number, param2: number): number;
		public OpenPort(param0: androidhardwareusbUsbDevice): boolean;
		public OpenPort(param0: string): boolean;
		public IsOpen(): boolean;
		public IsBLEType(param0: boolean): void;
	}
}

declare module HPRTAndroidSDK {
	export class hprt_printer_helper_cmd {
		public hprt_cmd_qr_print_the_symbol_data_mpt_wrap(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>): number;
		public hprt_cmd_print_and_feed_paper_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_select_cut_mode_and_feed_paper_wrap(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_turn_underline_mode_on_off_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_set_head_control_method_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_parse_printer_version_wrap(param0: number, param1: native.Array<number>, param2: native.Array<number>, param3: number): number;
		public hprt_cmd_select_cut_mode_and_cut_paper_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_delete_all_NV_graphics_data_gmode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_select_the_print_control_mode_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_set_2track_card_reader_mode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_cancel_kanji_character_mode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_set_horizontal_tab_positions_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_select_unidirectional_print_mode_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_beep_integrated_beeper_wrap(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number, param6: native.Array<number>): number;
		public hprt_cmd_draw_rectangle_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_turn_double_strike_mode_on_off_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_define_the_NV_graphics_data_column_gmode_wrap(param0: number, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>, param8: number, param9: native.Array<number>): number;
		public hprt_cmd_define_the_downloaded_graphics_data_raster_gmode_wrap(param0: number, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>, param8: number, param9: native.Array<number>): number;
		public hprt_cmd_goto_next_label_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_store_the_graphics_data_in_the_print_buffer_raster_gmode_wrap(param0: number, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>, param8: number, param9: native.Array<number>): number;
		public hprt_cmd_transmit_status_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_start_macro_definition_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_pdf417_store_the_data_in_the_symbol_storage_area_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_delete_the_specified_NV_graphics_data_gmode_wrap(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_execute_power_off_sequence_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_print_and_feed_n_line_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_eh_return_all_track_data_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_enable_disable_ASB_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_set_print_area_in_page_mode_wrap(param0: number, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>): number;
		public hprt_cmd_generate_pulse_wrap(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number, param6: native.Array<number>): number;
		public hprt_cmd_print_and_line_feed_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_print_NV_bit_image_wrap(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_smart_card_get_response_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_select_character_font_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_define_nv_bit_image_fmode_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number, param6: native.Array<number>): number;
		public hprt_cmd_pdf417_set_the_number_of_columns_in_the_data_region_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_select_character_size_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_print_downloaded_bit_image_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_feed_paper_to_the_print_starting_position_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_selecting_mode_of_reading_smart_card_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_transmit_printer_id_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_select_or_cancel_defined_charater_set_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_return_home_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_qr_set_the_size_of_module_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_delete_all_memory_graphics_data_gmode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_select_page_mode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_smart_card_read_record_wrap(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number, param6: native.Array<number>): number;
		public hprt_cmd_transmit_peripheral_device_status_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_print_raster_bit_image_wrap(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: native.Array<number>, param6: number, param7: native.Array<number>): number;
		public hprt_cmd_transmit_status(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>, param4: native.Array<number>): number;
		public hprt_cmd_select_kanji_character_mode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_set_right_side_character_spacing_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_print_the_graphics_data_in_the_print_buffer_gmode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_cancel_print_data_in_page_mode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_set_absolute_vertical_print_position_in_page_mode_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_eh_reset_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_print_the_specified_downloaded_graphics_data_gmode_wrap(param0: number, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>): number;
		public hprt_cmd_feed_paper_to_the_cutting_position_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_set_line_spacing_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_select_the_number_of_parts_for_the_thermal_head_energizing_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_feed_paper_to_the_label_peeling_position_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_print_and_return_standard_mode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_cancel_track_card_reader_mode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_smart_card_select_file_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_set_123track_card_reader_mode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_define_the_NV_graphics_data_cmd_header_raster_gmode_wrap(param0: number, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>): number;
		public hprt_cmd_select_bit_image_mode_wrap(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>): number;
		public hprt_cmd_set_1track_card_reader_mode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_set_print_area_width_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_set_1_2track_card_reader_mode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_eh_enable_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_delete_the_specified_download_memory_graphics_data_gmode_wrap(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_select_default_line_spacing_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_cancel_user_defined_characters_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_transmit_the_NV_graphics_memory_capacity_gmode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_pdf417_set_the_width_of_the_module_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_select_the_print_density_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_get_random_data_from_smart_card_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_transmit_paper_sensor_status_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_eh_set_encryption_type_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_selecting_mode_of_operate_smart_card_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_define_the_NV_graphics_data_raster_gmode_wrap(param0: number, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>, param8: number, param9: native.Array<number>): number;
		public hprt_cmd_turn_white_black_reverse_print_mode_on_off_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_set_relative_print_position_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_print_data_in_page_mode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_generate_pulse_in_real_time_wrap(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_transmit_the_remaining_capacity_of_the_download_graphics_memory_gmode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_transmit_specified_status_in_real_time_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_pdf417_print_the_symbol_data_in_the_symbol_storage_area_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_print_and_reverse_feed_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_define_the_downloaded_graphics_data_column_gmode_wrap(param0: number, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>, param8: number, param9: native.Array<number>): number;
		public hprt_cmd_qr_store_the_data_in_the_symbol_storage_area_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_initialize_printer_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_transmit_the_remaining_capacity_of_the_NV_graphics_memory_gmode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_pdf417_set_the_row_height_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_turn_upside_down_print_mode_on_off_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_cancel_the_mode_of_read_smart_card_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public constructor();
		public hprt_cmd_select_print_position_HRI_characters_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_transmit_real_time_status_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_define_user_defined_characters_wrap(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number, param6: native.Array<number>, param7: number, param8: native.Array<number>): number;
		public hprt_cmd_select_justification_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_execute_macro_wrap(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number, param6: native.Array<number>): number;
		public hprt_cmd_print_the_specified_NV_graphics_data_gmode_wrap(param0: number, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>): number;
		public hprt_cmd_select_an_international_character_set_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_transmit_the_key_code_list_for_defined_download_graphics_gmode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_enable_real_time_command_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number, param6: native.Array<number>): number;
		public hprt_cmd_set_bar_code_height_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_execute_test_print_wrap(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_pdf417_transmit_the_size_information_of_the_symbol_data_in_the_symbol_storage_area_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_qr_select_the_model_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_eh_set_default_configuration_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_horizontal_tab_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_print_and_reverse_feed_n_line_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_transmit_printer_version_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_print_bar_code_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number, param6: native.Array<number>): number;
		public hprt_cmd_partial_cut_one_point_left_uncut_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_partial_cut_three_point_left_uncut_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_set_horizontal_and_vertical_motion_units_wrap(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_set_absolute_print_position_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_qr_select_the_error_correction_level_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_draw_line_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_read_from_nv_user_memory_wrap(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_set_left_margin_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_set_bar_code_width_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_turn_emphasized_mode_on_off_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_draw_background_grid_wrap(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_define_downloaded_bit_image_wrap(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>): number;
		public hprt_cmd_turn_smoothing_mode_on_off_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_set_relative_vertical_print_position_in_page_mode_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_clear_buffer_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_print_and_carriage_return_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_select_peripheral_device_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_select_the_print_speed_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_select_print_direction_in_page_mode_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_select_font_HRI_characters_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_set_3track_card_reader_mode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_select_character_code_table_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_set_print_position_to_the_beginning_of_print_line_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_eh_request_attestation_data_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_transmit_the_key_code_list_for_defined_NV_graphics_gmode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_eh_set_encryption_mode_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_eh_send_attestation_data_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmds_find_raster_imgdata_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>, param4: native.Array<number>, param5: native.Array<number>, param6: native.Array<number>, param7: native.Array<number>, param8: native.Array<number>): number;
		public hprt_cmd_pdf417_set_the_number_of_rows_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_exit_draw_background_grid_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_qr_transmit_the_size_information_of_the_symbol_data_in_the_symbol_storage_area_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_select_print_modes_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_pdf417_select_the_options_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_eh_set_encryption_all_track_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_select_standard_mode_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_set_bt_name_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_pdf417_set_the_error_correction_level_wrap(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_cmd_turn90_clockwise_rotation_mode_on_off_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_qr_print_the_symbol_data_in_the_symbol_storage_area_wrap(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>): number;
		public hprt_cmd_set_the_reference_dot_density_for_graphics_gmode_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_send_real_time_request_to_printer_wrap(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>): number;
		public hprt_cmd_store_the_graphics_data_in_the_print_buffer_column_gmode_wrap(param0: number, param1: number, param2: number, param3: number, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>, param8: number, param9: native.Array<number>): number;
		public hprt_cmd_print_raster_img_cmd_header_wrap(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number, param6: native.Array<number>): number;
		public hprt_cmd_write_to_nv_user_memory_wrap(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>): number;
	}
}

declare module HPRTAndroidSDK {
	export class hprt_printer_model {
		public constructor();
		public hprt_printer_model_get_info_by_name_wrap(param0: string, param1: native.Array<number>, param2: native.Array<number>): number;
		public hprt_printer_model_id_get_property(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>, param4: native.Array<number>): number;
		public hprt_printer_model_name_get_property(param0: string, param1: number, param2: native.Array<number>, param3: native.Array<number>): number;
		public hprt_printer_model_get_info_by_name(param0: string, param1: native.Array<number>, param2: native.Array<number>): number;
		public hprt_printer_model_name_get_property_wrap(param0: string, param1: number, param2: native.Array<number>, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
		public hprt_printer_model_id_get_property_wrap(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>, param4: number, param5: native.Array<number>): number;
	}
}

declare module org {
	export module winplus {
		export module serial {
			export module utils {
				export class SerialPort {
					public getOutputStream(): javaioOutputStream;
					public getInputStream(): javaioInputStream;
					public constructor(param0: javaioFile, param1: number, param2: androidcontentContext);
					public static close(): number;
					public static open(param0: string, param1: number, param2: number): javaioFileDescriptor;
				}
			}
		}
	}
}

declare module org {
	export module winplus {
		export module serial {
			export module utils {
				export class SerialPortFinder {
					public constructor();
					public getAllDevices(): native.Array<string>;
					public getAllDevicesPath(): native.Array<string>;
				}
				export module SerialPortFinder {
					export class Driver {
						public getDevices(): javautilVector;
						public constructor(param0: org.winplus.serial.utils.SerialPortFinder, param1: string, param2: string);
						public getName(): string;
					}
				}
			}
		}
	}
}
