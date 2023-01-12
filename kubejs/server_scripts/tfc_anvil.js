onEvent('recipes', (event) => {
    event.custom({
        type: 'tfc:anvil',
        input: {
            item: 'kubejs:galvanized_steel_double_ingot',
        },
        result: {
            item: 'kubejs:galvanized_steel_sheet',
            count: 1
        },
        tier: 3,
        rules: [
            "punch_last",
            "bend_not_last",
            "draw_not_last"
        ]
    })

    event.custom({
        type: 'tfc:anvil',
        input: {
            item: 'kubejs:galvanized_steel_double_ingot',
        },
        result: {
            item: 'create:shaft',
            count: 8
        },
        tier: 3,
        rules: [
            "upset_any",
            "upset_any",
            "upset_any"
        ]
    })

    event.custom({
        type: 'tfc:anvil',
        input: {
            item: 'kubejs:galvanized_steel_sheet',
        },
        result: {
            item: 'create:andesite_ladder',
            count: 16
        },
        tier: 3,
        rules: [
            "upset_any",
            "upset_any",
            "upset_any"
        ]
    })
})