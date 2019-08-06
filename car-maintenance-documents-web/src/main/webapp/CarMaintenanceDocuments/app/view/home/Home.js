Ext.define('CarMaintenanceDocuments.view.home.Home', {
    extend: 'Ext.panel.Panel',
    xtype: 'home',
    
    alias: 'widget.home',
    
    cls: 'home',
    
    controller: 'home',
    viewModel: 'home',
    width: '100%',

    layout:{
        align: 'center',
        pack: 'center'
    },
    
    items: [
    	{
    		xtype: 'homeheader'
    	},
    	{
    		xtype : 'panel',
    		ui : 'mainContainer',
    		bodyPadding : '0 10 0 10',
    		items: [
    			{
        			xtype: 'grid',
        			title: 'Your cars',
        			width: 400,
        		    store : {
                        type : 'ownedCars'
                    },
        		    columns: [
        		        {
        		            text: 'Manufacturer',
        		            dataIndex: 'manufacturerName',
        		            flex: 1,
        		            sortable: false,
        		            hideable: false,
        		        },
        		        {
        		            text: 'Model',
        		            dataIndex: 'typeName',
        		            flex: 1,
        		            sortable: false,
        		            hideable: false
        		        }
        		    ]
        		}
    		]
    	}
    ]
    
});
