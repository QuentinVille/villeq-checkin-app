define(
    [
        'jquery',
        'underscore',
        'backbone',
        'collections/checkins',
        'text!./../../../templates/checkin/list.html' // le plugin text permet de récupérer le template
    ], function($,_,Backbone,CheckInCollection, checkinListTemplate){

        var CheckInListView = Backbone.View.extend({
            el: '#content',
            template : _.template(checkinListTemplate),

            render: function(){
                console.log('CheckInListView Render');
                var self = this;
                checkInCollection = new CheckInCollection();
                checkInCollection.fetch({
                    success: function (checkins){
                        console.log(self.$el);
                        console.log(checkins.models);

                        _.each(checkins.models, function (checkin){
                            console.log(checkin.get('lat'));
                            console.log(checkin.get('lng'));
                        });


                        self.$el.html(self.template({
                            checkInList: checkins.models 
                        }));
                        
                    }
                })
            }

        });

        return CheckInListView;

});
