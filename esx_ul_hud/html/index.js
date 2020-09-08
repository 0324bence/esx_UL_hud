window.addEventListener('message', function (event) {
    switch (event.data.action) {
        case 'tick':
            if (event.data.show) {
                $('.container').hide();
            } else {
                $('.container').show();
            }
            $(".health-bar").css("width", event.data.health + "%");
            $(".shield-bar").css("width", event.data.armor + "%");
            $(".stamina-bar").css("width", event.data.stamina + "%");
            $(".oxigen-bar").css("width", event.data.air + "%");
            $(".id").html(event.data.source);
            $("#time").html(event.data.time);
            break
        case 'updateStatus':
                $('.food-bar').css('width', event.data.hunger + '%');
                $('.water-bar').css('width', event.data.thirst + '%');
                if (event.data.drunk > 0) {
                    $(".drunk-bar").css('width', event.data.drunk + '%');
                    $(".drunk-row").slideDown(200);
                } else {
                    $(".drunk-row").fadeOut(200);
                }
            break
        case 'jobset':
                $('.job-name').html(event.data.jobname);
                $('.job-rank').html(event.data.jobrank);
            break
        case 'showui':
                $('body').show();
            break
        case 'hideui':
                $('body').hide();
            break
    }
})