onEvent('recipes', (event) => {
    event.recipes.createFilling('create:andesite_alloy', [
		'tfc:metal/ingot/steel',
		Fluid.of('tfc:metal/zinc', 250)
	])
})