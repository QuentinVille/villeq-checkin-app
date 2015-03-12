define(
    [
        'jquery',
        'underscore',
        'backbone',
        'router' // -> router.js
    ], function($,_,Backbone,Router){
        var initialize = function(){
            $('body').html('test page');
            Router.initialize();
        }

        return {
            initialize: initialize
        };
});
