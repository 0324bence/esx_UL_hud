var Configs = {}

//Display money on hud
//Pénz megjelenítése a hud-on
Configs.IsMoney = false

//Display the row with the Stamina and Oxygen
//A Stamina és oxigén sorának megjelenítése
Configs.StaminaRow = true

//Enable custom colors to be selected here in the config file
//Személyre sazbahtó színek választása, itt a configban
Configs.CustomColor = false

//Options: - top-left - top-right - bottom-right - next-to-map - custom -
//If you choose custom, you can find the settings on top of the CSS file in the html folder and uncomment them (remove the /**/ part)
Configs.Pos = "top-left"

//If CustomColors is true then here you can write your own colors
//Ha a CustomColors true, akkor itt lehet megadni az értékeket
Configs.Colors = {
    //Any color format supported by CSS is acceptable I just like rgb more.
    //You need to change the values inside the "". You need to write out the whole thing.
    //So fe.: rgb(34, 34, 65) or #ffffff
    Health:       "",
    Armour:       "",
    Hunger:       "",
    Thirst:       "",
    Stamina:      "",
    Oxygen:       "",
    Drunk:        "",
    Border:       "",
    //Top half writing and icons
    Tophalf:      "",
    //Icons in the bars
    Baricons:     "",
}