Ext.define('CarMaintenanceDocuments.store.Service', {
    extend : 'Ext.data.Store',
    alias : 'store.service',
    model : 'CarMaintenanceDocuments.model.Service',
    
    data : [
        {carId: 'Mercedes Benz (E class-1991)', typeOfService: 'A Service',	dateOfService: '06.08.2019',	currentKm: '387213',	additionalInfo: 'Small service (@dealer)',	invoices: '156,99'},
        {carId: 'Mercedes Benz (E class-1996)', typeOfService: 'MOT Check',	dateOfService: '11.12.2018',	currentKm: '297000',	additionalInfo: 'Car check before MOT',	invoices: '39,99'}
        
    ]

});