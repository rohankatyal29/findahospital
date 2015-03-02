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

Ext.define('FindAHospital.controller.MapWithSearchDetail', {
    extend: 'Ext.app.Controller',
    requires: [
            'FindAHospital.view.MapWithSearchDetail',
            'FindAHospital.view.HospitalList'
    ],
    config: {

        refs: {
            mapBackBtn: '#mapBtnBack',
            hospitalListContainer: {
                                selector: 'hospitallistcontainer',
                                xtype: 'hospitallistcontainer',
                                autoCreate: true
                            }  
        },

        control: {
            "mapBackBtn": {
                tap: 'onMapBackBtnTap'
            }
        }
    },

    getSlideRightTransition: function () {
        return { type: 'slide', direction: 'right' };
    },

    onMapBackBtnTap: function() {
        Ext.Viewport.animateActiveItem(this.getHospitalListContainer(), this.getSlideRightTransition());
    }

});


