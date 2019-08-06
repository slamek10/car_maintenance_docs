Ext.define('CarMaintenanceDocuments.view.usersettings.UserSettings', {
	extend : 'Ext.panel.Panel',
	xtype : 'usersettings',

	alias : 'widget.usersettings',

	controller : 'home',
	viewModel : 'home',

	layout : {
		align : 'center',
		pack : 'center'
	},

	items : [
		{
			xtype : 'userheader'
		},
		{
			xtype : 'userpanel',
			layout: {
		        type: 'hbox',
		        align: 'center',
		        pack: 'center'
		    }
		},
		{
			xtype : 'panel',
			title : 'test'
		}

	],

	dockedItems : [
		{
			xtype : 'button',
			dock : 'bottom',
			text : 'SAVE CHANGES',
			width : '208px',
			height : '40px',
			iconAlign : 'right',
			iconCls : 'fa fa-angle-right',
			listeners : {
				click : 'onLoginClick',
			},
			style : {
				backgroundColor : '#41B4B8',
			},
			border : false
		}
	]
	
});