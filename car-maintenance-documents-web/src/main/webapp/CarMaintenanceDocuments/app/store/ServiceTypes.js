Ext.define('CarMaintenanceDocuments.store.ServiceTypes', {
    extend : 'Ext.data.Store',
    alias : 'store.serviceTypes',
    model : 'CarMaintenanceDocuments.model.ServiceTypes',
    
    data : [
    	
        {serviceId: '1',   serviceName: 'A Service'},
        {serviceId: '2',   serviceName: 'B Service'},
        {serviceId: '3',   serviceName: 'MOT Check'},
        {serviceId: '4',   serviceName: 'Other'},
      
    ]

});