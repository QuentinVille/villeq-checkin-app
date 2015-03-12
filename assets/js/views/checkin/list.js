define(
    [
        'jquery',
        'underscore',
        'backbone',
        'collections/checkins'
    ], function($,_,Backbone,CheckInCollection){

        var CheckInListView = Backbone.View.extend({
            render: function(){
                console.log('CheckInListView Render');
                checkInCollection = new CheckInCollection();
                checkInCollection.fetch({
                    success: function (checkins){
                        console.log(checkins.models);
                    }
                })
            }

        });

        return CheckInListView;

});
