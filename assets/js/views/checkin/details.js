define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/checkin',
        'text!./../../../templates/checkin/details.html' // le plugin text permet de récupérer le template
    ], function($,_,Backbone,CheckInModel){
        
        var CheckInDetailsView = Backbone.View.extend({
            el: '#chekinlist',
            template : _.template(checkinDetailsTemplate),

            render: function(options){
                console.log('CheckInDetailsView Render ' + options.id);
                var self = this;
                if(options.id){
                    self.checkIn = new CheckInModel({id: options.id});
                    self.checkIn.fetch({
                        success: function(checkin){
                            console.log(checkin);

                            self.$el.html(self.template({
                            checkInDetail: checkins.models 
                        }));
                           
                        }
                    });
                }
            }

        });

        return CheckInDetailsView;

});
