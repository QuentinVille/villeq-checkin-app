define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/checkin'
    ], function($,_,Backbone,CheckInModel){
        
        var CheckInDetailsView = Backbone.View.extend({
            el: '#chekinlist',
            // template : _.template(checkinListTemplate),

            render: function(options){
                console.log('CheckInDetailsView Render ' + options.id);
                var self = this;
                if(options.id){
                    self.checkIn = new CheckInModel({id: options.id});
                    self.checkIn.fetch({
                        success: function(checkin){
                            console.log(checkin);
                           
                        }
                    });
                }
            }

        });

        return CheckInDetailsView;

});
