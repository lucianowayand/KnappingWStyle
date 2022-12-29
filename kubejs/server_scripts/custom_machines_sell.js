onEvent('recipes', (event) => {
    logTypes.forEach((logType) => {
        event.recipes.custommachinery.custom_machine("kws:trading_machine", 100)
        .requireItem(Item.of('minecraft:paper', "{shopping:'acacia_log',display:{Name:'{\"text\":\"Shopping Permit - Log\"}'}}"), "trading_marker")
        .requireItem(`16x tfc:wood/log/${logType}`, "trading_input")
        .produceItem('4x kubejs:coin_gold', "trading_output")
        .produceItem(Item.of('minecraft:paper', "{shopping:'acacia_log',display:{Name:'{\"text\":\"Shopping Permit - Log\"}'}}"), "trading_marker")    
    })
    
    rockTypes.forEach((rockType) => {
        event.recipes.custommachinery.custom_machine("kws:trading_machine", 100)
        .requireItem(Item.of('minecraft:paper', "{shopping:'loose_stone',display:{Name:'{\"text\":\"Shopping Permit - Pebbles\"}'}}"), "trading_marker")
        .requireItem(`32x tfc:rock/loose/${rockType}`, "trading_input")
        .produceItem('kubejs:coin_gold', "trading_output")
        .produceItem(Item.of('minecraft:paper', "{shopping:'loose_stone',display:{Name:'{\"text\":\"Shopping Permit - Pebbles\"}'}}"), "trading_marker")
    })

    event.recipes.custommachinery.custom_machine("kws:trading_machine", 100)
    .requireItem(Item.of('minecraft:paper', "{shopping:'sticks',display:{Name:'{\"text\":\"Shopping Permit - Sticks\"}'}}"), "trading_marker")
    .requireItem('16x minecraft:stick', "trading_input")
    .produceItem('2x kubejs:coin_gold', "trading_output")
    .produceItem(Item.of('minecraft:paper', "{shopping:'sticks',display:{Name:'{\"text\":\"Shopping Permit - Sticks\"}'}}"), "trading_marker")

    event.recipes.custommachinery.custom_machine("kws:trading_machine", 100)
    .requireItem(Item.of('minecraft:paper', "{shopping:'clay',display:{Name:'{\"text\":\"Shopping Permit - Clay\"}'}}"), "trading_marker")
    .requireItem('16x minecraft:clay_ball', "trading_input")
    .produceItem('4x kubejs:coin_gold', "trading_output")
    .produceItem(Item.of('minecraft:paper', "{shopping:'clay',display:{Name:'{\"text\":\"Shopping Permit - Clay\"}'}}"), "trading_marker")

    event.recipes.custommachinery.custom_machine("kws:trading_machine", 100)
    .requireItem(Item.of('minecraft:paper', "{shopping:'beer',display:{Name:'{\"text\":\"Shopping Permit - Beer\"}'}}"), "trading_marker")
    .requireFluid(Fluid.of('tfc:beer', 1000), "trading_fluid")
    .produceItem('12x kubejs:coin_gold', "trading_output")
    .produceItem(Item.of('minecraft:paper', "{shopping:'beer',display:{Name:'{\"text\":\"Shopping Permit - Beer\"}'}}"), "trading_marker")
})
  
