onEvent('recipes', (event) => {
  logTypes.forEach((logType) => {
    event.smelting('minecraft:charcoal', `tfc:wood/log/${logType}`).xp(0).cookingTime(120)
  })

  event.smelting('tfc:ceramic/ingot_mold', 'tfc:ceramic/unfired_ingot_mold').xp(0).cookingTime(120)
  
  toolHeads.forEach((element) => {
    event.smelting(`tfc:ceramic/${element}_head_mold`, `tfc:ceramic/unfired_${element}_head_mold`).xp(0).cookingTime(120)
  })
  
  toolBlades.forEach((element) => {
    event.smelting(`tfc:ceramic/${element}_blade_mold`, `tfc:ceramic/unfired_${element}_blade_mold`).xp(0).cookingTime(120)
  })

})