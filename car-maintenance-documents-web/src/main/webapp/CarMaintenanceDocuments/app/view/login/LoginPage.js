Ext.define('CarMaintenanceDocuments.view.login.LoginPage', {
	extend: 'Ext.container.Container',
	xtype: 'authlogin',

	reference : 'authLogin',
	id : 'authLogin',
	
	controller: 'authlogin',

	cls: 'auth-login',
	
	layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

	 items: [{
        cls: 'auth-header',
        frame: false,
        border: false,
        bodyStyle: 'background:transparent !important; ',
        html:
            '<span class="logo x-fa fa-car"></span>'+
            '<div class="title">Car Maintenance</div>'+
            '<div class="caption">documents</div>'
    }, {
		xtype: 'form',
        bodyStyle: {
        	padding:'25px',
//        	background: 'black',
//        	opacity: '0.2'
        },
        width: '256px',
        layout: {
            align: 'middle',
            pack: 'center',
            type: 'vbox'
        },
        ui: 'auth',

        items: [{
            xtype: 'textfield',
            emptyText: 'username',
            id: 'username',
            width: '208px',
            height: '40px',
            name: 'username',
            placeholder: 'Username',
            required: true,
            triggers: {
                clear : {
			        cls : 'x-form-clear-trigger',
			        handler : function(field, trigger, e) {
				        this.setValue('');	
			        }
		        }
            }
        }, {
            xtype: 'textfield',
            emptyText: 'password',
            id: 'password',
            width: '208px',
            height: '40px',
            name: 'password',
            placeholder: 'Password',
            required: true,
            triggers: {
                clear : {
			        cls : 'x-form-clear-trigger',
			        handler : function(field, trigger, e) {
				        this.setValue('');	
			        }
		        }
            }
        }, {
            xtype: 'button',
            text: 'LOG IN',
            width: '208px',
            height: '40px',
            iconAlign: 'right',
            iconCls: 'fa fa-angle-right',
            listeners : {
				click : 'onLoginClick',				
			},
            style: {
            	backgroundColor: '#41B4B8',
            },
            border: false
        }, { 
        	cls: 'auth-header',
        	frame: false,
            border: false,
            bodyStyle: 'background:transparent !important;',
            html:
                 '<div class="caption">or</div>'     	
        }, {
            xtype: 'button',
            text: 'REGISTER',
            width: '208px',
            height: '40px',
            iconAlign: 'right',
            iconCls: 'fa fa-angle-right',
            listeners : {
				click : 'onRegisterClick'
			},
            style: {
            	backgroundColor: '#41B4B8',
            },
            border: false
        }]
    }]
});
