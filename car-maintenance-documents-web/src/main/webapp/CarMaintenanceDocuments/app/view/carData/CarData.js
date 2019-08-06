Ext.define('CarMaintenanceDocuments.view.carData.CarData', {
	extend : 'Ext.panel.Panel',
	xtype : 'cardata',

	cls : 'person-header',

	items : [
		{
			xtype : 'panel',
			ui : 'mainContainer',
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			bodyPadding : '0 10 0 10',
			items: [
				{
					xtype : 'queryparams',
					reference : 'queryParams',
					itemId : 'queryParams',
                    margin: '10 0 10 0'
				},
				{
					xtype: 'datagrid',
					reference : 'dataGrid',
					itemId : 'dataGrid',
		            flex: 1,
		            margin: '0 0 10 0'
				}
			]
		}		
	],
	
	dockedItems : [               
        {
            xtype : 'toolbar',
            dock : 'bottom',
            items : [     	   
                '->',
                {
					xtype: 'textfield',		
					width: '300px',
					labelAlign: 'top',
					value: '196,98',
					listeners: {
						beforeRender: function() {
					    	var date = new Date();
					    	var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).toString().slice(0,10);
					    	var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).toString().slice(0,10);
					    	
					    	this.fieldLabel = 'Total invoices from ' + firstDay + ' to ' + lastDay;
					    }
					}
				}
                
            ]
        }           
    ]         

	
});

