onEvent('recipes', (event) => {
    event.custom({
        type: "tfc:welding",
        first_input: {
            item: "tfc:metal/ingot/steel"
        },
        second_input: {
            item: "tfc:metal/sheet/zinc"
        },
        tier: 3, // Tier 1 = Available on copper anvils and above.
            result: {
            item: "kubejs:galvanized_steel"
        }
    })
})