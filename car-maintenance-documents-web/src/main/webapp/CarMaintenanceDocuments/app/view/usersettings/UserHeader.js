Ext.define('CarMaintenanceDocuments.view.usersettings.UserHeader', {
    extend: 'Ext.panel.Panel',
    xtype: 'userheader',
   
    cls: 'person-header',
    
    controller: 'home',
    
    items: [
    	{
            xtype: 'image',
            weight: -10,
            userCls: [
                'header-picture',
                'picture'
            ],
            bind: {
                src: 'resources/images/17.jpg'
            }
        },
        {
        	cls : 'header-message',
        	width: '15%',
            html: [
                '<div class="name">Ivan <b>Slamek</b></div>',
                '<div class="desc">Administrative Officer</div>'
            ]
        }
    ],
    
    dockedItems: [
    	{
        	xtype: 'toolbar',
            dock: 'top',
            items: [{
                xtype: 'tbfill'
            }, {
                xtype: 'button',
                cls: 'btn',
                text: 'Edit user',
                style : {
                	'margin-top': '10px'
                },
                handler : 'editUserSettings'
            }]
    	}
    ]
   
});
