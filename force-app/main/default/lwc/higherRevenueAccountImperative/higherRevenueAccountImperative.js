import { LightningElement } from 'lwc';
import getHigherRevenueAccountsImperative from "@salesforce/apex/AccountController.getHigherRevenueAccountsImperative";

export default class HigherRevenueAccountImperative extends LightningElement {

    inputValue = 5;
    accountDetails = [];

    connectedCallback(){
        getHigherRevenueAccountsImperative({count:this.inputValue}).then(response =>{
            this.accountDetails = response;
            console.log(`The response is ${response}`);
        }).catch(error =>{
            console.log(error);
        });
    }

    setCount(event){
        this.inputValue = event.target.value;
        console.log('input value '+event.target.value);
    }

    handleClick(){
        console.log('Handel click is called on click of button.');
        getHigherRevenueAccountsImperative({count:this.inputValue}).then(response =>{
            this.accountDetails = response;
            console.log(`The response is ${response}`);
        }).catch(error =>{
            console.log(error);
        });
    }

}