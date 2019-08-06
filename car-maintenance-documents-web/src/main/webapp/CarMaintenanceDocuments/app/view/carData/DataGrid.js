Ext.define('CarMaintenanceDocuments.view.carData.DataGrid', {
	extend : 'Ext.grid.Panel',
	xtype : 'datagrid',

	colTextWrap : true,

	stateful : true,
	stateId : 'datagrid',

	initComponent : function() {

		Ext.apply(this, {
			frame : false,
			border : true,
			columnLines : true,
			selModel : {
				selType : 'rowmodel',
				mode : 'MULTI'
			},

			plugins : [
				Ext.create('Ext.grid.plugin.CellEditing',
					{
						clicksToEdit : 1
					})
			],

			readOnly : true,

			viewConfig : {
				stripeRows : false,
				//                getRowClass : function() {
				//                    if (this.up('gridpanel').readOnly) {
				//                          return ('grid-row-protected');
				//                    }
				//                }, 
				enableTextSelection : true,
				deferEmptyText : true
			},

			store : {
				type : 'ownedCars'
			},

			columns : [

				this.getColNumberer(),
				this.getColOwnedCar(),
				this.getColTypeOfService(),
				this.getColDateOfService(),
				this.getColCurrentKm(),
				this.getColAdditionalInfo(),
				this.getColInvoices()

			],

			store : {
				type : 'service'
			},

			dockedItems : [
				{
					xtype : 'toolbar',
					dock : 'top',
					height : 36,
					padding : '0 0 0 5',
					items : [

						'->',
						{
							xtype : 'button',
							cls : 'delete-focus-bg',
							iconCls : 'x-fa fa-plus-square',
							bind : {
								disabled : '{ !insertNewEnabled }'
							},
							handler : 'addNewRow'
						},
						{
							xtype : 'button',
							cls : 'delete-focus-bg',
							iconCls : 'x-fa x-fa fa-pencil-square-o',
							bind : {
								disabled : '{ !gridRowSelected }'
							},
							handler : 'openRow'
						},
						{
							xtype : 'button',
							cls : 'delete-focus-bg',
							iconCls : 'x-fa fa-trash',
							bind : {
								disabled : '{ !rowDeleteEnabled }'
							},
							handler : 'deleteSelectedRows'
						},
						{
							xtype : 'button',
							cls : 'delete-focus-bg',
							iconCls : 'x-fa fa-undo',
							bind : {
								disabled : '{ !rowUndoEnabled }'
							},
							handler : 'undoSelectedRowsChanges'
						}

					]
				}
			]
		});

		this.callParent(arguments);

	},

	getColNumberer : function() {
		return {
			xtype : 'rownumberer',
			sortable : false,
			hideable : false
		};
	},

	getColIcon : function() {
		return {
			width : 35,
			renderer : function(value, metaData, record) {
				var classAttr = "";
				if (record.get('newItem')) {
					classAttr = "class='fa fa-file-o'";
				} else if (record.get('deleted')) {
					classAttr = "class='fa fa-trash'";
				} else if (record.get('changed')) {
					classAttr = "class='fa fa-check'";
				}
				return "<i " + classAttr + " ></i>";
			}
		};
	},

	getColOwnedCar : function() {
		return {
			dataIndex : 'carId',
			text : 'Car',
			tooltip : 'Select from your cars',
			width : 320,
			cellWrap : this.colTextWrap,
			editor : {
				xtype : 'combobox',
				valueField : 'typeName',
				tpl : Ext.create('Ext.XTemplate',
					'<tpl for=".">',
					'<div class="x-boundlist-item">{manufacturerName} ({typeName} - {buildDate})</div>',
					'</tpl>'
				),
				displayTpl : Ext.create('Ext.XTemplate',
					'<tpl for=".">',
					'{manufacturerName} ({typeName} - {buildDate})',
					'</tpl>'
				),
				store : 'OwnedCars',
				listeners : {
                	'select' : function (cbo,value) {
                		
						var gridRecord = this.ownerCt.grid.getSelectionModel().getSelection()[0];
						gridRecord.set('carId', value.data.manufacturerName + " (" + value.data.typeName + " - " + value.data.buildDate + ")");
						
						var allRecords = this.up('grid').getStore().data.items;
						
					}
                }
			}
		}
	},

	getColTypeOfService : function() {
		return {
			dataIndex : 'typeOfService',
			text : 'Service Type',
			tooltip : 'Select service type',
			width : 320,
			cellWrap : this.colTextWrap,
			editor : {
				xtype : 'combobox',
				valueField : 'serviceId',
		        displayField: 'serviceName',
				store : 'ServiceTypes'
			}
		}
	},

	getColCurrentKm : function() {
		return {
			dataIndex : 'currentKm',
			text : 'Car kilometers on that day',
			flex : 1,
			cellWrap : this.colTextWrap
		}
	},

	getColDateOfService : function() {
		return {
			dataIndex : 'dateOfService',
			text : 'Date of service',
			flex : 1,
			cellWrap : this.colTextWrap,
			editor : {
				xtype : 'datefield',      
			}
		}
	},

	getColAdditionalInfo : function() {
		return {
			dataIndex : 'additionalInfo',
			text : 'Additional info',
			flex : 1,
			cellWrap : this.colTextWrap
		}
	},

	getColInvoices : function() {
		return {
			dataIndex : 'invoices',
			text : 'Invoices',
			flex : 1,
			cellWrap : this.colTextWrap
		}
	}
});