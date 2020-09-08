ESX = nil

Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj)
            ESX = obj
        end)
        Citizen.Wait(0)
    end

    while ESX.GetPlayerData().job == nil do
        Citizen.Wait(10)
    end

    PlayerData = ESX.GetPlayerData()

    while PlayerData == nil do

        PlayerData = ESX.GetPlayerData()
        Citizen.Wait(10)
    end
end)

RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function (job)
    PlayerData.job = job
    while ESX.GetPlayerData().job == nil do
		Citizen.Wait(10)
	end
    PlayerData = ESX.GetPlayerData()
    Citizen.Wait(3000)
    SendNUIMessage({
        action = 'jobset',
        jobname = job.label,
        jobrank = job.grade_label
    })
end)

RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function(playerData)
    PlayerData = playerData
    SendNUIMessage({
        action = 'jobset',
        jobname = playerData.job.label,
        jobrank = playerData.job.grade_label
    })
end)

function CalculateTimeToDisplay()
    hour = GetClockHours()
    minute = GetClockMinutes()

    local obj = {}

    if minute <= 9 then
        minute = "0" .. minute
    end

    obj.hour = hour
    obj.minute = minute

    return obj
end

--General Updates
Citizen.CreateThread(function()
    Citizen.Wait(0)
    SendNUIMessage({
        action = 'showui'
    })

    while true do
        local player = PlayerPedId()
        local time = CalculateTimeToDisplay()

        SendNUIMessage({
            action = 'tick',
            source = GetPlayerServerId(NetworkGetEntityOwner(GetPlayerPed(-1))),
            time = time.hour .. ":" .. time.minute,
            show = IsPauseMenuActive(),
            health = (GetEntityHealth(player) - 100),
            armor = GetPedArmour(player),
            stamina = 100 - GetPlayerSprintStaminaRemaining(PlayerId()),
            air = GetPlayerUnderwaterTimeRemaining(PlayerId()),
        })
        Citizen.Wait(200)
    end
end)

--Status Updates
Citizen.CreateThread(function()
    while true do
        TriggerEvent('esx_status:getStatus', 'hunger', function(hunger)
            TriggerEvent('esx_status:getStatus', 'thirst', function(thirst)
                TriggerEvent('esx_status:getStatus', 'drunk', function(drunk)
                    SendNUIMessage({
                        action = "updateStatus",
                        hunger = hunger.getPercent(),
                        thirst = thirst.getPercent(),
                        drunk = drunk.getPercent(),
                    })
                end)
            end)
        end)
        Citizen.Wait(500)
    end
end)