Ext.define('CarMaintenanceDocuments.view.home.HomeController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.home',

    logoutUser: function () {

    	Ext.Msg.alert('Info', 'You have been loged out!');
    	Ext.getCmp('cards').layout.setActiveItem('loginView');
    	
    },
    
    showView: function(xtype, mainContainer) {
        var view = this.lookup(xtype),
        	mainView = document.getElementById('mainContainer').show(),
        	viewport = this.getView(mainView);

        if (!view) {
            viewport.removeAll(true);
            view = viewport.add({
                xtype: xtype,
                reference: xtype
            });
        }

        viewport.setActiveItem(view);
    },
    
    showHome: function () {
    	
    	var container = Ext.getCmp('mainContainer');
    	var view = container.setActiveItem('homeCard');

    },
    
    showUser: function () {
    	
    	var container = Ext.getCmp('mainContainer');
    	var view = container.setActiveItem('userSettingsCard');

    },
    
    showCarData: function () {
    	
    	var container = Ext.getCmp('mainContainer');
    	var view = container.setActiveItem('carData');

    },
    
    editUserSettings: function () {
    	Ext.create('Ext.window.Window', {
    	    title: 'Hello',
    	    height: 200,
    	    width: 400,
    	    layout: 'fit'
    	}).show();
    }
    
});
