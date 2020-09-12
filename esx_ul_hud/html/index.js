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
        case 'money':
                $("#cash").html(event.data.cash);
                $("#bank").html(event.data.bank);
                $("#black").html(event.data.black);
                $(".numbers").each(function(){
                    if ($(this).css("width").replace(/[^-\d\.]/g, '') > 63 ) {
                        $(this).css("font-size", "13px");
                    }
                     if ($(this).css("width").replace(/[^-\d\.]/g, '') > 66 ) {
                        $(this).html("No space");
                    }
                });
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

$(function(){

        if (Configs.Pos !== "custom") {
            switch (Configs.Pos) {
                case 'top-left':
                    $(".container").css("top", "5px");
                    $(".container").css("left", "5px");
                break
                case 'top-right':
                    $(".container").css("top", "5px");
                    $(".container").css("right", "5px");
                    console.log("top-right")
                break
                case 'bottom-right':
                    $(".container").css("right", "5px");
                    $(".container").css("bottom", "5px");
                break
                case 'next-to-map':
                    $(".container").css("left", "325px");
                    $(".container").css("bottom", "16px");
                break
                default:
                    $(".container").css("top", "5px");
                    $(".container").css("left", "5px");
            }
        }

        if (Configs.IsMoney === true) {
            $(".money-table").removeClass("hidden");
        }

        if (!Configs.StaminaRow) {
            $("#stamina-row").addClass("hidden");
        }

        if (Configs.CustomColor === true) {
            document.documentElement.style.setProperty('--health-color', Configs.Colors.Health);
            document.documentElement.style.setProperty('--armor-color', Configs.Colors.Armour);
            document.documentElement.style.setProperty('--food-color', Configs.Colors.Hunger);
            document.documentElement.style.setProperty('--water-color', Configs.Colors.Thirst);
            document.documentElement.style.setProperty('--stamina-color', Configs.Colors.Stamina);
            document.documentElement.style.setProperty('--oxigen-color', Configs.Colors.Oxygen);
            document.documentElement.style.setProperty('--writing-color', Configs.Colors.Tophalf);
            document.documentElement.style.setProperty('--border-color', Configs.Colors.Border);
            document.documentElement.style.setProperty('--bar-icon-color', Configs.Colors.Baricons);
            document.documentElement.style.setProperty('--drunk-color', Configs.Colors.Drunk);
        }
})