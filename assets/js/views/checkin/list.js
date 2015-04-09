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
            map: null,
            myLatlng: null,
            mapOptions: null,
            markers: [],
            marker: null,

            render: function(){
                console.log('CheckInListView Render');
                var self = this;
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
                            console.log(checkin.get('lat'));
                            console.log(checkin.get('lng'));

                            checkinLatlng = new google.maps.LatLng(checkin.get('lat'),checkin.get('lng')); 

                            marker = new google.maps.Marker({
                                position: checkinLatlng,
                                map: map,
                                title: 'MyCheckin with id='+checkin.get('id')
                            });

                        });

                        // this.map = new google.maps.Map(
                        //     document.getElementById('map-canvas'),{
                        //     zoom:16,
                        //     center: new google.maps.LatLng(43.81451767218152, -91.25057458877563),
                        //     mapTypeId: google.maps.MapTypeId.ROADMAP
                        // });       
                        
                    }


                })
            }

        });

        return CheckInListView;

});
