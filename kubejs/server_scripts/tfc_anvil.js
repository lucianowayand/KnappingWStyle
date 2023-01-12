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
            "punch_last",
            "hit_not_last",
            "bend_not_last"
        ]
    })
    event.custom({
        type: 'tfc:anvil',
        input: {
            item: 'tfc:metal/sheet/brass',
        },
        result: {
            item: 'create:brass_ladder',
            count: 16
        },
        tier: 3,
        rules: [
            "punch_last",
            "hit_not_last",
            "bend_not_last"
        ]
    })
    event.custom({
        type: 'tfc:anvil',
        input: {
            item: 'tfc:metal/sheet/copper',
        },
        result: {
            item: 'create:copper_ladder',
            count: 16
        },
        tier: 3,
        rules: [
            "punch_last",
            "hit_not_last",
            "bend_not_last"
        ]
    })

    event.custom({
        type: 'tfc:anvil',
        input: {
            item: 'tfc:metal/double_sheet/wrought_iron',
        },
        result: {
            item: 'kubejs:unfinished_propeller',
            count: 1
        },
        tier: 3,
        rules: [
            "punch_last",
            "bend_not_last",
            "punch_not_last"
        ]
    })
    event.custom({
        type: 'tfc:anvil',
        input: {
            item: 'tfc:metal/double_sheet/wrought_iron',
        },
        result: {
            item: 'kubejs:unfinished_whisk',
            count: 1
        },
        tier: 3,
        rules: [
            "bend_last",
            "punch_not_last",
            "upset_not_last"
        ]
    })
    event.custom({
        type: 'tfc:anvil',
        input: {
            item: 'tfc:metal/double_sheet/brass',
        },
        result: {
            item: 'kubejs:unfinished_brass_hand',
            count: 1
        },
        tier: 3,
        rules: [
            "bend_last",
            "hit_not_last",
            "hit_not_last"
        ]
    })
})