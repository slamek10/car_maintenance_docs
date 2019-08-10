Ext.define('CarMaintenanceDocuments.view.register.RegisterPage', {
	extend : 'Ext.container.Container',
	xtype : 'registerpage',
	  
    alias: 'widget.registerpage',
	
	controller : 'authlogin',

	cls : 'auth-login',

	layout : {
		type : 'vbox',
		align : 'center',
		pack : 'center'
	},

	items : [ {
		cls : 'auth-header',
		frame : false,
		border : false,
		bodyStyle : 'background:transparent !important; ',
		html : '<span class="logo x-fa fa-car"></span>' +
			'<div class="title">Car Maintenance</div>' +
			'<div class="caption">documents</div>'
	}, {
		xtype : 'form',
		bodyStyle : {
			padding : '25px',
		},
		width : '256px',
		layout : {
			align : 'middle',
			pack : 'center',
			type : 'vbox'
		},
		ui : 'auth',

		items : [ {
			xtype : 'textfield',
			id: 'regUsername',
			name : 'username',
			width : '208px',
			height : '40px',
			emptyText : 'username',
			allowBlank : false,
			minLength : 6
		}, {
			xtype : 'textfield',
			id: 'regEmail',
			name : 'email',
			width : '208px',
			height : '40px',
			emptyText : 'email address',
			vtype : 'email',
			allowBlank : false
		}, {
			xtype : 'textfield',
			id: 'regPassword',
			name : 'password1',
			width : '208px',
			height : '40px',
			emptyText : 'password',
			inputType : 'password',
			style : 'margin-top:15px',
			allowBlank : false,
			minLength : 8
		}, {
			xtype : 'textfield',
			name : 'password2',
			width : '208px',
			height : '40px',
			emptyText : 'repeat password',
			inputType : 'password',
			allowBlank : false,
			/**
			 * Custom validator implementation - checks that the value matches what was entered into
			 * the password1 field.
			 */
			validator : function(value) {
				var password1 = this.previousSibling('[name=password1]');
				return (value === password1.getValue()) ? true : 'Passwords do not match.'
			}
		},

			/*
			 * Terms of Use acceptance checkbox. Two things are special about this:
			 * 1) The boxLabel contains a HTML link to the Terms of Use page; a special click listener opens this
			 *    page in a modal Ext window for convenient viewing, and the Decline and Accept buttons in the window
			 *    update the checkbox's state automatically.
			 * 2) This checkbox is required, i.e. the form will not be able to be submitted unless the user has
			 *    checked the box. Ext does not have this type of validation built in for checkboxes, so we add a
			 *    custom getErrors method implementation.
			 */
			{
				xtype : 'checkboxfield',
				id : 'acceptTerms',
				name : 'acceptTerms',
				fieldLabel : 'Terms of Use',
				hideLabel : true,
				margin : '15 0 0 0',
				boxLabel : 'I have read and accept the <a href="#" class="terms">Terms of Use</a>.',

				// Listener to open the Terms of Use page link in a modal window
				listeners : {
					click : {
						element : 'boxLabelEl',
						fn : function(e) {
							var target = e.getTarget('.terms'),
								win;

							e.preventDefault();

							if (target) {
								win = Ext.getCmp('termsWindow') || Ext.widget('window', {
									id : 'termsWindow',
									closeAction : 'hide',
									title : 'Terms of Use',
									modal : true,
									contentEl : Ext.getDom('legalese'),
									width : 700,
									height : 400,
									bodyPadding : '10 20',
									autoScroll : true,

									buttons : [ {
										text : 'Decline',
										handler : function() {
											this.up('window').close();
											Ext.getCmp('acceptTerms').setValue(false);	
//											formPanel.up('[name=acceptTerms]').setValue(false);
										}
									}, {
										text : 'Accept',
										handler : function() {
											this.up('window').close();
											Ext.getCmp('acceptTerms').setValue(true);											
//											formPanel.up('[name=acceptTerms]').setValue(true);
										}
									} ]
								});
								win.show();
							}
						}
					}
				},

				// Custom validation logic - requires the checkbox to be checked
				getErrors : function() {
					return this.getValue() ? [] : [ 'You must accept the Terms of Use' ]
				}
			} ],

		dockedItems : [ {
			cls : Ext.baseCSSPrefix + 'dd-drop-ok',
			xtype : 'container',
			dock : 'bottom',
			layout : {
				align : 'middle',
				pack : 'center',
				type : 'vbox'
			},
			padding : '10 10 5',

			items : [ {
				xtype : 'component',
				id : 'formErrorState',
				invalidCls : Ext.baseCSSPrefix + 'form-invalid-icon',
				validCls : Ext.baseCSSPrefix + 'dd-drop-icon',
				baseCls : 'form-error-state',
				flex : 1,
				validText : 'Form is valid',
				invalidText : 'Form has errors',
				tipTpl : Ext.create('Ext.XTemplate', '<ul class="' + Ext.plainListCls + '"><tpl for="."><li><span class="field-name">{name}</span>: <span class="error">{error}</span></li></tpl></ul>'),

				getTip : function() {
					var tip = this.tip;
					if (!tip) {
						tip = this.tip = Ext.widget('tooltip', {
							target : this.el,
							title : 'Error Details:',
							minWidth : 200,
							autoHide : false,
							anchor : 'top',
							mouseOffset : [ -11, -2 ],
							closable : true,
							constrainPosition : false,
							cls : 'errors-tip'
						});
						tip.show();
					}
					return tip;
				},

				setErrors : function(errors) {
					var me = this,
						tip = me.getTip();

					errors = Ext.Array.from(errors);

					// Update CSS class and tooltip content
					if (errors.length) {
						me.addCls(me.invalidCls);
						me.removeCls(me.validCls);
						me.update(me.invalidText);
						tip.setDisabled(false);
						tip.update(me.tipTpl.apply(errors));
					} else {
						me.addCls(me.validCls);
						me.removeCls(me.invalidCls);
						me.update(me.validText);
						tip.setDisabled(true);
						tip.hide();
					}
				}
			}, {
				xtype : 'button',
				formBind : true,
				width: '208px',
	            height: '40px',
	            style: {
	            	backgroundColor: '#41B4B8',
	            },
	            border: false,
				disabled : true,
				text : 'Submit Registration',
				width : 140,
				handler : function() {
					var form = this.up('form').getForm();

					/* Normally we would submit the form to the server here and handle the response...
					form.submit({
					    clientValidation: true,
					    url: 'register.php',
					    success: function(form, action) {
					       //...
					    },
					    failure: function(form, action) {
					        //...
					    }
					});
					*/

					if (form.isValid()) {
						var out = [];
						Ext.Object.each(form.getValues(), function(key, value) {
							out.push(key + '=' + value);
						});
						Ext.Msg.alert('Submitted Values', out.join('<br />'));
					}
				},
				listeners : {
					click : 'registerAccount',				
				}
			}]
		}]
	}]
});