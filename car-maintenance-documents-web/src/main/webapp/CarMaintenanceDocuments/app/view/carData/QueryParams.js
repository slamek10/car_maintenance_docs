Ext.define('CarMaintenanceDocuments.view.carData.QueryParams', {
	extend : 'Ext.form.Panel',
	xtype : 'queryparams',

	layout : {
		type : 'hbox'
	},
	height : 'auto',

    frame: false,
    border: true,
    
	scrollable : true,
	
	margin:  {
		top : 0,
		bottom : 10,
		left: 10,
		right: 10
	},

    bodyPadding: 10,

    fieldDefaults: {
        labelAlign: 'left',
        labelSeparator: '',
        margin: '0 20 5 0'
    },
    
	items : [
		
		{
            xtype: 'combobox',
            itemId: 'cboOwnedCar',
            fieldLabel: 'Chose car to see data for:',
            width: '300px',
            name: 'ownedCar',
            labelAlign: 'top',
            queryMode: 'local',
            valueField: 'typeName',
            displayField: 'typeName',
            tpl: Ext.create('Ext.XTemplate',
			     	'<tpl for=".">',
			     		'<div class="x-boundlist-item">{manufacturerName} ({typeName}-{buildDate})</div>',
	        		'</tpl>'
		    ),
		    displayTpl: Ext.create('Ext.XTemplate',
		        '<tpl for=".">',
		            '{manufacturerName} ({typeName}-{buildDate})',
		        '</tpl>'
		    ),
            matchFieldWidth: true,
            editable: true,
            forceSelection: true,
            bind: {
                readOnly: '{ !formReadOnly }'
            },
            store: 'OwnedCars',
        },
        
		{
	        xtype: 'datefield',
	        anchor: '100%',
	        labelAlign: 'top',
	        fieldLabel: 'From',
	        name: 'date',
	        format: 'm d Y'
	    }, {
	        xtype: 'datefield',
	        anchor: '100%',
	        labelAlign: 'top',
	        fieldLabel: 'To',
	        name: 'date',
	        format: 'm d Y',
	        altFormats: 'm,d,Y|m.d.Y'
	    }
	],

    dockedItems : [
        {
           xtype : 'toolbar',
           dock : 'top',
           items : [
               {
                   xtype: 'tbtext',
                   text: 'Filter',
                   style: {
                       fontWeight: 500
                   }
               },

               '->',

               {
                   xtype : 'button',
                   text: 'Search',
                   bind: {
                      disabled: '{ !formReadOnly }'
                   },
                   handler: 'queryAndFetchData'
               },
               {
					xtype : 'button',
					text : 'Reset filter',
					bind: {
                       disabled: '{ !formReadOnly }'
                    },
					handler : 'resetFilter'
				}
           ]
       }
   ]
    
});