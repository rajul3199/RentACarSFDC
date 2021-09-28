import { api, LightningElement } from 'lwc';

export default class CarTile extends LightningElement {
    @api car;
    @api selectedCarId;

    handleCarSelect(event){
        event.preventDefault();
        const selectCarEvent = new CustomEvent('selecttile',{
            detail: this.car.Id
        });
        this.dispatchEvent(selectCarEvent);
    }

    get isCarSelected(){
        if(this.selectedCarId===this.car.Id){
            return "tile selected";
        }
        return "tile";
    }
}