/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'CarMaintenanceDocuments.Application',

    name: 'CarMaintenanceDocuments',

    requires: [
        // This will automatically load all classes in the CarMaintenanceDocuments namespace
        // so that application classes do not need to require each other.
        'CarMaintenanceDocuments.*'
    ],

    // The name of the initial view to create.
    mainView: 'CarMaintenanceDocuments.view.main.mainCardView'
});
