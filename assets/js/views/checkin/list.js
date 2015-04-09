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
            map: {},

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

                        _.each(checkins.models, function (checkin){
                            console.log(checkin.get('lat'));
                            console.log(checkin.get('lng'));

                        });

                        this.map = new google.maps.Map(
                            document.getElementById('map-canvas'),{
                            zoom:16,
                            center: new google.maps.LatLng(43.81451767218152, -91.25057458877563),
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        });       
                        
                    }


                })
            }

        });

        return CheckInListView;

});
