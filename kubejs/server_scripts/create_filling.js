onEvent('recipes', (event) => {
    event.recipes.createFilling('kubejs:galvanized_steel', [
		'tfc:metal/ingot/wrought_iron',
		Fluid.of('tfc:metal/zinc', 25)
	])
})