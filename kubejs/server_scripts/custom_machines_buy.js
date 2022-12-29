onEvent('recipes', (event) => {
    event.recipes.custommachinery.custom_machine("kws:trading_machine", 100)
    .requireItem(Item.of('minecraft:paper', "{shopping:'acacia_log',display:{Name:'{\"text\":\"Shopping Permit - Log\"}'}}"), "trading_marker")
    .requireItem('8x kubejs:coin_gold', "trading_input")
    .produceItem('16x tfc:wood/log/acacia', "trading_output")
    .produceItem(Item.of('minecraft:paper', "{shopping:'acacia_log',display:{Name:'{\"text\":\"Shopping Permit - Log\"}'}}"), "trading_marker")

    event.recipes.custommachinery.custom_machine("kws:trading_machine", 100)
    .requireItem(Item.of('minecraft:paper', "{shopping:'sticks',display:{Name:'{\"text\":\"Shopping Permit - Sticks\"}'}}"), "trading_marker")
    .requireItem('4x kubejs:coin_gold', "trading_input")
    .produceItem('16x minecraft:stick', "trading_output")
    .produceItem(Item.of('minecraft:paper', "{shopping:'sticks',display:{Name:'{\"text\":\"Shopping Permit - Sticks\"}'}}"), "trading_marker")

    event.recipes.custommachinery.custom_machine("kws:trading_machine", 100)
    .requireItem(Item.of('minecraft:paper', "{shopping:'loose_stone',display:{Name:'{\"text\":\"Shopping Permit - Pebbles\"}'}}"), "trading_marker")
    .requireItem('2x kubejs:coin_gold', "trading_input")
    .produceItem('32x tfc:rock/loose/phyllite', "trading_output")
    .produceItem(Item.of('minecraft:paper', "{shopping:'loose_stone',display:{Name:'{\"text\":\"Shopping Permit - Pebbles\"}'}}"), "trading_marker")

    event.recipes.custommachinery.custom_machine("kws:trading_machine", 100)
    .requireItem(Item.of('minecraft:paper', "{shopping:'clay',display:{Name:'{\"text\":\"Shopping Permit - Clay\"}'}}"), "trading_marker")
    .requireItem('8x kubejs:coin_gold', "trading_input")
    .produceItem('16x minecraft:clay_ball', "trading_output")
    .produceItem(Item.of('minecraft:paper', "{shopping:'clay',display:{Name:'{\"text\":\"Shopping Permit - Clay\"}'}}"), "trading_marker")
})
  
