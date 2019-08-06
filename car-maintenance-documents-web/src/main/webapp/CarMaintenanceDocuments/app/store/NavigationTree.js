Ext.define('CarMaintenanceDocuments.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',
    alias : 'store.navigationtree',

    storeId: 'NavigationTree',
    
    root: {
        expanded: true,
        children: [
            {
                view: 'dashboard.Dashboard',
                leaf: true,
                iconCls: 'x-fa fa-dashboard',
                routeId: 'dashboard'
            },
            {
                view: 'objects.Objects',
                regulationView : false,
                leaf: true,
                iconCls: 'x-fa fa-map-marker',
                routeId: 'standorte'
            },
            {
                view: 'objects.Objects',
                regulationView : true,
                leaf: true,
                iconCls: 'x-fa fa-sliders',
                routeId: 'regulations'
            },
            {
                view: 'reports.Reports',
                iconCls: 'x-fa fa-file-text-o',
                leaf: true,
                routeId: 'reports'
            },
            {
                view: 'profile.Profile',
                leaf: true,
                iconCls: 'x-fa fa-user',
                routeId: 'profile'
            },
            {
                view: 'settings.Settings',
                leaf: true,
                iconCls: 'x-fa fa-cog',
                routeId: 'settings'
            }
        ]
    }
   
});