onEvent('recipes', event => {
    event.recipes.create.mixing('tfc:large_soaked_hide',[
		Fluid.of('tfc:limewater',500),
        'tfc:large_raw_hide'
	])
    event.recipes.create.mixing('tfc:large_prepared_hide',[
        Fluid.of('minecraft:water',500),
        'tfc:large_scraped_hide'
    ])
    event.recipes.create.mixing('3x minecraft:leather',[
        Fluid.of('tfc:tannin',500),
        'tfc:large_prepared_hide'
    ])

    event.recipes.create.mixing('tfc:medium_soaked_hide',[
		Fluid.of('tfc:limewater',400),
        'tfc:medium_raw_hide'
	])
    event.recipes.create.mixing('tfc:medium_prepared_hide',[
        Fluid.of('minecraft:water',400),
        'tfc:medium_scraped_hide'
    ])
    event.recipes.create.mixing('2x minecraft:leather',[
        Fluid.of('tfc:tannin',400),
        'tfc:medium_prepared_hide'
    ])

    event.recipes.create.mixing('tfc:small_soaked_hide',[
		Fluid.of('tfc:limewater',300),
        'tfc:small_raw_hide'
	])
    event.recipes.create.mixing('tfc:small_prepared_hide',[
        Fluid.of('minecraft:water',300),
        'tfc:small_scraped_hide'
    ])
    event.recipes.create.mixing('minecraft:leather',[
        Fluid.of('tfc:tannin',300),
        'tfc:small_prepared_hide'
    ])

    event.recipes.create.mixing('16x tfc:mortar',[
        Fluid.of('tfc:limewater',100),
        '#forge:sand'
    ])
})