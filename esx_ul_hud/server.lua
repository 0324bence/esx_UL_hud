ESX = nil

TriggerEvent('esx:getSharedObject', function(obj)
    ESX = obj
end)

ESX.RegisterServerCallback('ul-hud:money', function(source, cb)
    local player = ESX.GetPlayerFromId(source)
    cb({
        cash = player.getMoney(),
        bank = player.getAccount('bank').money,
        black = player.getAccount('black_money').money
    })
end)