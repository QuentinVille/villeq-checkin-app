define(
    [
        'jquery',
        'underscore',
        'backbone',
        'models/checkin',
        'text!./../../../templates/checkin/add.html' // le plugin text permet de récupérer le template
    ], function($,_,Backbone,CheckInModel, checkinAddTemplate){
        
        var CheckInAddView = Backbone.View.extend({
            el: '#chekinadd',
            template : _.template(checkinAddTemplate),

            render: function(options){
                console.log('CheckInAddView Render');
                this.$el.html(this.template());
                console.log(' / CheckInAddView Render');
            },
            
            events: {
                 "submit #checkinform": "saveCheckIn"
            },

            saveCheckIn: function(event){
                event.preventDefault();

                checkin = new CheckInModel();

                serializeArray = $(event.currentTarget).serializeArray();


                $.each(serializeArray, function(i, o){
                    // console.log(i);
                    // console.log(o);
                    // console.log(o.name);
                    // console.log(o.value);
                    checkin.set(o.name, o.value)

                });
                console.log(checkin);

                checkin.save();
                
            }




        });

        return CheckInAddView;

});
