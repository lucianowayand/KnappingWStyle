onEvent('recipes', event => {
    event.recipes.createDeploying('tfc:large_scraped_hide',[
        'tfc:large_soaked_hide',
        '#tfc:knives'
    ]).damageIngredient(1)
    event.recipes.createDeploying('tfc:medium_scraped_hide',[
        'tfc:medium_soaked_hide',
        '#tfc:knives'
    ]).damageIngredient(1)
    event.recipes.createDeploying('tfc:small_scraped_hide',[
        'tfc:small_soaked_hide',
        '#tfc:knives'
    ]).damageIngredient(1)

    rockTypes.forEach(element => {
        event.recipes.createDeploying(`tfc:brick/${element}`,[
            `tfc:rock/loose/${element}`,
            '#tfc:chisels'
        ]).damageIngredient(1)

        event.recipes.createDeploying('tfc:ceramic/unfired_ingot_mold',[
            'minecraft:clay',
            `tfc:brick/${element}`
        ])
    })
        
    toolHeads.forEach(element => {
        event.recipes.createDeploying(`tfc:ceramic/unfired_${element}_head_mold`,[
            'minecraft:clay',
            `#tfc:${element}_hard`
        ]).damageIngredient(1)
    })

    toolBlades.forEach(element => {
        event.recipes.createDeploying(`tfc:ceramic/unfired_${element}_blade_mold`,[
            'minecraft:clay',
            `#tfc:${element}_hard`
        ]).damageIngredient(1)
    })

})