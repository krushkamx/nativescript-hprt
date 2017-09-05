import * as utils from "utils/utils";
import {
    HPRTPrinter
} from "./hprt.common";


const BToperator: any = HPRTAndroidSDK.BTOperator;
// const HPRTPrinterHelper: any = HPRTAndroidSDK.HPRTPrinterHelper;
const PublicFunction: any = HPRTAndroidSDK.PublicFunction;
const HPRTPrinterHelper: any = HPRTAndroidSDK.HPRTPrinterHelper;

// try {
//     java.lang.System.loadLibrary("hprt_printer_model");
//     java.lang.System.loadLibrary("hprt_printer_helper_cmd");
//     console.log("Libraries loaded!");
// }
// catch (e) {
//     console.log("Error loading library");
// }


export class Hprt {

    private printer: any = null;
    private hpm: any;
    private hphc: any;
    private encoding: any;
    private printerModel: any;
    private HPRTPrinterHelper: any;

    constructor() {

        this.encoding = java.nio.charset.Charset.forName("UTF-8");   
        this.HPRTPrinterHelper = new HPRTAndroidSDK.HPRTPrinterHelper(utils.ad.getApplicationContext(), "MPT-II");      

    }

    EnableBluetooth(timeout?: number): Promise<any> {
        return new Promise((resolve, reject) => {

            let wait = timeout || 5000;

            try {

                let mBluetoothAdapter = android.bluetooth.BluetoothAdapter.getDefaultAdapter()
                if(mBluetoothAdapter != null) {
                    if(mBluetoothAdapter.isEnabled()) {
                        resolve();
                    };
                    
                    mBluetoothAdapter.enable();

                    // Let give some space to enable bluetooth
                    setTimeout(() => {
                        if(!mBluetoothAdapter.isEnabled()) {
                            resolve();
                        }
                        else {
                            reject("Couldn't enable bluetooth, please do it manually.");
                        }
                    }, wait);
                    
                } 
                else
                {
                    reject("Bluetooth Adapter is null.");
                }

            } catch (e) {
              reject(e);
            }
          });
    }

    searchPrinters(): Promise<Array<HPRTPrinter>> {
        return new Promise((resolve, reject) => {
            let BluetoothDevice = android.bluetooth.BluetoothDevice;
            let mBtAdapter = android.bluetooth.BluetoothAdapter.getDefaultAdapter();
            let pairedDevices = mBtAdapter.getBondedDevices();

            let printers: Array<HPRTPrinter> = [];
           
            if( pairedDevices.size() > 0){

                let pairedDevicesArr = pairedDevices.toArray();

                for (let i = 0; i < pairedDevicesArr.length; i++) {
                    
                    let device = "" + pairedDevicesArr[i]; // TODO: Figure out why this is not string
                    let deviceObj = mBtAdapter.getRemoteDevice(device);
                    printers.push(new HPRTPrinter(deviceObj.getAddress(), deviceObj.getName()));

                }
            }

            resolve(printers);

        });
    }

    connect(portSetting: HPRTPrinter): Promise<any> {
        return new Promise((resolve, reject) => {
            try {

                let isPortOpen = HPRTAndroidSDK.HPRTPrinterHelper.PortOpen("Bluetooth,"+portSetting.portName);

                if (isPortOpen==-1) {
                    reject("No ports open");
                }
                else {
                    resolve();
                } 
            } catch (e) {
              reject(e);
            }
        });
    }

