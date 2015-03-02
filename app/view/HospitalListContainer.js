Ext.define("FindAHospital.view.HospitalListContainer", {
    extend: "Ext.Container",
    alias: "widget.hospitallistcontainer",
    requires: [
            'FindAHospital.view.HospitalSearch',
            'FindAHospital.view.HospitalList',
            'FindAHospital.store.Locations',
            'FindAHospital.model.Location'
    ],

        config: {
            // items: [
            //     {
            //         xtype: 'titlebar',
            //         docked: 'top',
            //         items:[
            //             {
            //                 xtype: 'button',
            //                 text: 'back',
            //                 ui: 'back'
            //             }
            //         ]
            //     }
            // ],
        layout: {
            type: 'fit'
        },
        ref: {
            hospitalSearchView: {
                selector: 'search',
                xtype: 'search',
                autoCreate: true
            } 

        }

    },

    initialize: function () {

        this.callParent(arguments);

        console.log('hospitallistcontainer');

        var backButton = {
            xtype: "button",
            text: 'Back',
            id: 'backToHospitalSearch',
            ui: 'back',
            scope: this
        };

        var logOffBtn = {
                xtype: 'button',
                text: 'Log Off',
                id: 'logOffButton',
                align: 'right'
            }

        var topToolbar = {
            xtype: "toolbar",
            title: 'FindAHospital List',
            docked: "top",
            items: [
                backButton,
                { xtype: 'spacer' },
                logOffBtn
            ]
        };

        var hospitalsList = {
            xtype: "hospitallist",
            store: 'Locations'
        };

        this.add([topToolbar, hospitalsList]);
    },

});