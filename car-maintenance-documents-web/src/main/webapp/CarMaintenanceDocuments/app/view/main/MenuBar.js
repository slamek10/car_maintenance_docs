Ext.define('CarMaintenanceDocuments.view.main.MenuBar', {
	extend : 'Ext.Toolbar',
	xtype : 'menu',
	
	controller: 'home',
	
	cls: 'main-view',
	margin: '0 0 0 -8',
	padding: '0 0 0 6px',
	layout: {
        type: 'vbox'
    },
    
	items: [
		{
			xtype : 'button',
			iconCls : 'fa fa-home',
			cls: 'btnBlue',
			ui : 'picture',
			style : {
				'font-size' : '21px',
				'width': '58px',
				'height': '58px'
			},
			margin: '0 0 0 0',
			listeners : {
				click : 'showHome'
			},
		},
		{
			xtype : 'button',
			iconCls : 'fa fa-car',
			cls: 'btnBlue',
			ui : 'picture',
			style : {
				'font-size' : '21px',
				'width': '58px',
				'height': '58px'
			},
			margin: '0 0 0 0',
			listeners : {
				click : 'showCarData'
			}
		},
		{
	        xtype:'tbspacer',
	        flex:1
	    },
	    {
	    	xtype: 'button',
	    	cls: 'btnImage',
            style : {
				'font-size' : '20px',
				'width': '34px',
				'height': '34px'
			},
			listeners : {
				click : 'showUser'
			}
	    },
		{
			xtype : 'button',
			iconCls : 'fa fa-power-off',
			cls: 'btn',
			listeners : {
				click : 'logoutUser'
			},
			ui : 'picture',
			style : {
				'font-size' : '21px',
				'width': '58px',
				'height': '58px'
			}
		} 
	]
    
});