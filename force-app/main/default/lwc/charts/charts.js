import { LightningElement } from 'lwc';
import chartJs from '@salesforce/resourceUrl/chartJs';
import {loadScript} from 'lightning/platformResourceLoader';

export default class Charts extends LightningElement {
    isChartJsInitialized

    renderedCallback(){
        if(this.isChartJsInitialized){
            return;
        }
        loadScript(this, chartJs+'/chartJs/Chart.js').then(()=>{
            console.log("chartJs loaded succesfully")
            this.isChartJsInitialized = true
        }).catch(error=>{
            console.error(error)
        })
    }

}