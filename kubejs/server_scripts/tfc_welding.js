onEvent('recipes', (event) => {
    event.custom({
        type: "tfc:welding",
        first_input: {
            item: "tfc:metal/ingot/wrought_iron"
        },
        second_input: {
            item: "tfc:metal/sheet/zinc"
        },
        tier: 3,
        result: {
            item: "kubejs:galvanized_steel"
        }
    })

    event.custom({
        type: "tfc:welding",
        first_input: {
            item: "kubejs:galvanized_steel"
        },
        second_input: {
            item: "kubejs:galvanized_steel"
        },
        tier: 3,
        result: {
            item: "kubejs:galvanized_steel_double_ingot"
        }
    })

    event.custom({
        type: "tfc:welding",
        first_input: {
            item: "kubejs:galvanized_steel_sheet"
        },
        second_input: {
            item: "kubejs:galvanized_steel_sheet"
        },
        tier: 3,
        result: {
            item: "kubejs:galvanized_steel_double_sheet"
        }
    })

    event.custom({
        type: "tfc:welding",
        first_input: {
            item: "kubejs:unfinished_propeller"
        },
        second_input: {
            item: "create:shaft"
        },
        tier: 3,
        result: {
            item: "create:propeller"
        }
    })
    event.custom({
        type: "tfc:welding",
        first_input: {
            item: "kubejs:unfinished_whisk"
        },
        second_input: {
            item: "create:shaft"
        },
        tier: 3,
        result: {
            item: "create:whisk"
        }
    })
    event.custom({
        type: "tfc:welding",
        first_input: {
            item: "kubejs:unfinished_brass_hand"
        },
        second_input: {
            item: "create:shaft"
        },
        tier: 3,
        result: {
            item: "create:brass_hand"
        }
    })
})