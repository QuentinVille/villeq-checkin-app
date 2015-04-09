define(
    [
        'jquery',
        'underscore',
        'backbone',
        'collections/checkins',
        'text!./../../../templates/checkin/list.html', // le plugin text permet de récupérer le template
        'async!http://maps.google.com/maps/api/js?sensor=false'
    ], function($,_,Backbone,CheckInCollection, checkinListTemplate){

        var CheckInListView = Backbone.View.extend({
            el: '#content',
            template : _.template(checkinListTemplate),

            render: function(){
                console.log('CheckInListView Render');
                var self = this;
                var map = null;
                var myLatlng = null;
                var mapOptions = null;
                var markers = [];
                var marker = null;
                checkInCollection = new CheckInCollection();
                checkInCollection.fetch({
                    success: function (checkins){
                        console.log(self.$el);
                        console.log(checkins.models);

                        self.$el.html(self.template({
                            checkInList: checkins.models
                        })); 

                        // Ici il faut ajouter les coordonnées récupérés qui proviennet de l'ordinateur
                        myLatlng = new google.maps.LatLng(45.1747598,5.7071189); 

                        // Définition des paramètres par défaut d'affichage de la carte
                        mapOptions = {
                            zoom: 12,
                            center: myLatlng
                        }

                        // Génération de la carte dans la view
                        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

                        // Parcours de l'ensemble des checkins et création des markers
                        _.each(checkins.models, function (checkin){
                            checkinLatlng = new google.maps.LatLng(checkin.get('lat'),checkin.get('lng')); 

                            marker = new google.maps.Marker({
                                position: checkinLatlng,
                                map: map,
                                title: 'MyCheckin with id='+checkin.get('id')
                            });
                            markers.push(marker);
                            console.log(marker);
                            console.log(markers);

                        });      
                        
                    }


                })
            }

        });

        return CheckInListView;

});
