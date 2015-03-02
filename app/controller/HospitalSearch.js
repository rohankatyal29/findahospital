/*
 * File: app/controller/Main.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('FindAHospital.controller.HospitalSearch', {
    extend: 'Ext.app.Controller',
    requires: [
            'FindAHospital.view.HospitalListContainer',
            'FindAHospital.view.HospitalSearch',
            'FindAHospital.view.HospitalList',
            'FindAHospital.store.Locations',
            'FindAHospital.model.Location'
    ],
    config: {

        refs: {
            btnHospitalSearch: 'search button#hospitalSearchButton',
            hospitalList: {
                                selector: 'hospitallistcontainer',
                                xtype: 'hospitallistcontainer',
                                autoCreate: true
                            }
        },

        control: {
            "btnHospitalSearch": {
                tap: 'onHospitalSearchTap'
            }
        }
    },

    getSlideLeftTransition: function () {
        return { type: 'slide', direction: 'left' };
    },

    onHospitalSearchTap: function() {

        Ext.Viewport.animateActiveItem(this.getHospitalList(), this.getSlideLeftTransition());
    }

});

