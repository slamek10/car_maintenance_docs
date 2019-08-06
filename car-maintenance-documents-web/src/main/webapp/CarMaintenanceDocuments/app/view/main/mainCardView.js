Ext.define('CarMaintenanceDocuments.view.main.mainCardView', {
	extend : 'Ext.panel.Panel',
	id: 'cards',
   
	controller: 'authlogin',
	
    layout: 'card',
    activeItem: 0,

    items: [{
        id: 'loginView',
        xtype: 'authlogin'
    }, {
        id: 'mainView',
        xtype: 'app-main'
    }, {
    	id: 'registerView',
    	xtype: 'registerpage'
    }]

});
