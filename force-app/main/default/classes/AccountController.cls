public with sharing class AccountController {
    public AccountController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getHigherRevenueAccounts(){
        try{
            return [SELECT Id, Name, AnnualRevenue FROM Account ORDER BY AnnualRevenue DESC NULLS LAST LIMIT 5];
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getHigherRevenueAccountsImperative(Integer count){
        List<Account> accList = new List<Account>();
        try {
            accList = [SELECT Id, Name, AnnualRevenue FROM Account ORDER BY AnnualRevenue DESC NULLS LAST LIMIT :count];
            System.debug('This account list from apex '+accList);
            return accList;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}