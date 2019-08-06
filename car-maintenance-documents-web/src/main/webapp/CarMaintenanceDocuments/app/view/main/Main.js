Ext.define('CarMaintenanceDocuments.view.main.Main', {
	extend : 'Ext.panel.Panel',
	xtype : 'app-main',
	reference : 'mainView',
	
	controller: 'home',
	viewModel: 'home',
	 
	cls: 'home',
	
	layout: {
        type: 'hbox'
    },
    
	items: [
		{
			xtype: 'menu',
			width: '52px',
			height: '100%'
		},
		{
			xtype: 'maincardpanel'
		}
	] 			
	
	
});