public with sharing class CaseController {
    public CaseController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Case> getCasesList(String status){
        try {
            if(status != null || status != ''){
                return [SELECT Id, CaseNumber, Reason, Status, Priority FROM Case WHERE Status =: status];
            }else {  
                return [SELECT Id, CaseNumber, Reason, Status, Priority FROM Case];
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static Case getCaseDetail(String caseId){
        try {
            return [SELECT Id, CaseNumber, AccountId, ContactId, Type, Status, Priority, Origin FROM Case WHERE Id =: caseId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}