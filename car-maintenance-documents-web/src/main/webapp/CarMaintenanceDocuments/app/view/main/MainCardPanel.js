Ext.define('CarMaintenanceDocuments.view.main.MainCardPanel', {
    extend: 'Ext.container.Container',
    xtype: 'maincardpanel',
    
    controller: 'home',
    
    cls: 'main-view',
    
    flex: 1,

    reference: 'mainCardPanel',
    
    id: 'mainContainer',  
   
    height: '100%',
    	
    layout: 'card',
    activeItem: 0,
    
    items: [
    	{
    		xtype: 'home',
    		id: 'homeCard'
    	},
    	{
    		xtype: 'usersettings',
    		id: 'userSettingsCard'
    	},
    	{
    		xtype: 'cardata',
    		id: 'carData'
    	}
    ]


});