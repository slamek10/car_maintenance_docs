Ext.define('CarMaintenanceDocuments.view.login.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.authlogin',

    onLoginClick: function() {

    	Ext.Ajax.request({
    		url : 'apl/getLoginParameters',
    		method: 'POST',
    		params: {
    			username: Ext.getCmp('username').getValue(),
    			password: Ext.getCmp('password').getValue()
    		}, 		
            scope : this,
            success : this.onLoginSuccess,
            failure : this.onLoginFailure
    	});
 
    },
    
    onLoginFailure : function(err) {
        //Alert the user about communication error
        Ext.MessageBox.alert('Error occured during Login', 'username/password does not exist!');
    },

    onLoginSuccess : function(response, opts) {
    	
    	Ext.getCmp('cards').layout.setActiveItem('mainView');
    
    },
    
    registerAccount: function() {
    	
    	Ext.Ajax.request({
    		url : 'apl/getNewAccountParameters',
    		method: 'POST',
    		params: {
    			username: Ext.getCmp('regUsername').getValue(),
    			password: Ext.getCmp('regPassword').getValue(),
    			email: Ext.getCmp('regEmail').getValue()
    		}, 		
            scope : this,
            //method to call when the request is successful
            success : this.userAddedSuccess,
            //method to call when the request is a failure
            failure : this.userAddingFailure
    	});
    	
    },
    
    userAddingFailure : function(err) {
        //Alert the user about communication error
        Ext.MessageBox.alert('Error occured during Registration', 'Account was not created!');
    },

    userAddedSuccess : function(response, opts) {
    	
    	Ext.MessageBox.alert('Success', 'Your account was created!');
    	Ext.getCmp('cards').layout.setActiveItem('authLogin');
    
    },
   
    
    getLoginForm : function() {
    	return this.lookup('authLogin').getForm();
    },
    
    onRegisterClick: function() {

    	Ext.getCmp('cards').layout.setActiveItem('registerView');
      
    },
    
    getApplication : function() {
		return CarMaintenanceDocuments.getApplication();
	}
  
});
