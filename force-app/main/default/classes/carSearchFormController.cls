public with sharing class carSearchFormController {
    @AuraEnabled(cacheable=true)
    public static List<Car_Type__c> getCarTyeps(){
        try {
            return [select id, Name from Car_Type__c];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
