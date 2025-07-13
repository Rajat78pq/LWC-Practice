import { LightningElement, wire } from 'lwc';
import getHigherRevenueAccounts from '@salesforce/apex/AccountController.getHigherRevenueAccounts';

export default class HigherRevenueAccount extends LightningElement {
    accountDetails = [];

    @wire(getHigherRevenueAccounts)
    getAccountHandler(response){
        const {data, error} = response;

        if(data != undefined){
            this.accountDetails = data;
        }else{
            console.log(error);
            return error;
        }
    }
}