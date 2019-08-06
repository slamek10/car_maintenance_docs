Ext.define('CarMaintenanceDocuments.store.OwnedCars', {
    extend : 'Ext.data.Store',
    alias : 'store.ownedCars',
    model : 'CarMaintenanceDocuments.model.OwnedCars',
    
    data : [
        {manufacturerName: 'Mercedes Benz',   typeName: 'E class',   buildDate: '1991'},
        {manufacturerName: 'Mercedes Benz',   typeName: 'E class',   buildDate: '1996'},
        {manufacturerName: 'Mercedes Benz',   typeName: 'C class',   buildDate: '1996'},
        {manufacturerName: 'Mercedes Benz',   typeName: 'Vito',   	 buildDate: '1999'}
        
    ]

});