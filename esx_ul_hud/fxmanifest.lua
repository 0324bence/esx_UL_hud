fx_version 'bodacious'
games { 'rdr3', 'gta5' }

description 'Original Uppercase Life hud'

author '0324bence'

version '1.2'

client_script 'client.lua'

server_script 'server.lua'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/index.js',
    'html/index.css',
    'config.js'
}

dependencies {
    'es_extended',
    'esx_status',
    'esx_basicneeds'
}