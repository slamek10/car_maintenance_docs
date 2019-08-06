Ext.define('CarMaintenanceDocuments.view.usersettings.UserPanel', {
	extend : 'Ext.panel.Panel',
	xtype : 'userpanel',

	cls: 'person-header',
	
	layout: {
        type: 'table',
        columns: 3
    },
     
	items : [ 
		{
			xtype: 'panel',
			colspan: 1,
		},
		{
			xtype: 'panel',
			//title: 'Details',
			cls : 'details-panel',
			colspan: 1,		
			items: [				
				{
					xtype : 'panel',
					cls : 'user-panel',
					layout: {
				        type: 'hbox',
				        align: 'center',
				        pack: 'center'
				    },
				    items : [
				    	{
				    		 html: [
				                 '<div class="title">USERNAME</div>',
				                 '<div class="text">ivan.slamek</div>'
				             ],
				             bodyStyle: 'padding: 0 0 0 50px'
						},
						{
				    		 html: [
				                 '<div class="title">EMAIL</div>',
				                 '<div class="text">islamek@cardocs.com</div>'
				             ],
				             bodyStyle: 'padding: 0 0 0 50px'
						},
						{
				    		 html: [
				                 '<div class="title">BIRTHDAY</div>',
				                 '<div class="text">June 8th, 1994</div>'
				             ],
				             bodyStyle: 'padding: 0 50px 0 50px'
						}
				    ]					
				},
				{
					xtype : 'panel',
					cls : 'user-panel',
					layout: {
				        type: 'hbox',
				        align: 'center',
				        pack: 'center'
				    },
				    items : [
				    	{
				    		 html: [
				                 '<div class="title">PHONE</div>',
				                 '<div class="text">097 714 84</div>'
				             ],
				             bodyStyle: 'padding: 30px 0 0 50px'
						},
						{
				    		 html: [
				                 '<div class="title">SKYPE</div>',
				                 '<div class="text">097 714 84</div>'
				             ],
				             bodyStyle: 'padding: 30px 0 0 50px'
						},
						{
				    		 html: [
				                 '<div class="title">ENTRY DATE</div>',
				                 '<div class="text">097 714 8400</div>'
				             ],
				             bodyStyle: 'padding: 30px 50px 0 50px'
						}
				    ]					
				}						
			]
		},
		{
			xtype: 'panel',
				colspan: 1,
		}
	]
});