import { LightningElement, api, wire, track } from 'lwc';
import GETCARS from '@salesforce/apex/CarSearchResultController.getCars';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CarSearchResult extends LightningElement {
    @api carTypeId = '';

    @track cars;
    @track selectedCarId;

    @wire(GETCARS,{carTypeId : '$carTypeId'})
    getCars({data,error}){
        if(data){
            this.cars = data;
        }
        else if(error){
            this.showToast('ERRPR',error.body.message,'error');
        }
    }

    showToast(tittle,message,variant){
        const evt = new ShowToastEvent({
            tittle:tittle,
            message:message,
            variant:variant,
        });
        this.dispatchEvent(evt);
    }
    
    handleSelectTile(event){
        const carId = event.detail;
        this.selectedCarId = carId

    }

    get carFound(){
        if(this.cars)
            return true;
        return false;
    }
}