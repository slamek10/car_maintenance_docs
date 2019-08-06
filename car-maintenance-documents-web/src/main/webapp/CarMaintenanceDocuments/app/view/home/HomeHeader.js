Ext.define('CarMaintenanceDocuments.view.home.HomeHeader', {
	extend : 'Ext.panel.Panel',
	xtype : 'homeheader',

	cls : 'home-header',

	controller : 'home',
	viewModel : 'home',

	layout : {
		align : 'center',
		pack : 'center'
	},

	items : [
		
		{
			xtype : 'container',
			layout : 'hbox',
			userCls : [
				'page-constrained',
				'header-info'
			],
			items : [ {
				xtype : 'component',
				cls : 'header-links',
				html : [
					'<tpl for="organization.manager">',
					'<div class="item">',
					'<span class="icon x-fa fa-sitemap"></span>',
					'<div class="title">Administrator</div>',
					'<a href="#">Ivan Slamek</a>',
					'</div>'
				],
				listeners: {
				    render: function(component) {
				        component.getEl().on('click', function(e) {
				        	
				        	var container = Ext.getCmp('mainContainer');
				        	var view = container.setActiveItem('userSettingsCard');

				        });    
				    }
				}
			}, {
				xtype : 'component',
				cls : 'header-clock',
				html : [
					'<div class="date"><span id="date"></span></div>',
					'<div class="time"><span id="time" class="x-fa fa-clock-o"></span></div>'
				]
			}]
		}
	]
	
});