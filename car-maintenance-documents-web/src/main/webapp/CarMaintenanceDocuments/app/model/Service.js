Ext.define('CarMaintenanceDocuments.model.Service', {
    extend : 'Ext.data.Model',

    fields : [
        
    	{
    		name: 'carId'
    	},
        {
            name: 'typeOfService'
        },
        {
            name: 'dateOfService'
        },
        {
            name: 'currentKm'
        },
        {
            name: 'additionalInfo'
        },
        {
            name: 'invoices'
        }
  
    ]

});