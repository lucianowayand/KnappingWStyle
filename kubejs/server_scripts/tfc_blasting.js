onEvent('recipes', (event) => {
  logTypes.forEach((logType) => {
    event.smelting('minecraft:charcoal', `tfc:wood/log/${logType}`).xp(0).cookingTime(120)
  })
})
