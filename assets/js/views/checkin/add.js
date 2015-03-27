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
                this.$el.html(this.template());
                console.log(' / CheckInAddView Render');
            },
            events: {
                "submit #chekcInForm": "saveChekcInForm"
            },
            saveChekcinForm: function(event) {
                event.preventDefault();
                
                checkin = new CheckInModel();

                serializeArray = $(event.currentTarget).serializeArray();

                $.each(serializeArray, function(i, o) {
                    checkin.set(o.name, o.value);
                });
                checkin.save();
            }

        });

        return CheckInAddView;

});
