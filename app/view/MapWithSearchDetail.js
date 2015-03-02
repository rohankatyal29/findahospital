
Ext.define('FindAHospital.view.MapWithSearchDetail', {
    extend: 'Ext.Container',
    xtype: 'mapwithsearchdetail',
    requires: [
        'Ext.Map'
    ],

    config: {
        title: 'Information',
        layout: 'vbox',

        items: [
            {
                xtype: 'titlebar',
                items: [
                    {
                        xtype: 'button',
                        id: 'mapBtnBack',
                        ui: 'back',
                        text: 'back'

                    }
                ],
                
            },
            {
                id: 'content',
                tpl: [
                    '<div class="map-information-container">',
                        '<div class="name" style="margin: 10px">{name}<br />{rating}</div>',
                    '</div>'
                ].join('')
            },
            {
                xtype: 'map',
                flex: 1,
                id: 'hospitalMapDetails',
                mapOptions: {
                    zoomControl: true,
                    panControl: true,
                    rotateControl: true,
                    streetViewControl: true,
                    mapTypeControl: true,
                    zoom: 10
                }
            }
        ],

        record: null,
        marker: null
    },

    updateRecord: function(newRecord) {
        if (newRecord) {

            var me = this;
            
            //remove previous markers
            if(me.marker != undefined){
                me.marker.setMap(null);
            }
            
            this.down('#content').setData(newRecord.data);
            var mapPanel = Ext.ComponentQuery.query("#hospitalMapDetails")[0];
            var map = mapPanel.getMap();
            var coordinate_location = new google.maps.LatLng(newRecord.data.lat, newRecord.data.lng);
            var placeLoc = coordinate_location;
            map.setZoom(13);
            map.setCenter(placeLoc);
            
            me.marker = new google.maps.Marker({
                map: map,
                position: placeLoc,
                animation: google.maps.Animation.DROP,
                icon: 'resources/images/hospital-icon-map.png'
            });

            me.marker.info = new google.maps.InfoWindow({
                content: 'Name: ' + newRecord.data.name + '<br />Rating: ' + newRecord.data.rating      
            });

            google.maps.event.addListener(me.marker, 'mouseover', function() {
                me.marker.info.open(map, me.marker);
            });

            google.maps.event.addListener(me.marker, 'mouseout', function() {
                me.marker.info.close(map, me.marker);
            });
           
        }
    },

});







