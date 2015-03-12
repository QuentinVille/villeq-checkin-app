define(
    [
        // definition des dépendances
        'jquery', // Chargement de lib/jquery/jquery
        'underscore',
        'backbone',
        'views/checkin/list',  // views/checkin/list.js
        'config'
    ], function($,_,Backbone, CheckinListView, Config){

        var Router = Backbone.Router.extend({
            routes:{
                '': 'home',
                'hello' : 'hello',
                'hello/:name' : 'hello'
            }
        })


        var initialize = function(){
            var routeur = new Router;

            $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
                options.url = Config.apiServer + options.url;
                options.crossDomain = {
                    crossDomain: true
                };
            });


            routeur.on('route:home', function(){
                console.log('Home');
                checkInListView = new CheckinListView();
                checkInListView.render();
            });

            routeur.on('route:hello', function(name){
                console.log('hello ' + name);
            });

            Backbone.history.start();

        }

        return {
            initialize: initialize
        };
        /*
        * Ici on retourne ce qu'on veut pouvoir utiliser
        * dans d'autres modules
        */
});
