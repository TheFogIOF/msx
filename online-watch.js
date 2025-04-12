(function() {
    'use strict';
    function startPlugin() {
        window.plugin_ready = true;

        Lampa.Lang.add({
            watch_button: {
                ru: "Онлайн-просмотр",
                en: "Online Watch",
                uk: "Онлайн-перегляд",
                be: "Анлайн-прагляд"
            }
        });
    
        function appReady() {
    
        }
    
        function fullComplite() {
            var watch_button = '<div class="full-start__button selector button--watch"> <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="14" cy="14.5" r="13" stroke="currentColor" stroke-width="2.7"></circle> <path d="M18.0739 13.634C18.7406 14.0189 18.7406 14.9811 18.0739 15.366L11.751 19.0166C11.0843 19.4015 10.251 18.9204 10.251 18.1506L10.251 10.8494C10.251 10.0796 11.0843 9.5985 11.751 9.9834L18.0739 13.634Z" fill="currentColor"></path> </svg> <span>Онлайн-просмотр</span> </div>';
            var btn = $(Lampa.Lang.translate(watch_button));
        }
    
        //events
    
        Lampa.Listener.follow('full', function(e) {
            if (e.type == 'complite') fullComplite();
        });
    
        if (window.appready) appReady(); else {
            Lampa.Listener.follow('app', function(e) {
                if (e.type == 'ready') appReady();
            });
        }
    }
    if (!window.plugin_ready) startPlugin();
})();