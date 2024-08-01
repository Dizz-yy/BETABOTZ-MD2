global.owner = ['6283138453451']  
global.mods = ['6288218774193'] 
global.prems = ['6283138453451']
global.nameowner = 'Lann'
global.numberowner = '6283138453451'
global.mail = '-' 
global.gc = '-'
global.instagram = 'https://instagram.com/dikimationgraphics'
global.wm = '© Tio'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Arona Botz'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.lann = 'YOUR_APIKEY_HERE' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'YOUR_APIKEY_HERE'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'APIKEY', 
  'https://api.botcahx.eu.org': 'APIKEY'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
