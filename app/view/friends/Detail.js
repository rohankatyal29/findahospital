Ext.define('FindAHospital.view.friends.Detail', {
    extend: 'Ext.Container',
    alias: 'widget.friendsdetail',
    config: {
        rec: '',
        excuse: '',
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'container',
                height: 110,
                itemId: 'frienddetails',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'container',
                        flex: 1,
                        html: 'Placeholder',
                        itemId: 'frienddetail',
                        margin: '0 5 5 0',
                        padding: '5 5 5 5',
                        style: 'box-shadow: 3px 3px 4px #444; background-color: white',
                        tpl: [
                            '<div style="font-size: 0.8em">',
                            ' {firstName} {lastName}<br />',
                            ' {address}<br />',
                            ' {favoriteBeer} is only {distance} mi away!<br />',
                            ' <span style="font-style: italic; font-size: 0.7em">{excuse}</span>',
                            '</div>'
                        ],
                        scrollable: true
                    },
                    {
                        xtype: 'container',
                        itemId: 'contactbuttons',
                        layout: {
                            type: 'vbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    var top = button.up('friendsdetail');
                                    var mailString = Ext.String.format(
                                    "mailto:{0}?subject=Can I come over&body={1}",
                                    top.getRec().get("email"),
                                    top.getExcuse()
                                    );
                                    location.href=mailString;
                                },
                                itemId: 'btnMail',
                                margin: '5 5 5 5',
                                iconAlign: 'top',
                                iconCls: 'mail',
                                iconMask: true,
                                scope: this
                            },
                            {
                                xtype: 'button',
                                handler: function(button, event) {
                                    var top = button.up('friendsdetail');
                                    location.href='tel:' + top.getRec().get('phone');

                                },
                                itemId: 'btnPhone',
                                margin: '5 5 5 5',
                                width: 40,
                                iconAlign: 'top',
                                iconCls: 'phone1',
                                iconMask: true,
                                scope: this
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'map',
                flex: 1,
                height: 200
            }
        ],
        listeners: [
            {
                fn: 'onContainerInitialize',
                event: 'initialize'
            }
        ]
    },

    onContainerInitialize: function(component, options) {
        var detailPanel = component.down('#frienddetail');

        // massage data
        var data = this.getRec().data;
        data.excuse = this.getExcuse();

        // generate markup from template
        detailPanel.setData(data);

        // get pointer to map component
        var mapPanel = component.down('map');

        // get pointer to passed-in data record
        var rec = this.getRec();

        // wait for map to become instantiated
        Ext.Function.defer(component.initMap,100,this,[component,rec.get('lat'),rec.get('lng')]);
    },

    initMap: function(component,lat,lng) {
        var mapPanel = component.down('map');
        var map = mapPanel.getMap();

        if (map == null) {
            Ext.Function.defer(this.initMap,250,this,[component,lat,lng]);
        } else {
            //set the map center
            mapPanel.setMapCenter({
                latitude: lat, 
                longitude: lng
            });

            // drop a marker
            var pos = new google.maps.LatLng(lat,lng);

            var marker = new google.maps.Marker({
                position : pos,
                map : map
            });

            //display the surrounding traffic
            var trafficLayer = new google.maps.TrafficLayer();
            trafficLayer.setMap(map);
        }
    }

});