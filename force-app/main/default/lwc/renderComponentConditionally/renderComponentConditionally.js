import { LightningElement } from 'lwc';

export default class RenderComponentConditionally extends LightningElement {
    isVisible = true;
    handleClick(){
        this.isVisible = !this.isVisible;
    }
}