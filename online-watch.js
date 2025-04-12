(function() {
    'use strict';

    function startPlugin() {
        window.plugin_is_ready = true;
  
        function appReady() {
            //lang
            Lampa.Lang.add({
                watch_title: {
                    ru: "Онлайн-просмотр",
                    en: "Online Watch",
                    uk: "Онлайн-перегляд",
                    be: "Анлайн-прагляд"
                },
                watch_button: {
                    ru: "Онлайн-просмотр",
                    en: "Online Watch",
                    uk: "Онлайн-перегляд",
                    be: "Анлайн-прагляд"
                }
            });

            //events   
            Lampa.Listener.follow('full', function(event) {
                if (event.type == 'complite') {
                    console.log("complite");
                    var movie = event.data.movie;
                    var watch_button = document.createElement('div');
                    watch_button.classList.add("full-start__button", "selector", "button--watch");
                    watch_button.innerHTML += "<svg width=\"28\" height=\"29\" viewBox=\"0 0 28 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"14\" cy=\"14.5\" r=\"13\" stroke=\"currentColor\" stroke-width=\"2.7\"></circle> <path d=\"M18.0739 13.634C18.7406 14.0189 18.7406 14.9811 18.0739 15.366L11.751 19.0166C11.0843 19.4015 10.251 18.9204 10.251 18.1506L10.251 10.8494C10.251 10.0796 11.0843 9.5985 11.751 9.9834L18.0739 13.634Z\" fill=\"currentColor\"></path> </svg>";
                    watch_button.innerHTML += "<span>" + Lampa.Lang.translate("watch_button"); + "</span>";
                    watch_button.on("hover:enter", function() {
                        Lampa.Activity.push({
                            url: '',
                            title: Lampa.Lang.translate('watch_title'),
                            component: 'online_mod',
                            search: movie.title,
                            search_one: movie.title,
                            search_two: movie.original_title,
                            movie: movie,
                            page: 1
                          });
                    });

                    Lampa.Activity.render().find(".full-start-new__buttons").prepend(watch_button);
                    
                    //var btn = $(Lampa.Lang.translate(watch_button));
        
                    //if (e.data && e.object) e.object.activity.render().find('.button--watch').last().after(btn);
                }
            });
        }

        if (window.appready) appReady(); else {
            Lampa.Listener.follow('app', function(e) {
                if (e.type == 'ready') appReady();
            });
        }
    }
    if (!window.plugin_is_ready) startPlugin();
})();