    disconnect(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {

                HPRTAndroidSDK.HPRTPrinterHelper.PortClose();
                resolve();

            } catch (e) {
              reject(e);
            }
        });
    }

    // Print methods
    printTextSimple(text: string) {
        if(text){
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 0, 0); // Reset all to 0
        }        
        return true;
    }

    printText(text:string, alignment:number, attribute:number, textSize:number) {

        let align = alignment || 0;
        let attr = attribute || 0;
        let txtSize = textSize || 0;

        // let data = Array.create("byte", 1);
        // data[0] = "0x1b,0x40";
        // HPRTAndroidSDK.HPRTPrinterHelper.WriteData(data);

        //this.LanguageEncode();  


        if(text) {
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, align, attr, txtSize);
        }

        return true;
    }

    printTextDouble(text: string) {
        if(text){
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 48, 0);
        }        
        return true;
    }

    printTextDoubleHeight(text: string) {
        if(text){
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 16, 0);
        }        
        return true;
    }

    printTextDoubleWidth(text: string) {
        if(text){
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 32, 0);
        }        
        return true;
    }

    printTextUnderline(text: string) {
        if(text){
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 4, 0);
        }        
        return true;
    }

    printTextBold(text: string) {
        if(text){
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 2, 0);
        }        
        return true;
    }

    printTextMini(text: string) {
        if(text){
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 1, 0);
        }        
        return true;
    }

    printTextWhite(text: string) {
        if(text){
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 8, 0);
        }        
        return true;
    }

    printTextLeft(text: string) {
        if(text){
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 0, 0, 0);
        }        
        return true;
    }

    printTextCenter(text: string) {
        if(text){
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 1, 0, 0);
        }        
        return true;
    }

    printTextRight(text: string) {
        if(text){
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText(text, 2, 0, 0);
        }        
        return true;
    }

    newLine(lines?: number) {
        let line = lines || 1;

        for (let i = 0; i < line; i++) {            
            HPRTAndroidSDK.HPRTPrinterHelper.PrintText("\n");
        }
        return true;
    }

    horizontalLine() {
        let line = "--------------------------------";
        HPRTAndroidSDK.HPRTPrinterHelper.PrintText(line, 0,0,0);
        return true;
    }

    testPrint(): Promise<any>{
        return new Promise((resolve, reject) => {            

                // Working
                // let data = this.toBytes("----NATIVESCRIPT--FUCK--YEAH----");
                // let bData = Array.create("byte", 3);
                // bData = data;
                // let print = this.printer.WriteData(bData, bData.length);

                // New
                let strPrintText = "Hello world";
                HPRTAndroidSDK.HPRTPrinterHelper.PrintText(strPrintText+"\n",0,0,0);
                
                resolve();                

          });
    }

    private toBytes(val){
        return new java.lang.String(val).getBytes(this.encoding);
    }

    private LanguageEncode() {
        try
		{
			let PFun = new HPRTAndroidSDK.PublicFunction(utils.ad.getApplicationContext());
			let sLanguage = PFun.ReadSharedPreferencesData("Codepage").split(",")[1].toString();
			let sLEncode="gb2312";
			let intLanguageNum = 0;
			
			sLEncode=PFun.getLanguageEncode(sLanguage);		
			intLanguageNum= PFun.getCodePageIndex(sLanguage);	
			
			HPRTAndroidSDK.HPRTPrinterHelper.SetCharacterSet(intLanguageNum);
			HPRTAndroidSDK.HPRTPrinterHelper.LanguageEncode = sLEncode;
			
			return sLEncode;
		}
		catch(e)
		{			
			console.log("Error in LanguageEncode()")
			return "";
		}
    }

    private getEncodedString(val): any {

            let parts = val;
            // if it's not a string assume it's a byte array already
            if (typeof val === 'string') {
              parts = val.split(',');
          
              if (parts[0].indexOf('x') == -1) {
                return null;
              }
            }
          
            var result = Array.create("byte", parts.length);
          
            for (var i=0; i<parts.length; i++) {
              result[i] = parts[i];
            }
            return result;

        //return new java.lang.String(value).getBytes(this.encoding);
      }

    private AfterPrintAction()
	{
		try
		{
			//let PFun = new PublicFunction(utils.ad.getApplicationContext());
						
    		// if(PFun.ReadSharedPreferencesData("Cashdrawer").equals("2") && PrinterProperty.Cashdrawer)    		
    		// 	HPRTPrinterHelper.OpenCashdrawer(0);
    		// if(PFun.ReadSharedPreferencesData("Buzzer").equals("2") && PrinterProperty.Buzzer)    		
    		// 	HPRTPrinterHelper.BeepBuzzer(1,10,10);   
    		
    		// iFeed=Integer.valueOf(PFun.ReadSharedPreferencesData("Feeds"));
    		// ArrayAdapter arrFeeds;
    		// arrFeeds = new ArrayAdapter<String>(context,android.R.layout.simple_spinner_item);					
    		// arrFeeds=ArrayAdapter.createFromResource(context, R.array.feeds_list, android.R.layout.simple_spinner_item);
    		// arrFeeds.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
    		// iFeed=(Integer.valueOf(arrFeeds.getItem(iFeed).toString().replace("mm", "")));
    		// HPRTPrinterHelper.PrintAndFeed(iFeed*4);
    		// if(PFun.ReadSharedPreferencesData("Cut").equals("2") && PrinterProperty.Cut)    
    			
    		// 	HPRTPrinterHelper.CutPaper(HPRTPrinterHelper.HPRT_PARTIAL_CUT,PrinterProperty.CutSpacing);
			// else
            // 	HPRTPrinterHelper.PrintAndFeed(PrinterProperty.TearSpacing);
            HPRTPrinterHelper.PrintAndFeed(PrinterProperty.TearSpacing);
		}
		catch(e)
		{
			console.log("AfterPrintAction", e);
		}
    }

    
    

}

export class PrinterProperty
{
	public static Barcode:string="";
	public static  PrintableWidth:number=0;
	public static  Cut:boolean=false;
	public static  CutSpacing:number=0;
	public static  TearSpacing:number=0;
	public static  ConnectType:number=0;
	public static  Cashdrawer:boolean=false;
	public static  Buzzer:boolean=false;
	public static  Pagemode:boolean=false;
	public static  PagemodeArea:string="";
	public static  GetRemainingPower:boolean=false;
	public static  SampleReceipt:boolean=true;
	public static  StatusMode:number=0;
}