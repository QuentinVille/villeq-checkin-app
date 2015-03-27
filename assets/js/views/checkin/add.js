define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/checkin',
        'text!./../../../templates/checkin/add.html' // le plugin text permet de récupérer le template

    ], function($,_,Backbone,CheckInModel,CheckInAddTemplate){
        
        var CheckInAddView = Backbone.View.extend({
            el: '#addCheckIn',
            template : _.template(CheckInAddTemplate),

            render: function(options){
                console.log('CheckInAddView Render');
                console.log(this.template());
                this.$el.html(this.template());
                console.log(' / CheckInAddView Render');
 

            }

        });

        return CheckInAddView;

});
